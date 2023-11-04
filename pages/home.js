import Head from "next/head";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - One More Bus</title>
        <meta
          name="description"
          content="Critical Infrasture modeling and monitoring for the CASA region"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:image"
          content="https://projectOne More Bus.com/One More Bus_og.webp"
        />
      </Head>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={8}>
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

              <h2>One More Bus</h2>
            </Stack>
            <Typography
              variant="h1"
              style={{
                marginBottom: "2rem",
                fontSize: "5rem",
                fontWeight: "700",
              }}
            >
              Monitor Critical Infrastructure with One More Bus
            </Typography>
            <Typography variant="h4" style={{ marginBottom: "2rem" }}>
              Real-time power grid metrics. Anywhere.
            </Typography>
            <div style={{ textAlign: "left" }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                style={{ marginRight: "1rem", borderRadius: "25px" }}
                href="/api/auth/login"
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                size="large"
                style={{ borderRadius: "25px" }}
                href="/about"
              >
                Learn More&nbsp;<span aria-hidden="true">→</span>
              </Button>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div
              style={{
                position: "relative",
                backgroundColor: "#3195b7",
                width: "100%",
                height: "100%",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100vh",
                  zIndex: "-1",
                  backgroundColor: "#3195b7",
                }}
              />
            </div>
          </Grid>
        </Grid>
        <div
          style={{
            margin: "2rem 0",
            borderRadius: "25px",
            overflow: "hidden",
            width: "100%",
            border: "1px solid gray",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/scyt.png"
            alt="Picture of the author"
            style={{ width: "100%" }}
          />
        </div>
      </Container>
    </>
  );
}
