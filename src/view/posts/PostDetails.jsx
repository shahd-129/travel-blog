import { useNavigate, useParams } from 'react-router-dom';
import { Box, Typography, Paper, Button, Stack } from '@mui/material';
import { useDeletePostMutation, useGetPostByIdQuery } from '../../redux/api/posts';

export default function PostDetails() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetPostByIdQuery(id);
  const [deletePost] = useDeletePostMutation();
  const navigate = useNavigate();

  async function handleDeletePost(postId) {
    try {
      const res = await deletePost(postId).unwrap();
      if (res.message === 'Success') {
        navigate('/dashboard/posts');
      }
    } catch (error) {
      console.error(error);
    }
  }

  if (isLoading) return <Typography textAlign="center">Loading...</Typography>;
  if (error) return <Typography textAlign="center" color="error">Error loading post details</Typography>;

  function openEditPage() {
    navigate(`/dashboard/postForm/${id}`);
  }

  return (
    <Box display="flex" justifyContent="center" mt={5} px={2}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 900, width: '100%', borderRadius: 4 }}>
        <Stack direction="row" justifyContent="flex-end" spacing={2} mb={2}>
          <Button variant="contained" color="primary" sx={{ bgcolor: 'black' }} onClick={openEditPage}>
            Edit
          </Button>
          <Button variant="outlined" color="error" onClick={() => handleDeletePost(id)}>
            Delete
          </Button>
        </Stack>

        <Box
          component="img"
          src={data?.body?.image}
          alt="Post"
          sx={{
            width: '100%',
            height: 'auto',
            borderRadius: 2,
            mb: 3,
            objectFit: 'cover',
          }}
        />

        <Typography variant="h5" fontWeight="bold" gutterBottom>
          {data?.body?.title}
        </Typography>

        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {data?.body?.introduction}
        </Typography>

        <Box
          sx={{ mt: 2, mb: 2, color: '#435a4f', width: '100%' }}
          dangerouslySetInnerHTML={{ __html: data?.body?.body }}
        />

        <Typography variant="caption" color="primary">
          {data?.body?.category}
        </Typography>
      </Paper>
    </Box>
  );
}