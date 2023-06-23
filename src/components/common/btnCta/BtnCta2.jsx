import React from 'react'

const BtnCta2 = ({cta, bgColor,type, onClick }) => {

  const handleClick = () => {
    if (onClick) {
      onClick(); // Ejecuta el manejador de eventos onClick si se proporciona
    }
    handleToHome();
  };

  return (
      <button    onClick={handleClick} type={type}
      style={{
            width:'100%', 
            height:'44px',
            backgroundColor:`${bgColor}`,
            border: 'none',
            borderRadius: '10px'
            }}>
            <span>{cta}</span>
        </button>
  )
}

export default BtnCta2
