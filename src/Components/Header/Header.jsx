import './Header.css';
import Icon from './Icon.svg';
import { useApi } from '../../context/ApiContext';
import { getCurrentDay, conversion } from '../../context/ApiContext';
import wind from './wind.svg';
import humedad from './humedad.svg';
import rain from './rain.svg';
import ubication from './Location.svg';
import React, { useEffect, useState } from 'react';

function Header() {
	const localStorageTypeGrades = localStorage.getItem('typeGrades');
	const day = getCurrentDay();
	const [dayNow, month, numDay] = day.toDateString().split(' ');
	const weather = useApi();
	
	const [type, setType] = useState(localStorageTypeGrades);
	const [grades, setGrades] = useState(weather.current.temp);
	useEffect(() => {
		conversion(setType, setGrades, weather.current.temp, type);
	}, []);
	return (
		<header>
			<div className="header__nav container">
				<p
					onClick={() => {
						conversion(setType, setGrades, weather.current.temp, type);
					}}
				>
					{type}
				</p>
				<img className="IconPoints" src={Icon} alt="burguer menu" />
			</div>
			<div className="Header__ubication">
				<img src={ubication} alt="" />
				<p className="">{weather.timezone}</p>
			</div>
			<div className="container header__img">
				<img src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`} alt="" />
			</div>
			<div className="container header__grades">
				<h2>
					{parseInt(grades + 1)}
					<span className="l">°</span>
				</h2>
				{weather.current.weather.map((type) => (
					<p key={type.id} className="header__grades--yellow">
						{type.main}
					</p>
				))}
				{/* <p className='header__grades--yellow'></p> */}
				<p className="header__grades--font-size">{`${dayNow} ${month} ${numDay}`}</p>
				<hr />
				<div className="header__basic-info">
					<div>
						<img src={wind} alt="wind" />
						<p>{weather.current.wind_speed} m/s</p>
						<p>wind</p>
					</div>
					<div>
						<img src={humedad} alt="wind" />
						<p>{weather.current.humidity}%</p>
						<p>Humidity</p>
					</div>
					<div>
						<img src={rain} alt="wind" />
						<p>{weather.current.clouds}%</p>
						<p>Rain</p>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
