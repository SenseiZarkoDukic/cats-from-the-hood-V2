import { useState, useEffect } from "react";

export function useUploadImage() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [image, setImage] = useState("");

  const KEY =
    "live_ud6PsfCV085sI7aYIhk56O3lMNFj4cUwJY9tcJfTjZMQoGfH3esKGJ87HVAwIpLm";
  function handleFileChange(e) {
    setFile(e.target.files[0]);
    e.preventDefault();
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
      setIsLoading(true);
      const fetchPost = async () => {
        try {
          const formData = new FormData();
          formData.append("name", name);
          formData.append("file", file);

          const res = await fetch(
            `https://api.thecatapi.com/v1/images/upload/?x-api-key=${KEY}`,
            {
              method: "POST",
              headers: config.headers,
              body: formData,
              signal: controller.signal,
            }
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching images");
          const data = await res.json();
          console.log(data);
          if (data.Response === "False") throw new Error("Image not found");
          setImage(data.url);
          alert("File Upload success");
          console.log(res);
        } catch (err) {
          alert(`File Upload Error: ${err.message}`);
        } finally {
          setIsLoading(false);
        }
      };

      fetchPost();

      return function () {
        controller.abort();
      };
    },
    [file, name]
  );

  return { file, handleFileChange, setName, name, setFile, image };
}
