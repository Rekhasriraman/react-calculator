import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ text, styling, clickHandler }) => {
    return (
        <button className={`btn ${styling}`} onClick={clickHandler}>
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    styling: PropTypes.string,
    clickHandler: PropTypes.func.isRequired
};

export default Button;