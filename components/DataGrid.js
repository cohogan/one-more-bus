import {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { Stack } from '@mui/material';
import Link from 'next/link';

const statusMap = {
    "Online": <div style={{ borderRadius: "50%", width: 10, height: 10, background: "green" }} />,
    "Some Interruptions": <div style={{ borderRadius: "50%", width: 10, height: 10, background: "orange" }} />, 
    "Offline": <div style={{ borderRadius: "50%", width: 10, height: 10, background: "red" }} />,
}

const flagMap = {
    "KZ": "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/kz.svg"
}

const columns = [
    {
      field: 'country_code',
      headerName: 'Country',
      width: 110,
      renderCell: (params) => (
          <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              style={{ margin: "15px 0px" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={flagMap[params.value]} width={25} alt={`Flag of ${params.value}`}/>
          <div>{params.value}</div></Stack>
      )
    },
  {
    field: 'city_name',
    headerName: 'City name',
    width: 150,
    // renderCell: (params) => (
    //   <Link href={`/outages/${params.row._id}`} target='0'>
    //     {params.value}
    //   </Link>
    // )
  },
//   {
//     field: 'status',
//     type: 'singleSelect',
//     valueOptions: ['Online', 'Some Interruptions', 'Offline'],
//     headerName: 'Status',
//     width: 150,
//   },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    type: 'singleSelect',
    valueOptions: ['Online', 'Some Interruptions', 'Offline'],
    renderCell: (params) => (
        <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            style={{ margin: "15px 0px" }}
          >
        {statusMap[params.value]}
        <div>{params.value}</div></Stack>
    )
  },
  {
    field: 'updated',
    headerName: 'Updated',
    width: 150,
  },
  {
    field: 'coordinates',
    headerName: 'Satellite Image',
    width: 150,
    renderCell: (params) => (
        <a href={`https://www.google.com/maps/@${params.value[1]},${params.value[0]},2000m/data=!3m1!1e3`} target="0">
            Link
            </a>
    )
  },
  {
    field: 'online_ips',
    headerName: 'Online IPs',
    type: 'Number',
    width: 150,
  },
  {
    field: 'expected_online_ips',
    headerName: 'Expected Online IPs',
    type: 'Number',
    width: 150,
  },
  {
    field: 'online_percentage',
    headerName: '% Online of Expected',
    type: 'Number',
    width: 150,
  },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function CustomToolbar() {

    function formatDate(date) {
        // Get the day, month, year, hours, and minutes from the date object
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString().substring(2);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
      
        // Combine the values into the desired string format
        const dateString = `${day}_${month}_${hours}${minutes}`;
      
        return dateString;
      }

    const fileName=`OutageStatus-${formatDate(new Date)}`
    console.log(fileName)
    return (
      <GridToolbarContainer>
        <GridToolbarExport printOptions={{ disableToolbarButton: true }} csvOptions={{fileName: fileName}}/>
      </GridToolbarContainer>
    );
  }

export default function DataGridDemo() {
    const [zones, setZones] = useState([])

    const getZones = async () => {
      const res = await fetch("/api/zones");
      const data = await res.json();
      setZones(data.zones);
    };
  
    useEffect(() => {
      getZones();
    }, []);

  return (
    <Box sx={{ height: '85vh', width: '100%' }}>
      <DataGrid
        rows={zones}
        disableRowSelectionOnClick 
        getRowId={(row) => row._id}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        slots={{
            toolbar: CustomToolbar,
          }}
      />
    </Box>
  );
}