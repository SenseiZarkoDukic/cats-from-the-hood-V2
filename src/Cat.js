export default function Cat({
  cat,
  currCat,
  onCurrCat,
  onPrev,
  onNext,
  image_id,
  keyId,
}) {
  return (
    <li key={keyId} className="cat-li">
      <img
        key={image_id}
        className="cat-image"
        src={cat.image}
        alt={cat.name}
      />

      <h2 className="cat-headline">😸 My name is {cat.name}</h2>

      <p className="text-about-cat">
        <span className="no-italic">🦁</span> My father's name is {cat.Father}.
      </p>

      <p className="text-about-cat">
        <span className="no-italic">🐯</span> My Mother's name is {cat.Mother}.
      </p>

      <p className="text-about-cat">
        <span className="no-italic">🐈‍⬛</span> The color of my fur is {cat.color}
        .
      </p>
      <h3 className="cat-headline">😺 MORE ABOUT ME</h3>
      <p className="text-about-cat">
        <span className="no-italic">😻</span> {cat.description}
      </p>
      <button className="btn btn--left" onClick={onPrev}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 btn-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button className="btn btn--right" onClick={onNext}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 btn-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </li>
  );
}
