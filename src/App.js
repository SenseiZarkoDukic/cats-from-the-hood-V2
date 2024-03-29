import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import AboutUs from "./AboutUs";
import CatsList from "./CatsList";
import Cat from "./Cat";
import ListOfCats from "./ListOfCats";
import AddNewCat from "./AddNewCat";
import Menu from "./Menu";
import Logo from "./Logo";
import NavBar from "./NavBar";

const cats = [
  {
    name: "Masha",
    Father: "Kmeka",
    Mother: "Felixa",
    color: "black and white",
    description:
      "I am sterilized cat that loves to eat very much and very often. I specially love to be cuddled, and don't mind aggresive petting as well. I love to be with my humans and cats. Like to paw aggressive male cats. I have really strong character. Dogs and puppies, don't mess with me, I have very dangerous origin, just ask around who was Kmeka!",
    image: "./Images/Masha.jpg",
    image_id: crypto.randomUUID(),
    id: "1",
  },
  {
    name: "Tigrich",
    Father: "Kmeka",
    Mother: "Felixa",
    color: "black and white",
    description:
      "I am castrated male. Truly big cat! Love to play a lot with cats and humans and to be cuddled. I have amazing friendly character. Sofia is taking the most care of me",
    image: "./Images/Tigrich.jpg",
    image_id: crypto.randomUUID(),
    id: "2",
  },
  {
    name: "Emina",
    Father: "unknown",
    Mother: "unknown",
    color: "black and white",
    description:
      "I am a very young girl. I am one of the most joyfull cats in the hood. I love everyone, cats, dogs, humans... One of my best friends if American Pit Bull Terrier Frida. I am pretty small for my age, and Maya and Zharko call mi Mini. Olja raised me but when I grew up a bit wend to look for my pack, and now I am under Maya and Zharko's guidance.",
    image: "./Images/Emina.jpg",
    image_id: crypto.randomUUID(),
    id: "3",
  },
  {
    name: "Reponja",
    Father: "unknown",
    Mother: "unknown",
    color: "Orange, brown and white",
    description:
      "I was very aggresive to other cats until my humans castrated me. After that I am playfull instead. I was not from this hood, but came here and humans and cats somehow adopoted me. I like to be cuddled by humans, and I like to play with them very, very much! I am pretty strong and endlessly beautiful cat. I got my name from Maya for having special tail. ",
    image: "./Images/Reponja.jpg",
    image_id: crypto.randomUUID(),
    id: "4",
  },
  {
    name: "ChiChko",
    Father: "unknown",
    Mother: "unknown",
    color: "Orange, brown and white",
    description:
      "I was very aggresive to other cats until my humans castrated me. After that I am playfull instead. I was not from this hood, but came here and humans and cats somehow adopoted me. I like to be cuddled by humans, and I like to play with them very, very much! I am pretty strong and endlessly beautiful cat. I got my name from Maya for having special tail. ",
    image: "./Images/Chichko.jpg",
    image_id: crypto.randomUUID(),
    id: "5",
  },
  {
    name: "Zhgoljica",
    Father: "unknown",
    Mother: "unknown",
    color: "Black and white",
    description:
      "The most humble and petty cat in the hood. She came too skinny and hungry, and now she is the most beautiful cat in the hood. She connected fast with Chichko and are now the best friends. Maya loves her so much!",
    image: "./Images/Zhgoljica.jpg",
    image_id: crypto.randomUUID(),
    id: "6",
  },
  // {
  //   name: "Shumski",
  //   Father: "unknown",
  //   Mother: "unknown",
  //   color: "Grey",
  //   description:
  //     "He came to the hood from the woods, that's the reason why we call him Shumski (From the woods). He fast joined the group, and eats the fastest and longest of all cats!",
  //   image: "./Images/Shumski.jpg",
  //   image_id: crypto.randomUUID(),
  //   id: "7",
  // },
  // {
  //   name: "Petra",
  //   Father: "unknown",
  //   Mother: "unknown",
  //   color: "Black and white",
  //   description:
  //     "She is one of the most beautiful cats in the hood. She is very shy and doesn't like to be petted by everyone, but when are those who she loves the most pet her, everything is allowed to them. She is very good hunter and loves to play with other cats. She is very good friend with Tigrich.",
  //   image: "./Images/Petra.jpg",
  //   image_id: crypto.randomUUID(),
  //   id: "8",
  // },
  // {
  //   name: "Zhickara",
  //   Father: "unknown",
  //   Mother: "unknown",
  //   color: "Black and white",
  //   description:
  //     "She is one of the most beautiful cats in the hood. She is very shy and doesn't like to be petted by everyone, but when are those who she loves the most pet her, everything is allowed to them. She is very good hunter and loves to play with other cats. She is very good friend with Tigrich.",
  //   image: "./Images/Zhickara.jpg",
  //   image_id: crypto.randomUUID(),
  //   id: "8",
  // },
  // {
  //   name: "Baba",
  //   Father: "unknown",
  //   Mother: "unknown",
  //   color: "Black",
  //   description:
  //     "One of the most dangerous cats from the hood. Can pet her with your leg, not arm, she will attack you. She is very good hunter and loves to play with other cats. She is very good friend with the ones who fed her.",
  //   image: "./Images/Baba.jpg",
  //   image_id: crypto.randomUUID(),
  //   id: "9",
  // },
];

export default function App() {
  const [newIdNumber, setNewIdNumber] = useState(4);
  const [allCats, setAllCats] = useState(cats);

  function handleAddNewCat(cat) {
    setAllCats((allCats) => [...allCats, cat]);
  }
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Header />}>
              <Route exact path="/Logo" element={<Logo />} />
            </Route>
            <Route exact path="/Menu" element={<Menu />} />
            <Route exact path="/AboutUs" element={<AboutUs />} />
            <Route
              exact
              path="/CatsList"
              element={
                <CatsList
                  newIdNumber={newIdNumber}
                  onNewIdNumber={setNewIdNumber}
                  onAddNewCat={handleAddNewCat}
                  allCats={allCats}
                />
              }
            >
              <Route exact path="/CatsList/Cat" element={<Cat />} />

              <Route
                exact
                path="/CatsList/ListOfCats"
                element={<ListOfCats />}
              />
              <Route exact path="/CatsList/AddNewCat" element={<AddNewCat />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
