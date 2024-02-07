import { FaBars, FaArrowLeft } from "react-icons/fa";

const Menu = () => {
  const handleMenuOpen = () => {
    const menu = document.getElementById("menu");
    // menu.classList.add('flex');
    // menu.setAttribute("display", "block");
    menu.classList.remove("hidden");
  };

  const handleMenuClose = () => {
    const menu = document.getElementById("menu");
    // document.getElementById("menu").style.display = "none";
    menu.classList.add("hidden");
  };
  return (
    <div>
      <div className="block md:hidden">
        <FaBars className="min-w-8 min-h-8" onClick={handleMenuOpen} />
      </div>
      <div id="menu" className="hidden md:hidden">
        <ul className="absolute flex tex-3xl bg-slate-700 top-0 left-0 w-full h-screen z-50 flex-col items-center justify-center">
          <div>
            <FaArrowLeft
              onClick={handleMenuClose}
              className="min-w-8 min-h-8 absolute top-8 right-8 text-slate-400 hover:text-slate-200"
            />
          </div>
          <li className="p-4 hover:text-slate-50 text-blue-300 hover:shadow-2xl px-8 text-2xl">
            <a href="#home">home</a>
          </li>
          <li className="p-4 hover:text-slate-50 text-blue-300 hover:shadow-2xl px-8 text-2xl">
            <a href="#about"></a>about
          </li>
          <li className="p-4 hover:text-slate-50 text-blue-300 hover:shadow-2xl px-8 text-2xl">
            <a href="#contact">contact</a>
          </li>
          <li className="p-4 hover:text-slate-50 text-blue-300 hover:shadow-2xl px-8 text-2xl">
            <a href="sign_in text-3xl">sign in</a>
            <a className="hidden" href="profile text-3xl">
              profile
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
