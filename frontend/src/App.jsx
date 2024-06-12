import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { Container, Col } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/index";

function App() {
  const currentPage = window.location.pathname;

  const showHeader = currentPage !== "/homescreen1"; // Add this line

  return (
    <BrowserRouter>
      <main className="d-flex">
        <div className="w-auto">
        {location.pathname !== "/" && <Sidebar />}  
        </div>
        <Col className="body">
        {location.pathname !== "/" && <Header />}  
        <Container>
            <Router />
          </Container>
          {location.pathname !== "/" && <Footer />}  
        </Col>
      </main>
    </BrowserRouter>
  );
}

export default App;
