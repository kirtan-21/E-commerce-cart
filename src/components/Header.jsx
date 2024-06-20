import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const {carts} = useSelector((store) => store.cart)

  
  


  return (
    <>
      <Navbar
        style={{ height: "60px", backgroundColor: "black", color: "white", display: "flex", justifyContent: "space-between" }}
      >
        <Container >
          <NavLink to="/">
            <h3 className="text-decoration-none text-light mx-2">Ecommerce</h3>
          </NavLink>
          <div id="ex4">
            <span
              className="p1 fa-stack fa-2x has-badge"
              data-count= {carts.length}
              style={{ color: "white" }}
            >
              <NavLink
                to="/cart"
                className="text-decoration-none text-light mx-2"
              >
                <i className="fa-solid fa-cart-shopping"></i>
              </NavLink>
            </span>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
