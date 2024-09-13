
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Blogs from './components/Blogs/Blogs'
import Partners from "./components/Partners/Partners";
import Services from "./components/Services/Services";
import Products from "./components/Products/Products";
import Banner from "./components/Banner/Banner";
import headphoneRed from './assets/hero/headphone red.png';
import appleSilver from './assets/products/apple-watch.png';
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner 
        discount="50% OFF"
        title="Red Cherry"
        date="12 Sep - 18 Sep"
        image={headphoneRed}
        title2="Voice Cancellation"
        title3="Summer Ending Sale"
        title4="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis"
        bgColor="#f42c37"
      />
      <Products/>
      <Banner discount="30% OFF"
        title="Apple Watch"
        date="12 Sep - 18 Sep"
        image={appleSilver}
        title2="Touch Sensor"
        title3="Summer Ending Sale"
        title4="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis"
        bgColor= "#d0d3d4"/>
        <Blogs/>
        <Partners/>
        <Footer />
    </div>
  );
}

export default App;
