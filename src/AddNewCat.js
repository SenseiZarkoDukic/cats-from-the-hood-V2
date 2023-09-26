import { useState } from "react";
import { useUploadImage } from "./useUploadImage";
// import axios from "axios";
// import { useEffect } from "react";

export default function AddNewCat({
  newIdNumber,
  onNewIdNumber,
  onAddNewCat,
  allCats,
}) {
  const [Father, setFather] = useState("");
  const [Mother, setMother] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const { file, handleFileChange, setName, name, setFile, image } =
    useUploadImage();
  useUploadImage();

  function handleSubmit(e) {
    e.preventDefault();
    const imageID = crypto.randomUUID().toString();
    const catImage = image;

    const id = (allCats.length + 1).toString();
    console.log(imageID);
    if (!name || !Father || !Mother || !color || !description) return;
    const newCat = {
      name,
      Father,
      Mother,
      color,
      description,
      image: catImage,
      image_id: imageID,
      id: id,
    };

    onAddNewCat(newCat);
  }
  console.log(allCats.length);

  return (
    <div className="AddNewCat">
      <h1 className="add-cat-headline">Add New Cat</h1>
      <form className="addNewCatForm" onSubmit={handleSubmit}>
        <label className="form-cats-entry">Enter cat's name: </label>
        <input
          className="form-input-field"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label className="form-cats-entry">Enter cat's father name: </label>
        <input
          className="form-input-field"
          type="text"
          value={Father}
          onChange={(e) => setFather(e.target.value)}
        ></input>
        <label className="form-cats-entry">Enter cat's mother name: </label>
        <input
          className="form-input-field"
          type="text"
          value={Mother}
          onChange={(e) => setMother(e.target.value)}
        ></input>
        <label className="form-cats-entry">Enter cat's color: </label>
        <input
          className="form-input-field"
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        ></input>
        <label className="form-cats-entry">
          Enter decription of the cat:{" "}
          <span className="min-length">(min. 50 characters)</span>{" "}
        </label>
        <textarea
          minLength="50"
          className="form-input-field form-description"
          type="text"
          cols="40"
          rows="5"
          name="Text1"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label>
          Upload image:
          <input
            type="file"
            name="file"
            onChange={(e) => handleFileChange(e)}
          />
        </label>
        <button
          className="btn--add-cat box-shadow-lighter"
          onClick={handleSubmit}
        >
          Add
        </button>
      </form>
    </div>
  );
}
