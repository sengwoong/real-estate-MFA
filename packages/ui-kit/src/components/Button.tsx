import React from 'react';

const Button: React.FC = () => {
  const handleClick = () => {
    alert('안녕하세요');
  };

  return <button onClick={handleClick}>Button</button>;
};

export default Button;
