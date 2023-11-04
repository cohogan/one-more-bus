import { Avatar, Button, Chip, IconButton, Stack, Typography } from "@mui/material";
import * as React from "react";
import { Popup } from "react-map-gl";
import UnitsAccordion from "./UnitsAccordion";
import styles from "./Popup.module.css";
import RescanButton from "@/atoms/RescanButton";


export default function PopupInfo({ popupInfo, setPopupInfo, setZones }) {
  if (!popupInfo) {
    return null;
  } else if (popupInfo.type === "plant") {
    return (
      <Popup
          anchor="top"
          longitude={popupInfo.location.coordinates[0]}
          latitude={popupInfo.location.coordinates[1]}
          onClose={() => setPopupInfo(null)}
          closeButton={false}
          style={{ width: "300px" }}
          maxWidth={"300px"}
          className={styles["popup-top"] + " " + styles["popup"]}
        >
          <div>
            <h2>{popupInfo.plantName}</h2>
            <Typography fontSize={".8125rem"} color="textSecondary" component="h5">
              Owner: {popupInfo.owner}
            </Typography>
            {popupInfo.parent !== popupInfo.owner && (
            <Typography fontSize={".8125rem"} color="textSecondary" component="h5">
              Parent: {popupInfo.parent}
            </Typography>
            )}
            <Stack direction="row" spacing={1} style={{marginTop: "10px", marginBottom: "10px"}}>
              {/* sum up capacities of all units with reduce function */}

              <Chip
                label={
                  "⚡ " +
                  popupInfo.units.reduce(
                    (accumulator, unit) => accumulator + unit.capacity,
                    0
                  ) +
                  " MWe"
                }
              />
              <Chip
                label={`${popupInfo.fuelType === "coal" ? "🪨" : "⛽️"} ${
                  popupInfo.fuelType
                }`}
              />
              {popupInfo.units.find((unit) => unit.CHP === "Y") !==
              undefined ? (
                <Chip label="♨️ CHP" />
              ) : (
                ""
              )}
            </Stack>
            <UnitsAccordion units={popupInfo.units} />
            <a href={popupInfo.sources[0]}>Data Source</a>
          </div>
        </Popup>
    )
  } else if (popupInfo.type === "zone") {
    return (
      <Popup
          anchor="top"
          longitude={popupInfo.coordinates[0]}
          latitude={popupInfo.coordinates[1]}
          onClose={() => setPopupInfo(null)}
          closeButton={false}
          style={{ width: "300px" }}
          maxWidth={"300px"}
          className={styles["popup-top"] + " " + styles["popup"]}
        >
          <div style={{width: "100%"}}>
            <Stack direction="row" spacing={1} style={{alignItems: "center", marginTop: "10px"}}>
            <h2 style={{marginBottom: "0px", marginTop: "0px"}}>{popupInfo.city_name}</h2>
            <Chip
              size="small"
                label={popupInfo.status}
                color={popupInfo.status === "Online" ? "success" : popupInfo.status === "Some Interruptions" ? "warning" : "error"}
              />
            </Stack>
            <Typography fontSize={".8125rem"} color="textSecondary" component="h5">
              Updated 2hrs ago
            </Typography>
              <Typography fontSize={".8125rem"} component="h5" style={{marginTop: "10px", marginBottom: "10px"}}>
              <b>407</b> computers nearby <a href={`https://www.google.com/maps/@${popupInfo.coordinates[1]},${popupInfo.coordinates[0]},2000m/data=!3m1!1e3`} target="0">
              {popupInfo.coordinates[1]}, {popupInfo.coordinates[0]}
              </a> responded to a ping. <b>2.5%</b> more than expected.
            </Typography>
            <RescanButton setZones={setZones} />
          </div>
        </Popup>
    )
  }
}