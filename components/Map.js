import * as React from "react";
import Map, { Marker, Source, Layer } from "react-map-gl";
import PopupInfo from "./Popup";


const mapLayers = [
  // SF Matrix Text
  {
    // to do-string and round on TravelTime to get text
    name: "SF Matrix",
    source: {
      id: "output_is_the_name",
      type: "vector",
      url: "mapbox://connorhogan.output_is_the_name",
    },
    layer: {
      id: "output_is_the_name-layer",
      type: "symbol",
      source: "output_is_the_name",
      "source-layer": "output_is_the_name",
      layout: {
        "text-field": ["to-string", ["round", ["get", "TravelTime"]]],
        "text-size": 12,
        "text-offset": [0, 1.25],
        "text-anchor": "top",
      },
      paint: {
        "text-color": "black",
        "text-halo-color": [
          "interpolate",
          ["linear"],
          ["get", "TravelTime"],
          11.49595,
          "rgba(0, 194, 36, 0.86)",
          59.99,
          "rgba(255, 46, 67, 0.52)",
          60,
          "rgba(0, 0, 0, 0)"
        ],
        "text-halo-width": 1,
      },
    }
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
        longitude: -122.450,
        latitude: 37.76941,
        zoom: 12
      }}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      // mapStyle={layers.includes('Population') ? "mapbox://styles/connorhogan/clhgray1j002e01r53ady8gd4" : "mapbox://styles/mapbox/light-v11"}
      // mapStyle="mapbox://styles/mapbox/light-v11"
      mapStyle="mapbox://styles/connorhogan/clokqilzw001y01rhciyhas0z"
      // mapStyle="mapbox://styles/connorhogan/clhgray1j002e01r53ady8gd4"
      // mapStyle="mapbox://styles/connorhogan/clgcso28h002101rnpejb0gfr"
      // mapStyle="mapbox://styles/connorhogan/clgdeo7n6000c01o2yoamnask"
      attributionControl={false}
      logoPosition="bottom-right"
    >

{mapLayers.map(layer => {  
        if (true) {
      return (
      <Source {...layer.source} key={layer.name}>
          <Layer {...layer.layer} />
        </Source>
        )}
      }
      )}


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
