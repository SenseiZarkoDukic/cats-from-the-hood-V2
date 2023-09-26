import { useState, useEffect } from "react";

export function useUploadImage() {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);

  function handleFileChange(e) {
    setFile(e.target.files[0]);
  }
  useEffect(
    function () {
      if (!file) return;
      const config = {
        headers: {
          "x-api-key":
            "live_ud6PsfCV085sI7aYIhk56O3lMNFj4cUwJY9tcJfTjZMQoGfH3esKGJ87HVAwIpLm",
        },
        "content-type": "multipart/form-data",
      };
      const controller = new AbortController();
      const fetchPost = async () => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("file", file);
        formData.append("sub_id", "user-123");

        await fetch("https://api.thecatapi.com/v1/images/upload", {
          method: "POST",
          headers: config.headers,
          body: formData,
          signal: controller.signal,
        })
          .then((res) => {
            alert("File Upload success");
            console.log(res);
          })
          .catch((err) => alert(`File Upload Error: ${err.message}`));
      };
      fetchPost();

      return function () {
        controller.abort();
      };
    },
    [file, name]
  );

  return { file, handleFileChange, setName, name, setFile };
}
