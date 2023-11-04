import Head from "next/head";
import Map from "../../components/Map";
import Sidebar from "../../components/Sidebar";
import { useRouter } from 'next/router'
import { Container, Stack, Typography } from "@mui/material";
import DataGridDemo from "@/components/DataGrid";
import { useEffect, useState } from "react";


export default function Home() {
  const router = useRouter()
  const [loading, setLoading] = useState(true);  

  return (
    <>
    <Head>
        <title>Outages - One More Bus</title>
        <meta name="description" content="Critical Infrasture modeling and monitoring for the CASA region" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="https://projectOne More Bus.com/One More Bus_og.webp" />
      </Head>
      <Container>
      <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            style={{ margin: "15px 0px" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.svg"
              alt="One More Bus Logo"
              style={{ width: 30, height: 30 }}
            />

            <h2>Outages</h2>
            {/* <IconButton style={{marginLeft: 'auto'}}><SearchIcon/></IconButton> */}
          </Stack>
        <DataGridDemo />
      </Container>
      </>
  );
}
