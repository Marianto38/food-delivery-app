import React from 'react'
import { useNavigate } from 'react-router-dom'

const BtnCta = ({cta, bgColor, navigateTo, type }) => {

    const navigate = useNavigate();

    const handleToHome = () => {
      navigate(navigateTo);
    }

  return (
      <button onClick={handleToHome} type={type}
      style={{
            width:'100%', 
            height:'3.5rem',
            backgroundColor:`${bgColor}`,
            border: 'none',
            borderRadius: '10px'
            }}>
            <span>{cta}</span>
        </button>
  )
}

export default BtnCta
