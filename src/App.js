import './App.css';
import Header from './components/Header/Header.js';
import Article from './components/Article/Article.js';
import Footer from './components/Footer/Footer.js';
import Navbar from './components/Navbar/Navbar.js';
import Bar from './components/Bar/Bar.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
      <Header/>
      <Bar/>
      <Article/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
