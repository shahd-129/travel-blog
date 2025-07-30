import {
  Avatar, Box, Typography, IconButton, Card, TextField, Button, Snackbar
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import DeleteIcon from '@mui/icons-material/Delete';
import { useGetPostByIdQuery, useLikePostMutation } from '../../redux/api/posts';
import { useParams } from 'react-router-dom';
import { useCreateCommentMutation, useDeleteCommentMutation } from '../../redux/api/comment';
import { useState } from 'react';
import ModalAuth from './ModalAuth';
import { useSelector } from 'react-redux';
import ModalSignup from './ModalSignup';
import FavoriteIcon from '@mui/icons-material/Favorite';
export default function Details() {
  const { id } = useParams();
  // console.log(id);

  const token = useSelector((state) => state.token.token);
  // console.log(token);

  const { data: posts, refetch } = useGetPostByIdQuery(id);
  // console.log(posts);


  const [openComment, setOpenComment] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');


  const [deleteComment] = useDeleteCommentMutation();
  const [createComment] = useCreateCommentMutation();

  const [comment, setComment] = useState({ body: '' });


  function toggleComment(postId) {
    // console.log(postId);

    setOpenComment(openComment === postId ? null : postId);
    setComment({ body: '' });
  }
  const [authType, setAuthType] = useState(null);
  async function handleCommentSubmit(id) {
    if (!token) {
      setAuthType("signup");
      return;
    }
    try {
      const res = await createComment({ id, data: comment }).unwrap();
      // console.log("Comment Response:", res);
      // console.log(id);

      if (res.message === 'Success') {
        setSnackbarMessage('Comment added successfully!');
        setSnackbarOpen(true);
        setComment({ body: '' });
        setOpenComment(null);
        refetch();
      }
    } catch (err) {
      console.error(err);
      setSnackbarMessage(err.message || " failed to create comment");
      setSnackbarOpen(true);
    }
  }

  //  Delete Comment
  async function handleDeleteComment(id, commentId) {
    try {
      const res = await deleteComment({ id, commentId }).unwrap();
      console.log("Delete Response:", res);

      setSnackbarMessage('Comment deleted successfully!');
      setSnackbarOpen(true);
      refetch();
    } catch (err) {
      console.error(err);
      setSnackbarMessage(err.message);
      setSnackbarOpen(true);
    }
  }

  // Close Snackbar
  function handleSnackbarClose() {
    setSnackbarOpen(false);
  }


  const [likePost] = useLikePostMutation()

  const [isLiked, setIsLiked] = useState(false);
  const likePosts = async (id) => {
    if (!token) {
      setAuthType("signup");
      return;
    }
    try {
      const res = await likePost({ id }).unwrap();
      console.log(res);

      setIsLiked(true);
      setSnackbarMessage('Post liked successfully!');
      setSnackbarOpen(true);
      refetch();
    } catch (err) {
      console.error('Like Error:', err);
      setSnackbarMessage(err.message || 'Failed to like post');
      setSnackbarOpen(true);
    }
  };


  return (
    <>
      <Box
        key={posts?.id}
        sx={{
          maxWidth: 700,
          mx: 'auto',
          p: 2,
          mb: 4,
          mt: 10,
          // borderRadius: 2,
          // boxShadow: 3,
        }}
        // elevation={24}
      >

        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <Avatar sx={{ width: 40, height: 40 }} />
          <Typography fontSize={'13px'}>admin</Typography>
        </Box>

        <Box ml={1} >
          <Typography variant="body1" sx={{ fontWeight: "600", color: "#111827", '&:hover': { color: "#5999ff" } }}>
            {posts?.body?.title}
           
          </Typography>

          <Typography variant="body1" sx={{ fontWeight: "500", color: "black", mb: 2, mt: 1, '&:hover': { color: "#5999ff" } }}>
            {posts?.body?.introduction}
          </Typography>
        </Box>


        <Box
          component="img"
          src={posts?.body?.image}
          alt="Post Image"
          width="100%"
          borderRadius={2}
          sx={{ objectFit: 'cover' }}
        />


        <Typography variant="body2" sx={{ color: "#666", mt: 3, ml: 1 }} dangerouslySetInnerHTML={{ __html: posts?.body?.body }} />

        <Typography variant="caption" sx={{ color: "#0095f6", mt: 1, ml: 1, display: "block" }}>
          #{posts?.body?.category}
        </Typography>


        <Box mt={1}>
          <IconButton onClick={() => likePosts(posts?.body?.id)}>
            {isLiked ? (
              <FavoriteIcon sx={{ color: '#d32f2f' }} />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
          <IconButton onClick={() => toggleComment(posts?.id)}>

            <ModeCommentIcon />
          </IconButton>

        </Box>


        {openComment === posts?.id && (
          <Box mt={2} sx={{ backgroundColor: '#f5f5f5', p: 2, borderRadius: 2 }}>
            <TextField
              fullWidth
              multiline
              rows={3}
              placeholder="Write your comment..."
              variant="outlined"
              sx={{
                borderRadius: 2,
                backgroundColor: '#fff',
                '& .MuiOutlinedInput-root': { borderRadius: 2 },
              }}
              value={comment.body}
              onChange={(e) => setComment({ ...comment, body: e.target.value })}
            />
            <Button
              variant="contained"
              sx={{
                mt: 1,
                borderRadius: 2,
                backgroundColor: '#0095f6',
                '&:hover': { backgroundColor: '#0077cc' },
              }}
              onClick={() => handleCommentSubmit(posts?.body?.id)}
              disabled={!comment.body.trim()}
            >
              Submit
            </Button>
          </Box>
        )}


        {posts?.body?.comments?.length > 0 && (
          <Box mt={2}>
            {posts?.body?.comments.map((comment) => (
              <Box
                key={comment?.id}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  mb: 2,
                  p: 2,
                  backgroundColor: '#fafafa',
                  borderRadius: 2,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                }}
              >
                <Avatar sx={{ width: 32, height: 32, mr: 2 }} alt={comment.author || 'User'} />
                <Box flexGrow={1}>
                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography variant="subtitle2" fontWeight="bold" color="text.primary">
                      {comment?.user?.name}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" mt={0.5}>
                    {comment?.body}
                  </Typography>

                </Box>

                <IconButton
                  size="small"
                  onClick={() => handleDeleteComment(posts?.body?.id, comment.id)}
                  sx={{ color: '#d32f2f' }}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>

              </Box>
            ))}
          </Box>
        )}
      </Box>


      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
      {authType === "login" && (
        <ModalAuth open={true} onClose={() => setAuthType(null)} />
      )}
      {authType === "signup" && (
        <ModalSignup open={true} onClose={() => setAuthType(null)} />
      )}

    </>
  );
}
