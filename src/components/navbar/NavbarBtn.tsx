
import { LuArrowDownRight } from "react-icons/lu";
import { Link } from "react-scroll";
const NavbarBtn = () => {
  return (
    <Link
      spy={true}
      smooth={true}
      duration={500}
      offset={-120}
      to='contact'>
      <button className="btn-custom">
        Hire Me
        <LuArrowDownRight />
      </button>
    </Link>
  )
}

export default NavbarBtn