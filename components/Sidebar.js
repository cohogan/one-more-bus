import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIosNew";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NextLink from 'next/link'

import styles from "./Sidebar.module.css";
import { useEffect, useState, useRef } from "react";
import {
  Chip,
  IconButton,
  Slide,
  Paper,
  Stack,
  Typography,
  Avatar,
  Checkbox,
  FormControlLabel
} from "@mui/material";
import TieredCheckboxes from "./TieredCheckboxes";

function Header ({}) {
  return (
    <>
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      style={{ margin: "15px 0px" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.svg"
        alt="Scythian Logo"
        style={{ width: 30, height: 30 }}
      />

      <h2>Scythian</h2>
      {/* <IconButton style={{marginLeft: 'auto'}}><SearchIcon/></IconButton> */}
    </Stack>
    {/* <h5>Select nations to display</h5>
        <div className={styles.scrollableRow}>
          <Chip label="KZ"/>
          <Chip label="UZB" variant="outlined"/>
          <Chip label="KGZ" variant="outlined"/>
          <Chip label="TJK" variant="outlined"/>
          <Chip label="TKM" variant="outlined"/>
          <Chip label="PKST" variant="outlined"/>
          <Chip label="AFGH" variant="outlined"/>
          </div>
        
        <h5>Select layers to display</h5>
        <div className={styles.scrollableRow}>
          <Chip label="Power"/>
          <Chip label="Internet" variant="outlined"/>
          <Chip label="Roads" variant="outlined"/>
          <Chip label="Waterways" variant="outlined"/>
          </div> */}
          <hr />
          </>
  )
}

function Outages ({}) {
  return (
    <>
    <Stack direction="row" spacing={1} style={{alignItems: "center", marginTop: "15px", marginBottom: "5px"}}>
            <h3 style={{margin: "0px"}}>Outages</h3>
            <Chip
            style={{marginTop: "2px"}}
              size="small"
                label="Full Report"
                color="primary"
                variant="outlined"
                clickable
                component="a"
                LinkComponent={NextLink}
                href="/outages"
              />
          </Stack>

          <div style={{ display: "flex", flexDirection: "row", marginBottom: "5px"}}>
            {/* <h5>Detected outage</h5> */}
            <div
              style={{
                borderRadius: "50%",
                width: 10,
                height: 10,
                marginRight: "10px",
                marginTop: "5px",
                background: "red",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body2" component="p">
                Likely outage detected in Arytau
              </Typography>
              <Typography variant="body2" color="text.secondary" component="p">
                2hrs ago
              </Typography>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {/* <h5>Detected outage</h5> */}
            <div
              style={{
                borderRadius: "50%",
                width: 10,
                height: 10,
                marginRight: "10px",
                marginTop: "5px",
                background: "orange",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body2" component="p">
                Potential outage detected in Almaty
              </Typography>
              <Typography variant="body2" color="text.secondary" component="p">
                2hrs ago
              </Typography>
            </div>

            {/* <h5>Potential outage detected in Atyrau</h5> */}
          </div>
          {/* <Typography variant="body2" component="Link" href="#">
            View all outages
          </Typography> */}
          </>

  )
}

function Canary ({}) {
  return (
    <>
    <Stack direction="row" spacing={1} style={{alignItems: "center", marginTop: "15px", marginBottom: "5px"}}>
            <h3 style={{margin: "0px"}}>Canary</h3>
            <Chip
            style={{marginTop: "2px"}}
              size="small"
                label="Full Report"
                color="primary"
                variant="outlined"
                clickable
              />
          </Stack>
          {/* <Chip label="Wind Warning in Almaty, Kazakhstan" variant="outlined" color="warning"/> */}
          <div style={{ display: "flex", flexDirection: "row", marginBottom: "5px"}}>
            {/* <h5>Detected outage</h5> */}
            <div
              style={{
                borderRadius: "50%",
                width: 10,
                height: 10,
                marginRight: "10px",
                marginTop: "5px",
                background: "orange",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body2" component="p">
                Wind warning in Almaty
              </Typography>
              <Typography variant="body2" color="text.secondary" component="p">
                48 hrs from now
              </Typography>
            </div>
          </div>
          </>
  )
}

export default function Sidebar({
  loading,
  list,
  activeMarkerIndex,
  setActiveMarkerIndex,
  layers,
  setLayers,
}) {
  const [show, setShow] = useState(true);
  const listRef = useRef(null);

  const scrollToItem = (index) => {
    listRef.current.scrollToItem(index);
  };

  useEffect(() => {
    if (activeMarkerIndex != null) {
      scrollToItem(activeMarkerIndex);
    }
  }, [activeMarkerIndex]);

  return (
    <>
      {!show && (
        <IconButton
          sx={{ position: "fixed", top: "50%", left: "0px", zIndex: "0" }}
          onClick={() => setShow(!show)}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      )}
      <Slide in={show} direction="right">
        <Paper className={styles.sidebarContainer} elevation={8}>
          {show && (
            <IconButton
              sx={{
                position: "fixed",
                top: "50%",
                left: "340px",
                zIndex: "1000",
              }}
              onClick={() => setShow(!show)}
            >
              <ArrowBackIosIcon />
            </IconButton>
          )}
    
            <div className={styles.content}>
          
          <Header />

          <Outages />

          <Canary />

          <h3 style={{marginTop: "15px", marginBottom: "5px"}}>Map Features</h3>
          <FormControlLabel
                label={<Typography variant='body2'>{'Population Heatmap'}</Typography>}
                control={<Checkbox checked={layers.includes('Population')} size='small' onChange={(e) => setLayers( prevLayers => {
                  if (e.target.checked) {
                    return [...prevLayers, 'Population']
                  } else {
                    return prevLayers.filter(layer => layer !== 'Population')
                  }
                })} />}
            />
          {/* <Checkbox checked={layers['Population']} onChange={(e) => setLayers( prevLayers => {
            if (e.target.checked) {
              return [...prevLayers, 'Population']
            } else {
              return prevLayers.filter(layer => layer !== 'Population')
            }
          })} /> */}
           {/* Population Heatmap */}
          <TieredCheckboxes layers={layers} setLayers={setLayers} parentName={'Outage Zones'} 
          childrenObj={[
            {name: 'Online', icon: (<div style={{borderRadius: "50%", width: 10, height: 10, background: "#008000aa"}}/>)},
            {name: 'Some Interruptions', icon: (<div style={{borderRadius: "50%", width: 10, height: 10, background: "#ffa500aa"}}/>)},
            {name: 'Offline', icon: (<div style={{borderRadius: "50%", width: 10, height: 10, background: "#ff0000aa"}}/>)}, 
          ]} />
          <TieredCheckboxes layers={layers} setLayers={setLayers} parentName={'Grid Infrastructure'} 
          childrenObj={[
            {name: 'Transmission Lines', icon: (<div style={{width: 20, height: 3, borderRadius: 5, background: "blue"}}/>)},
            {name: 'Substations', icon: (<div style={{borderRadius: "50%", width: 5, height: 5, background: "orange"}}/>)},
            {name: 'Power Plants', icon: (<div style={{borderRadius: "50%", width: 15, height: 15, background: "black"}}/>)},
            ]} />
          <Typography variant="body2" color="text.secondary" component="p">
            (Substation and transmission line data is from 2016. We are working to collect more recent data)
          </Typography>
          </div>
          <div className={styles.footer}>
            <hr style={{marginTop: "0px"}} />
            <div style={{display: "flex", flexDirection: "row"}}>
            <Stack direction="row" spacing={1} style={{alignItems: "center"}}>
            <Avatar src="/demoavatar.jpg" sx={{ border: "1px solid black"}}/>
            <p>Demo Account</p>
          </Stack>
          <IconButton style={{marginLeft: "auto"}}>
            <MoreHorizIcon />
          </IconButton>
          </div>


          </div>
        </Paper>
      </Slide>
    </>
  );
}
