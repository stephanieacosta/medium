import Header from "./components/Header/Header.jsx";
import Article from "./components/Article/Article.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Header />
        <Article />
        <Footer />
      </div>
    </div>
  );
}

export default App;
