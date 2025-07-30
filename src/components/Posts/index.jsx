import { Avatar, Box, Typography, IconButton, Card, Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import { useGetAllPostsQuery } from "../../redux/api/posts";
import { Link, useParams } from "react-router-dom";

export default function PostsList() {
    const { category } = useParams();

    const { data: posts, isLoading } = useGetAllPostsQuery({ category });


    if (isLoading) return <Typography textAlign="center">Loading...</Typography>;
    if (!posts?.body?.docs?.length)
        return (
            <Typography textAlign="center">
                No posts found for {category || "this category"}.
            </Typography>
        );

    return (
        <Box sx={{ py: 4 }}>
            <Typography variant="h5" sx={{ textAlign: "center", mt: 8, color: "black" }}>
                {category ? `Posts in ${category}` : "All Posts"}
            </Typography>
            {posts.body.docs.map((post) => (<>
                <Card
                    key={post.id}
                    sx={{
                        maxWidth: 700,
                        mx: "auto",
                        p: 2,
                        mb: 4,
                        borderRadius: 2,
                    }}
                >
                    <Box display="flex" alignItems="center" gap={1} mb={1}>
                        <Avatar sx={{ width: 40, height: 40 }} />
                        <Typography fontSize="13px">{post.author || "admin"}</Typography>
                    </Box>
                    <Box ml={3}>
                        <Link style={{ textDecoration: "none" }} to={`/post/${post.id}`}>
                            <Typography
                                component={'h1'}
                                sx={{
                                    fontWeight: "500",
                                    color: "#111827",
                                    "&:hover": { color: "#5999ff" },
                                }}
                            >
                                {post.title}
                            </Typography>
                        </Link>
                        <Typography
                            variant="body2"
                            sx={{
                                color: "black",
                                mb: 2,
                                mt: 1,
                            }}
                        >
                            {post.introduction}
                        </Typography>
                    </Box>
                    {post.image && (
                        <Box
                            component="img"
                            src={post.image}
                            alt="Post Image"
                            width="100%"
                            borderRadius={2}
                            sx={{ objectFit: "cover" }}
                        />
                    )}
                    <Typography
                        variant="caption"
                        sx={{ color: "#0095f6", mt: 1, ml: 1, display: "block" }}
                    >
                        #{post.category}
                    </Typography>
                    <Box mt={1}>
                        <IconButton>
                            <FavoriteBorderIcon />
                        </IconButton>
                        <IconButton>
                            <ModeCommentIcon />
                        </IconButton>
                    </Box>
                </Card>

            </>
            ))}
        </Box>
    );
}