import Head from "next/head";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import localFont from 'next/font/local'
import styles from "./Home.module.css"
const transitFont = localFont({ src: '../public/fonts/Transit.otf' })
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  const [loading, setLoading] = useState(true);
  const [markers, setMarkers] = useState([]);
  const [layers, setLayers] = useState(["Transmission Lines", "Substations", "Power Plants", "Population"]);


  return (
    <>
      <style jsx global>{`
          :root {
              /* ... */
                  --transit-font: ${transitFont.style.fontFamily};
          }
          `}
      </style>
      <Head>
        <title>One More Bus</title>
        <meta name="description" content="Critical Infrasture modeling and monitoring for the CASA region" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="https://projectOne More Bus.com/One More Bus_og.webp" />
      </Head>
      <div className={styles.headerContainer}>
        <h2 className={styles.subheading}>How much time could be saved with just&nbsp;&nbsp;</h2>
        <h1 className={styles.heading}>one more bus?</h1>
        <p className={inter.className} style={{fontWeight: 300, fontSize: '15px', marginTop: '-5px'}}>Click anywhere to see how your commute could change with one more bus.</p>
      </div>
      <div style={{ width: "100vw", height: "100vh" }}>
        <Map markers={markers} layers={layers} />
      </div>
      <Sidebar loading={false} layers={layers} setLayers={setLayers} />
    </>
  );
}
