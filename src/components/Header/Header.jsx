import { BsStars } from "react-icons/bs";

function Header() {
  return (
    <header className="flex flex-row justify-between py-6 px-4 text-xl">
      <h1 className="text-lg font-semibold">Home</h1>
      <BsStars />
    </header>
  );
}

export default Header;
