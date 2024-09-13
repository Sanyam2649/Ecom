import Heading from "../Shared/Heading"
import ProductCard from "./ProductCard"
import Img1 from "../../assets/products/blue_beats_head.png"
import Img2 from "../../assets/products/headphone_sony.png"
import Img3 from "../../assets/products/solo_beat.png"
import Img4 from "../../assets/products/beat_control.png"
import Img5 from "../../assets/products/apple-gold.png"
import Img6 from "../../assets/products/apple-watch.png"
import Img7 from "../../assets/products/set-vr.png"
import Img8 from "../../assets/products/playstation-blackbox.png"
import Img9 from "../../assets/products/soundbox-1.png"
import Img10 from "../../assets/products/wide-silver.png"
import Img11 from "../../assets/products/red-beast.png"
import Img12 from "../../assets/products/soundbox-2.png"
const ProductsData = [
  {
    id:1,
    img: Img1,
    title:"Blue Beats",
    price:"$120",
    aosDelay:"0",
  },
  {
    id:2,
    img: Img2,
    title:"Gray Beats",
    price:"$120",
    aosDelay:"0",
  },
  {
    id:3,
    img: Img3,
    title:"Solo Beats",
    price:"$220",
    aosDelay:"100",
  },
  {
    id:4,
    img: Img4,
    title:"Control Beats",
    price:"$150",
    aosDelay:"100",
  },

  {
    id:5,
    img: Img5,
    title:"Apple Gold",
    price:"$620",
    aosDelay:"200",
  },
  {
    id:6,
    img: Img6,
    title:"Apple Aluminium",
    price:"$320",
    aosDelay:"200",
  },
  {
    id:7,
    img: Img7,
    title:"VR Set",
    price:"$2220",
    aosDelay:"500",
  },
  {
    id:8,
    img: Img8,
    title:"Black Playstation",
    price:"$1150",
    aosDelay:"100",
  },

  {
    id:9,
    img: Img9,
    title:"Sound box",
    price:"$420",
    aosDelay:"100",
  },
  {
    id:10,
    img: Img10,
    title:"Silver Laptop",
    price:"$1200",
    aosDelay:"600",
  },
  {
    id:11,
    img: Img11,
    title:"Gaming Laptop",
    price:"$1500",
    aosDelay:"100",
  },
  {
    id:12,
    img: Img12,
    title:"Sound box",
    price:"$420",
    aosDelay:"100",
  },
]

const Products = () => {
  return (
    <div>
      <div className="container">
      <Heading
                title="Our Products"
                subtitle="Explore our Products"
                className="text-center mb-4" 
                titleClassName="text-4xl font-bold text-gray-900 dark:text-primary" 
                subtitleClassName="text-xl/2 text-gray-600" 
            />
            <ProductCard data = {ProductsData}/>
      </div>
    </div>
  )
}

export default Products
