import css from './Button.module.css';
import PropTypes from 'prop-types';

function Button({ children, variant, size }) {
  return <button className={` ${css[variant]} ${css[size]}`}>{children}</button>;
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};
export default Button;
