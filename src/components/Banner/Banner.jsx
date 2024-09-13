import Button from '../Shared/Button';
import PropTypes from 'prop-types';
import "aos";

const Banner = ({
  discount,
  title,
  date,
  image,
  title2,
  title3,
  title4,
  bgColor, // New prop for multiple colors
}) => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12'>
    <div className='container' style={{backgroundColor: bgColor}}>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-white rounded-4xl'>
        <div className="p-6 sm:p-8">
          <p data-aos="slide-right" className=" text-sm aos-init aos-animate">{discount}</p>
          <h1 data-aos="zoom-out" className="uppercase text-4xl lg:text-7xl font-bold aos-init aos-animate">{title}</h1>
          <p data-aos="fade-up" className="text-sm aos-init aos-animate">{date}</p>
        </div>
        <div data-aos="zoom-in" className='h-full flex items-center aos-init aos-animate'>
          <img src={image} alt={title} className='scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,.6)] object-cover'/>
        </div>
        <div className='flex flex-col justify-center gap-4 p-6 sm:p-8'>
          <p data-aos="zoom-out" className='font-bold text-xl aos-init aos-animate'>{title2}</p>
          <p data-aos="fade-up" className='font-bold text-3xl sm:text-5xl aos-init aos-animate'>{title3}</p>
          <p data-aos="fade-up" className="text-sm tracking-wide leading-5 aos-init aos-animate">{title4}</p>
          <div data-aos="fade-up" data-aos-effect="0" className='aos-init aos-animate'>
            <Button text="Shop Now" className="bg-brandW text-primary"/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

Banner.propTypes = {
  discount: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title2: PropTypes.string,
  title3: PropTypes.string,
  title4: PropTypes.string,
  bgColor: PropTypes.arrayOf(PropTypes.string).isRequired, 
};

export default Banner;
