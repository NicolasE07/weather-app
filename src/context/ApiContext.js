import React, { createContext, useContext, useEffect, useState } from 'react';

const APIContext = createContext(null);

export const ApiContextProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch(
			`${process.env.REACT_APP_API}
			onecall?lat=4.610&lon=-74.082&units=metric&appid=
			${process.env.REACT_APP_API_KEY}`
		)
			.then((response) => response.json())
			.then((weather) => {
				setData(weather);
				setLoading(false);
			});
	}, []);
	if (loading) {
		return (
			<div className="container__loader">
				<div className="preloader"></div>
				<p>LOADING...</p>
			</div>
		);
	}

	return <APIContext.Provider value={{data}}>{children}</APIContext.Provider>;
};



export const useApi = () => {
	const { data } = useContext(APIContext);
	if (data === null || undefined) {
		return 'Algo Salio Mal';
	}

	return data;
};

export const getCurrentDay = (dayNumber) => {
	const today = new Date();
	if (dayNumber) {
		const tomorrow = new Date(today);
		tomorrow.setDate(tomorrow.getDate() + dayNumber);
		return tomorrow;
	}
	return today;
};

export const conversion = (setStateType, setStateGrades, grades, Type) => {
	if (Type === '°F') {
		localStorage.setItem('typeGrades', '°F');
		setStateGrades(grades);
		setStateType('°C');
	} else {
		localStorage.setItem('typeGrades', '°C');
		setStateGrades((grades * 9) / 5 + 32);
		setStateType('°F');
	}
};
