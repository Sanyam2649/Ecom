import PropTypes from 'prop-types';

const Button = ({ text, onClick = () => {}, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 ${className}`}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
