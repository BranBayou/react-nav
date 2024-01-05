import Logo from "./navigation/Logo";
import Links from "./navigation/Links";

const Header = () => {
  return (
    <div className="w-full sticky top-0 z-[20] mx-auto flex items-center justify-between flex-wrap border-b border-gray-500 p-8">
      <Logo />
      <Links />
    </div>
  );
};

export default Header;