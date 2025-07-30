import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useGetAllUsersQuery } from '../../redux/api/users';


const columns = [


  {
    field: "name",
    headerName: ("Name"),
    width: 170,
    editable: true,
  },

  {
    field: "email",
    headerName: ("Email"),
    width: 200,
    sortable: false,
  },
  {
    field: "role",
    headerName: ("Role"),
    width: 200,
    sortable: false,
  },
];


export default function DataGridDemo() {


  const { data } = useGetAllUsersQuery();
  // console.log(data?.body?.docs);



  return (<>




    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data?.body?.docs}
        columns={columns}
        sx={{
          '& .MuiTablePagination-root:last-child': {
            background: "white",

          },
          "& .css-aymtem-MuiDataGrid-virtualScrollerContent": {
            background: "white"
          },
          "&  .MuiDataGrid-filler": {
            background: "white"
          }

        }}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>

  </>
  );
}
