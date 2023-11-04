import * as React from "react";
import Map, { Marker, Source, Layer } from "react-map-gl";
import PopupInfo from "./Popup";

const mapLayers = [
  // Existing Transmission Lines
  {
    name: "Transmission Lines",
    source: {
      id: "lines-existing",
      type: "vector",
      url: "mapbox://connorhogan.clg8a5ebx04nz2rt4gfgxnhc6-9q0ad",
    },
    layer: {
      id: "connor-layer",
      type: "line",
      source: "lines-existing",
      "source-layer": "KZ_2016_Transmission",
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "blue",
        "line-width": ["get", "#StrokeWei"],
      },
    },
  },
  // Existing Substations
  {
    name: "Substations",
    source: {
      id: "substations-existing",
      type: "vector",
      url: "mapbox://connorhogan.clgddstyh08lz2klasj42v91q-8tppe",
    },
    layer: {
      id: "substations-existing-layer",
      type: "circle",
      source: "substations-existing",
      "source-layer": "substations-existing",
      paint: {
        "circle-radius": 3,
        "circle-color": "orange",
      },
    },
  },
  // Population Heatmap
  {
    name: "Population",
    source: {
      id: "pop_kz_stripped_coalesced_30-5jitvy",
      type: "vector",
      url: "mapbox://connorhogan.9a7g31ju",
    },
    layer: {
      id: "pop_kz_stripped_coalesced_30-5jitvy-layer",
      type: "heatmap",
      source: "pop_kz_stripped_coalesced_30-5jitvy",
      "source-layer": "pop_kz_stripped_coalesced_30-5jitvy",
      paint: {
        // Increase the heatmap weight based on frequency and property magnitude
        "heatmap-weight": [
          "interpolate",
          ["linear"],
          ["get", "population"],
          0,
          0,
          100000,
          1,
        ],
        // Increase the heatmap color weight weight by zoom level
        // heatmap-intensity is a multiplier on top of heatmap-weight
        "heatmap-intensity": ["interpolate", ["linear"], ["zoom"], 0, 1, 9, 3],
        // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
        // Begin color ramp at 0-stop with a 0-transparancy color
        // to create a blur-like effect.
        "heatmap-color": [
          "interpolate",
          ["linear"],
          ["heatmap-density"],
          0,
          "rgba(33,102,172,0)",
          0.2,
          "rgb(103,169,207)",
          0.4,
          "rgb(209,229,240)",
          0.6,
          "rgb(253,219,199)",
          0.8,
          "rgb(239,138,98)",
          1,
          "rgb(178,24,43)",
        ],
        // Adjust the heatmap radius by zoom level
        "heatmap-radius": ["interpolate", ["linear"], ["zoom"], 0, 3, 9, 30],
        // Transition from heatmap to circle layer by zoom level
        "heatmap-opacity": ["interpolate", ["linear"], ["zoom"], 7, .8, 9, 0],
      },
    },
  }

];

export default function MapBox({ markers, layers }) {
  console.log(layers)
  const [popupInfo, setPopupInfo] = React.useState(null);
  const [generators, setGenerators] = React.useState([]);
  const [zones, setZones] = React.useState([]);

  const getPlants = async () => {
    const res = await fetch("/api/plants");
    const data = await res.json();
    setGenerators(data.generators);
  };

  const getZones = async () => {
    const res = await fetch("/api/zones");
    const data = await res.json();
    setZones(data.zones);
  };

  React.useEffect(() => {
    getPlants();
    getZones();
  }, []);

  return (
    <Map
      initialViewState={{
        longitude: 66.9237,
        latitude: 48.0196,
        zoom: 4,
      }}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      // mapStyle={layers.includes('Population') ? "mapbox://styles/connorhogan/clhgray1j002e01r53ady8gd4" : "mapbox://styles/mapbox/light-v11"}
      mapStyle="mapbox://styles/mapbox/light-v11"
      // mapStyle="mapbox://styles/connorhogan/clhgray1j002e01r53ady8gd4"
      // mapStyle="mapbox://styles/connorhogan/clgcso28h002101rnpejb0gfr"
      // mapStyle="mapbox://styles/connorhogan/clgdeo7n6000c01o2yoamnask"
      attributionControl={false}
      logoPosition="bottom-right"
    >
      {mapLayers.map(layer => {  
        if (layers.includes(layer.name)) {
      return (
      <Source {...layer.source} key={layer.name}>
          <Layer {...layer.layer} />
        </Source>
        )}
      }
      )}


      {layers.includes('Power Plants') && generators.map((marker, index) => {
        return (
          <Marker
            key={index}
            longitude={marker.location.coordinates[0]}
            latitude={marker.location.coordinates[1]}
            color={"black"}
            anchor="bottom"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setPopupInfo({...marker, type: "plant"});
            }}
          />
        );
      })}

      {zones.map((marker, index) => {
        if (layers.includes("Online") && marker.status === "Online") {
          return (
            <Marker
              key={index}
              longitude={marker.coordinates[0]}
              latitude={marker.coordinates[1]}
              anchor="center"
              onClick={(e) => {
                e.originalEvent.stopPropagation();
                setPopupInfo({...marker, type: "zone"});
              }}
            >
              <div
                style={{
                  borderRadius: "50%",
                  width: 10,
                  height: 10,
                  background: "#008000aa",
                }}
              />
            </Marker>
          );
        } else if (layers.includes("Some Interruptions") && marker.status === "Some Interruptions") {
          return (
            <Marker
              key={index}
              longitude={marker.coordinates[0]}
              latitude={marker.coordinates[1]}
              anchor="center"
              onClick={(e) => {
                e.originalEvent.stopPropagation();
                setPopupInfo({...marker, type: "zone"});
              }}
            >
              <div
                style={{
                  borderRadius: "50%",
                  width: 10,
                  height: 10,
                  background: "#ffa500aa",
                }}
              />
            </Marker>
          );
        } else if (layers.includes("Offline") && marker.status === "Offline") {
          return (
            <Marker
              key={index}
              longitude={marker.coordinates[0]}
              latitude={marker.coordinates[1]}
              anchor="center"
              onClick={(e) => {
                e.originalEvent.stopPropagation();
                setPopupInfo({...marker, type: "zone"});
              }}
            >
              <div
                style={{
                  borderRadius: "50%",
                  width: 10,
                  height: 10,
                  background: "#ff0000aa",
                }}
              />
            </Marker>
          );
        }
      })}

      <PopupInfo popupInfo={popupInfo} setPopupInfo={setPopupInfo} setZones={setZones} />
      
    </Map>
  );
}
