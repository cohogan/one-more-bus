import Head from "next/head";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";


export default function Home() {
  const router = useRouter()
  const [loading, setLoading] = useState(true);
  const [markers, setMarkers] = useState([]);
  const [layers, setLayers] = useState(["Transmission Lines", "Substations", "Power Plants", "Population"]);


  return (
    <>
    <Head>
        <title>One More Bus</title>
        <meta name="description" content="Critical Infrasture modeling and monitoring for the CASA region" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="https://projectOne More Bus.com/One More Bus_og.webp" />
      </Head>
      <div style={{width: "100vw", height: "100vh"}}>
        <Map markers={markers} layers={layers} />
      </div>
      <Sidebar loading={false} layers={layers} setLayers={setLayers} />
      </>
  );
}
