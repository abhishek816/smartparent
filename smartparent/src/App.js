import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Comp1 from './Components/Comp1';
import Carousel1 from './Components/Carousel1';
import Goals from './Components/Goals';
import Freev from './Components/Freev';
import Freeb from './Components/Freeb';
import Topres from './Components/Topres';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
        <Comp1/>
        <Carousel1/>
        <Goals/>
        <Freev/>
        <Freeb/>
        <Topres/>
        <Footer/>
    </div>
  );
}

export default App;
