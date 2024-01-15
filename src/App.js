import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Features from "./components/Features.jsx";
import styled from "styled-components";

function App() {
  return (
    <div>
      <Navbar />
      <Main>
        <Header />
      </Main>
    </div>
  );
}

export default App;

const Main = styled.div`
  padding: 100px 0;
`;
