import Logo from "./Logo";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="App-header">
      <Logo />
      <div className="headline">
        <h1>CATS FROM OUR HOOD</h1>
        <img
          className="header-clipart"
          src=".\Images\cat-hello-clipart.jpg"
          alt="cat clipart"
        />
        <p>Get your lucky 💫 cat! 🐈‍⬛🐈</p>
      </div>
      {/* <Menu /> */}
    </header>
  );
}
