import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useCreatePostMutation } from '../../redux/api/posts';
import PostMangement from './postMangement';
// import PostMangement from './PostMangement';

export default function PostCreate() {
    const [newPost, setNewPost] = useState({
        title: "",
        introduction: "",
        body: "",
        category: "",
        image: "",
    });



    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "image") {
            const file = files[0];
            if (file) {
                setImageFile(file);
            }
            // console.log(file);

        } else {
            setNewPost((prev) => ({ ...prev, [name]: value }));
        }
    };





    const [imageFile, setImageFile] = useState()
    const navigate = useNavigate();
    const [createPost] = useCreatePostMutation();

    async function handleCreatePost() {
        try {
            let postToSend = { ...newPost };


            if (imageFile) {
                const formData = new FormData();
                formData.append("file", imageFile);
                formData.append("upload_preset", "my_unsigned_preset");

                const res = await fetch("https://api.cloudinary.com/v1_1/dbjfy4rud/image/upload", {
                    method: "POST",
                    body: formData,
                });

                const data = await res.json();
                postToSend.image = data.secure_url;
            }


            const res = await createPost(postToSend).unwrap();

            if (res.message === "Success") {
                setNewPost({ title: "", introduction: "", body: "", category: "", image: "" });
                setImageFile(null);
                navigate("/dashboard/posts");
            }
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <PostMangement
            value={newPost}
            onChange={handleChange}
            handleSendData={handleCreatePost}
        />
    );
}
