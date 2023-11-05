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
    FormControlLabel,
    Radio,
    FormControl,
    RadioGroup,
    FormLabel
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

function Outages({value, handleChange }) {
    return (
        <>
            <Stack direction="row" spacing={1} style={{ alignItems: "center", marginTop: "15px", marginBottom: "5px" }}>
                <h2 className={styles.numHours}>99K</h2>
                <h4>hours spent on transit daily</h4>
            </Stack>

            <FormControl>
  <RadioGroup
    aria-labelledby="demo-controlled-radio-buttons-group"
    name="controlled-radio-buttons-group"
    value={value}
    onChange={handleChange}
  >
    <p>Pick where to add a bus:</p>
    <div className={styles.busOptionButton} onClick={() => alert('Coming soon!')}>
        <Stack direction="row" spacing={2} style={{alignItems: "center"}}>
            <p className={styles.busCodeContainer}>7</p>
            <p>Haight/Noriega</p>
        </Stack>
    </div>
    <div className={styles.busOptionButton} onClick={() => alert('Coming soon!')}>
        <Stack direction="row" spacing={2} style={{alignItems: "center"}}>
            <p className={styles.busCodeContainer}>6</p>
            <p>Haight/Parnassus</p>
        </Stack>
    </div>
    <div className={styles.busOptionButton} onClick={() => alert('Coming soon!')}>
        <Stack direction="row" spacing={2} style={{alignItems: "center"}}>
            <p className={styles.busCodeContainer}>22</p>
            <p>Fillmore</p>
        </Stack>
    </div>
    <div className={styles.busOptionButton} onClick={() => alert('Coming soon!')}>
        <Stack direction="row" spacing={2} style={{alignItems: "center"}}>
            <p className={styles.busCodeContainer}>49</p>
            <p>Van Ness</p>
        </Stack>
    </div>
  </RadioGroup>
</FormControl>
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
    const [value, setValue] = useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

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
                    <div style={{padding: "0px 10px"}}>
                    <Outages value={value} setValue={setValue} />
                    </div>
                </Paper>
            </Slide>
        </>
    );
}
