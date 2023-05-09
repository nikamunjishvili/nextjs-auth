import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarComponent() {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">NextJs Auth</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-auto" />
        {user ? (
          <Nav.Link
            style={styles}
            onClick={() => {
              logout();
              router.push("/login");
            }}
          >
            logout
          </Nav.Link>
        ) : (
          <>
            <Nav.Link href="/login">login</Nav.Link>
            <Nav.Link href="/signup">signup</Nav.Link>
          </>
        )}
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

const styles = {
  width: "100px",
  height: "40px",
  textAlign: "center",
  padding:5,
  backgroundColor: "darkgrey",
  borderRadius: "10px",
  fontSize:20,
  cursor: "pointer",
  color: "#fff",
};
