export default function ListOfCats({ curr, allCats }) {
  return (
    <div className="ListOfCats">
      {allCats.map((cat) => (
        <div key={cat.id}>
          {cat === allCats[curr] ? (
            <img
              className="gallery-img box-shadow"
              src={cat.image + cat.name + ".jpg"}
              alt={cat.name}
              key={cat.imageID}
            />
          ) : (
            <img
              className="gallery-img"
              src={cat.image + cat.name + ".jpg"}
              alt={cat.name}
              key={cat.imageID}
            />
          )}
        </div>
      ))}
    </div>
  );
}
