import React from 'react';

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
};

const Button = ({children, onClick}: Props) => {
  return (
    <button onClick={onClick} type="button">{children}</button>
  );
};

export default Button;
