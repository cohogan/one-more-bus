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
                <h5 style={{ margin: "0px" }}>Instructions: click a point on the map to see the travel times from that point, and add an extra bus in the rotation by clicking below</h5>
            </Stack>

            <FormControl>
  <RadioGroup
    aria-labelledby="demo-controlled-radio-buttons-group"
    name="controlled-radio-buttons-group"
    value={value}
    onChange={handleChange}
  >
    <FormControlLabel value="None" control={<Radio />} label="None" />
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
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
