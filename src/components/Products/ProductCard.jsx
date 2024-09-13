import React from 'react';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from "../Shared/Button"

const ProductCard = ({ data }) => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {data.map((product) => (
          <div
            key={product.id}
            className="border rounded-md p-4 shadow-md"
            data-aos="fade-up"
            data-aos-delay={product.aosDelay}
          >
            <img
              src={product.img}
              alt={product.title}
              className="h-44 w-64 object-cover rounded-md"
            />
            <Button text="Add to Cart" className="bg-primary text-brandW opacity-0 hover:opacity-100"/>
            <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-500">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      aosDelay: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductCard;
