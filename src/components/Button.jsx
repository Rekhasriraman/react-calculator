import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ text, style, clickHandler }) => {
  const className = style === 'Clear' ? 'clear-button' : style === '=' ? 'btnequal' : 'btn';

  return (
    <button className={className} onClick={clickHandler}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;