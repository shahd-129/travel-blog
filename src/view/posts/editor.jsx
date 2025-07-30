import { useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { Box } from "@mui/material";

export default function Editor({ value, onChange }) {


  const { quill, quillRef } = useQuill()


  const insertToEditor = (url) => {
    const range = quill.getSelection();
    quill.insertEmbed(range.index, 'image', url);
  };


  const saveToServer = async (file) => {
    const body = new FormData();
    body.append('file', file);
    body.append("upload_preset", "my_unsigned_preset");
    const res = await fetch("https://api.cloudinary.com/v1_1/dbjfy4rud/image/upload", { method: 'POST', body });
    const data = await res.json();
    insertToEditor(data.secure_url);

  };


  const selectLocalImage = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = () => {
      const file = input.files[0];
      saveToServer(file);
    };
  };




  useEffect(() => {
    if (quill) {

      quill.on("text-change", () => {
        const html = quill.root.innerHTML;

        onChange({ target: { name: "body", value: html } });
        quill.getModule('toolbar').addHandler('image', selectLocalImage);
      });

      if (value?.body) {
        quill.clipboard.dangerouslyPasteHTML(value.body);
      }
    }
  }, [quill]);



  return (
    <div

    style={{width:"100%"}}
      
    >
      <div  style={{width:"100%"}}  ref={quillRef} />
    </div >
  );
}
