import { useState } from "react";
import Cat from "./Cat";
import ListOfCats from "./ListOfCats";
import AddNewCat from "./AddNewCat";

export default function CatsList({
  newIdNumber,
  onNewIdNumber,
  onAddNewCat,
  allCats,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? allCats.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === allCats.length - 1 ? 0 : curr + 1));

  return (
    <div className="CatsList">
      <h1 className="CatsList-Headline">MEET OUR CATS FROM THE HOOD!</h1>
      <ul className="cats">
        {allCats.map((cat) =>
          cat === allCats[curr] ? (
            <div className="carousel" key={cat}>
              <Cat
                cat={cat}
                curr={curr}
                onCurr={setCurr}
                keyId={cat.id.toString()}
                image_id={cat.image_id}
                onPrev={prev}
                onNext={next}
              />
            </div>
          ) : (
            ""
          )
        )}
      </ul>
      <div className="flex">
        <ListOfCats curr={curr} allCats={allCats} />
        <AddNewCat
          newIdNumber={newIdNumber}
          onNewIdNumber={onNewIdNumber}
          onAddNewCat={onAddNewCat}
          allCats={allCats}
        />
      </div>
      <h2 className="cat-headline cats-number-h2">
        We now have <span className="cats-number-bigger">{allCats.length}</span>{" "}
        cats in the hood and counting...
      </h2>
    </div>
  );
}
