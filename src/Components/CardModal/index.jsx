import React from 'react';


import './CardModal.css';
const CardModal = ({ card, setModal}) => {
    console.log(card)
	return (
		<div className="container-modal__card">
			<span className='x' onClick={() =>  setModal(false)}>✖</span>
            <p className="date">{`${card.day} ${card.numday}`}</p>
			<img src={`http://openweathermap.org/img/wn/${card.weather[0].icon}@2x.png`} alt="" />
			<h2>{parseInt(card.temp.day) + 1}°</h2>
			<p className="main">{card.weather[0].main}</p>
            
			<div className="container-modal__info">
				<div>
					<h4>Pressure</h4>
					<p>
						{card.pressure} 
						 <b> hPa</b>
					</p>
				</div>
				<div>
					<h4>Wind speed</h4>
					<p>
						{card.wind_speed} <b>m/s</b>
					</p>
				</div>
				<div>
					<h4>Humidity</h4>
					<p>
						{card.humidity}
						<b>%</b>
					</p>
				</div>
				<div>
					<h4>UV</h4>
					<p>{card.uvi}</p>
				</div>
				<div>
					<h4>Clouds</h4>
					<p>
						{card.clouds}
						<b>%</b>
					</p>
				</div>
				<div>
					<h4>probability</h4>
					<p>
						{card.pop * 100}
						<b>%</b>
					</p>
				</div>
			</div>
		</div>
	);
};

export { CardModal };
