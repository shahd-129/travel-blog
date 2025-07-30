import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useGetAllPostsQuery } from "../../redux/api/posts";
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Button, Chip, Typography } from '@mui/material';

const categoryStyles = {
  EAT: { color: "#4caf50" },
  RELAX: { color: "#2196f3", },
  TRAVEL: { color: "#ff9800" },
};


const columns = [
  { field: "id", headerName: ("Id"), width: 220 },

  {
    field: "title",
    headerName: ("Title"),
    width: 170,
    editable: true,
  },

  {
    field: "category",
    headerName: "Category",
    width: 200,
    sortable: false,
    renderCell: (params) => {
      const style = categoryStyles[params.value]

      return (
        <Chip
          variant="outlined"
          label={params.value}
          sx={{
            ...style,

          }}
        />
      );
    }

  }

];


export default function DataGridDemo() {
  const { category } = useParams()
  // get all posts
  const { data } = useGetAllPostsQuery({ category });
  // console.log(data?.body);






  const [openRow, setOpenRow] = useState();
  const navigate = useNavigate();

  const openRows = (params) => {
    setOpenRow(params.row);
    navigate(`/dashboard/posts/${params.row.id}`);
    // console.log('Row:', params.row.id);

  }

  function openPostForm() {
    navigate('/dashboard/postForm')
  }

  return (<>


    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <Button
        onClick={openPostForm}
        sx={{
          mb: 3.7,
          backgroundColor: "black",
          color: "#fff",
          borderRadius: "8px",
          padding: "7px 12px",
          fontWeight: "500",
          textTransform: "none",
        }}
      >
        Create New Post
      </Button>
    </Box>

    <Box sx={{ height: 400, width: { xs: "100%", sm: "100%" }, bgcolor: "#fff", borderRadius: "3%" }}>
      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 2,
        ml: 2,
        mr: 2,
        pt: 1

      }}>
        <Typography variant="h6" fontWeight="bold">
          Posts
        </Typography>
        <input
          type="text"
          placeholder="Search..."
          style={{
            padding: '8px 12px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            width: '250px'
          }}
        />
      </Box>
      <DataGrid
        rows={data?.body?.docs}
        columns={columns}
        sx={{
          '& .MuiTablePagination-root:last-child': {
            background: "white",

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
        onRowClick={openRows}
      />
    </Box>

  </>
  );
}
