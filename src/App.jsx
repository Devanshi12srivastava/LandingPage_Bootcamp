import Hero from "./Pages/Hero";
import Highlights from "./Pages/Highlight";
import Demo from "./Pages/Demo";
import Live from "./Pages/Live";
import Benefits from "./Pages/Benefits";
import Career from "./Pages/Career";
import Form from "./Pages/Form";
import Footer from "./components/Footer";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";




function App() {
  return (
    <>
       <Navbar />
      <Hero />
      <Highlights />
      <Demo />
      <Live />
      <Benefits />
      <Career />
      <Form />
      <Footer />
    </>
  );
}

export default App;