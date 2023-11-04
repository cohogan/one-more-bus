import * as React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from '@mui/material';

function includesMany(arr, values) {
    return values.every((value) => arr.includes(value));
}

function includesNone(arr, values) {
    return values.every((value) => !arr.includes(value));
}

function ChildCheckbox({checked, onChange, icon, label}) {
    return (
        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
            <FormControlLabel
                label={<Typography variant='body2'>{label}</Typography>}
                control={<Checkbox checked={checked} size='small' onChange={onChange} />}
            />
            {icon}
        </div>
    )
}

export default function IndeterminateCheckbox({layers, setLayers, parentName, childrenObj}) {

    const children = childrenObj.map((child) => {
        return (
            <ChildCheckbox label={child.name} icon={child.icon} key={child.name} checked={layers.includes(child.name)} onChange={() => setLayers( (prevLayers) => {
                if (prevLayers.includes(child.name)) {
                    return prevLayers.filter((layer) => layer !== child.name);
                } else {
                    return [...prevLayers, child.name];
                }
            })} />
        )
    })


  return (
    <div>
      <FormControlLabel
        label={<Typography variant='body2'>{parentName}</Typography>}
        control={
          <Checkbox
            size='small'
            checked={includesMany(layers, childrenObj.map(e => e.name))}
            indeterminate={
                !(includesMany(layers, childrenObj.map(e => e.name))) && !(includesNone(layers, childrenObj.map(e => e.name)))
            }
            onChange={() => setLayers( (prevLayers) => {
                if (includesMany(prevLayers, childrenObj.map(e => e.name))) {
                    return prevLayers.filter((layer) => includesNone(layer, childrenObj.map(e => e.name)));
                } else {
                    return [...prevLayers, ...childrenObj.map(e => e.name)];
                }
            })}
          />
        }
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      {children}
    </Box>
    </div>
  );
}