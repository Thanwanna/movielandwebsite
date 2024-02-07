const Footer = () => {
  return (
    <div className="bg-blue-900 md:hidden w-full border-b-2 border-slate-600">
      <ul className="flex w-full items-center justify-evenly text-blue-300">
        <li className="p-2 hover:text-slate-100 text-lg">
          <a href="#home">home</a>
        </li>
        <li className="p-2 hover:text-slate-100 text-lg">
          <a href="#about"></a>about
        </li>
        <li className="p-2 hover:text-slate-100 text-lg">
          <a href="#contact">contact</a>
        </li>
        <li className="p-2 hover:text-slate-100 text-lg">
          <a href="sign_in">sign in</a>
          <a className="hidden" href="profile">
            profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
