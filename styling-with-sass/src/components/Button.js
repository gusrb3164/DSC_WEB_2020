import { React } from 'react';
import classNames from 'classnames';
import './Button.scss';

const Button = ({ children, size, color, outline }) => {
  return (
    <button className={classNames('Button', size, color, { outline })}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  size: 'medium',
  color: 'blue',
};
export default Button;
