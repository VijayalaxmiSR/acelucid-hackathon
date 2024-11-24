import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <span></span>
            <h1>Dientians Web</h1>
          </div>
          <nav>
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              About Us
            </Link>
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            ></Link>
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Home
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
