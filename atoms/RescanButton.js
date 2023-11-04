import { Button } from "@mui/material";

export default function RescanButton({ setZones }) {
  return (
    // onclick call an api route which updates the zone state
  <Button style={{ width: "100%" }} onClick={() => console.log("CLACKLED")}>
    Re-Scan Region Now
    </Button>
    )
}
