import { NavLink } from 'react-router-dom';
import { FaLaptopCode } from 'react-icons/fa';

const Logo = () => {
  return (
    <NavLink to="/" className="flex items-center gap-3 text-white hover:font-bold hover:cursor-pointer">
      <h5>Berhanu</h5>
      <FaLaptopCode />
    </NavLink>
  );
};

export default Logo;
