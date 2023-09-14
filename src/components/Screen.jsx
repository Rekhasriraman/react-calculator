import PropTypes from 'prop-types';
import './Screen.css';

const Screen = ({value}) => {
   return  <div className= "Screen">{value}</div> 
}
Screen.propTypes ={
    value:PropTypes.oneOfType([PropTypes.string , PropTypes.number])
};


export default Screen;