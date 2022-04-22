import classNames from 'classnames';
import React from 'react';

const Button = ({ outline, children, onclick, className }) => {
  return (
    <button onClick={onclick} className={classNames('button', className, { 'button--outline': outline })}>{children}</button>
  );
};

export default Button;
