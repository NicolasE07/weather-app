import './Main.css';
import arrowrigth from './arrow-rigth.svg';
import { useApi, getCurrentDay } from '../../context/ApiContext';

function Main({ setCard, setModal, setgetDate }) {
	const days = useApi();
	console.log(days.daily);
	const xdePrueba = (day, dayNow, numDay) => {
        const fecha = {day: dayNow, numday: numDay}
		setCard({ ...day, ...fecha});
		console.log({ ...day, ...fecha});
		setModal(true);
	};
	return (
		<section>
			<div className="section__cards">
				<div className="container section__header">
					<p className="section__title">Today</p>
					<div className="section__days">
						<p>7 days</p>
						<img src={arrowrigth} alt="" />
					</div>
				</div>
				<div className="section__weather">
					{days.daily.map((day, id) => {
						const date = getCurrentDay(id + 1);
						const [dayNow, month, numDay, year] = date.toDateString().split(' ');
						return (
							<div onClick={() => xdePrueba(day, dayNow, numDay)} key={id} className="section__card">
								<p>{parseInt(day.temp.day + 1)}°</p>
								<img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="" />
								<p>{`${dayNow} ${numDay}`}</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Main;
