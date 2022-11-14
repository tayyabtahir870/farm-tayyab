import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import Hero from './Components/Elements/Hero'
import Card from './Components/Elements/Card';

function App() {
  return (
    <div>
   
   <Header/>
   <Hero/>
   <Card/>
   <Footer/>
   
    </div>
  );
}

export default App;
