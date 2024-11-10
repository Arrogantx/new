import React from 'react'
import "./backtomenu.scss"
import { useNavigate } from 'react-router-dom';

const BackTomenu = () => {
    const navigate = useNavigate();
    const backToMenuClick = () => {
        // Navigate to the menu page when the button is clicked
        navigate("/menu");
      };
  return (
    <div className='back-to'>
<span onClick={backToMenuClick}>← BACK TO MAIN MENU</span>
    </div>
  )
}

export default BackTomenu


export const BackToSeries = () => {
  const navigate = useNavigate();
    const backToSeriesClick = () => {
        // Navigate to the menu page when the button is clicked
        navigate("/series");
      };
  return (
    <div className='back-to'>
<span onClick={backToSeriesClick}>← BACK TO SERIES</span>
    </div>
  )
}
