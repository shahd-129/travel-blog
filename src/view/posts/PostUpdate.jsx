import { useEffect, useState } from 'react';
// import PostMangement from './PostMangement'
import { useGetPostByIdQuery, useUpdatePostMutation } from '../../redux/api/posts';
import { useNavigate, useParams } from 'react-router-dom';
import PostMangement from './postMangement';

export default function PostUpdate() {

    const { id } = useParams();

    const { data } = useGetPostByIdQuery(id);
    const dataPosts = data?.body
    // console.log(dataPosts);


    const [newPost, setNewPost] = useState({
        title: "",
        introduction: "",
        body: "",
        category: "",
        image: "",
    });

    useEffect(() => {
        if (dataPosts) {
            setNewPost({
                title: dataPosts.title || "",
                introduction: dataPosts.introduction || "",
                body: dataPosts.body || "",
                category: dataPosts.category || "",
                image: dataPosts.image || "",
            });
        }
    }, [dataPosts]);


    const handleChange = (e) => {

        const { name, value, files } = e.target;

        if (name === "image") {
            const file = files[0];
            if (file) {
                setImageFile(file);
            }
        } else {
            setNewPost((prev) => ({ ...prev, [name]: value }));
        }
    };


    // Update post
    const navigate = useNavigate()
    const [updatePost] = useUpdatePostMutation();



    const [imageFile, setImageFile] = useState(null);

    async function handelUpdatePost() {
        try {
            let updatedPost = { ...newPost };

            if (imageFile) {
                const formData = new FormData();
                formData.append("file", imageFile);
                formData.append("upload_preset", "my_unsigned_preset");

                const res = await fetch("https://api.cloudinary.com/v1_1/dbjfy4rud/image/upload", {
                    method: "POST",
                    body: formData,
                });

                const data = await res.json();
                updatedPost.image = data.secure_url;
            }


            const res = await updatePost({ id, ...updatedPost }).unwrap();
            if (res.message === 'Success') {
                setNewPost({ title: "", introduction: "", body: "", category: "", image: "" });
                setImageFile(null);
                navigate(`/dashboard/posts/${id}`);
            }
            // console.log(res);
        } catch (error) {
            console.error(error);
        }
    }











    return (
        <PostMangement value={newPost} onChange={handleChange} handleSendData={handelUpdatePost} />
    )
}
