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


function Header({ }) {
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
                    src="/logo.png"
                    alt="One More Bus Logo"
                    style={{ width: 30, height: 30 }}
                />

                <h2>one more bus</h2>
            </Stack>
        </>
    )
}

function Outages({ }) {
    return (
        <>
            <Stack direction="row" spacing={1} style={{ alignItems: "center", marginTop: "15px", marginBottom: "5px" }}>
                <h3 style={{ margin: "0px" }}>Outages</h3>
                <Chip
                    style={{ marginTop: "2px" }}
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

            <div style={{ display: "flex", flexDirection: "row", marginBottom: "5px" }}>
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

function Canary({ }) {
    return (
        <>
            <Stack direction="row" spacing={1} style={{ alignItems: "center", marginTop: "15px", marginBottom: "5px" }}>
                <h3 style={{ margin: "0px" }}>Canary</h3>
                <Chip
                    style={{ marginTop: "2px" }}
                    size="small"
                    label="Full Report"
                    color="primary"
                    variant="outlined"
                    clickable
                />
            </Stack>
            {/* <Chip label="Wind Warning in Almaty, Kazakhstan" variant="outlined" color="warning"/> */}
            <div style={{ display: "flex", flexDirection: "row", marginBottom: "5px" }}>
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
            <Slide in={show} direction="right">
                <Paper className={styles.sidebarContainer} elevation={0}>
                    <div className={styles.content}>

                        <Header />
                    </div>
                </Paper>
            </Slide>
        </>
    );
}
