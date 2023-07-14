import Header from "./components/Header/Header";
import Offer from "./components/Offer/Offer";
import Items from "./components/Items/Items";
import Categories from "./components/Categories/Categories";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";

import './global.css'

function App (){
    return (
    <>
      <Header/>
      <Offer/>
      <Items/>     
      <Blog/>
      <Categories/>
      <Footer/>     
    </>
    );
}
export default App;