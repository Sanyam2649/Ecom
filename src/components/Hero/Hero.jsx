import Slider from "react-slick";
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/hero/VR.png";
import Image3 from "../../assets/hero/laptop.png";
import Image4 from "../../assets/hero/WATCH.png";
import Button from "../Shared/Button";

const HeroData = [
  {
    id: 1,
    Subtitle: "Feel the Music",
    title: "Wireless",
    title2: "Headphone",
    img: Image1,
  },
  {
    id: 2,
    Subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Virtual",
    img: Image2,
  },
  {
    id: 3,
    Subtitle: "Elite Performance",
    title: "Branded",
    title2: "Laptops",
    img: Image3,
  },
  {
    id: 4,
    Subtitle: "New Generation",
    title: "4G",
    title2: "Smart Watch",
    img: Image4,
  },
];

const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container">
      <div className="overflow-hidden rounded-xl min-h-[350px] sm:min-h-[650px] hero-bg-color flex justify-center items-center pb-10">
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Text Section */}
                  <div className="flex flex-col justify-center text-center sm:text-left gap-4 sm:pr-8 order-1">
                    <h1 className="text-2xl sm:text-6xl lg:text-2xl font-bold">
                      {data.Subtitle}
                    </h1>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                      {data.title}
                    </h1>
                    <h1 className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold">
                      {data.title2}
                    </h1>
                    <div>
                      <Button className="bg-secondary text-white" text="Shop By Category"/>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="order-1  sm:order-2">
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] relative z-40"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
