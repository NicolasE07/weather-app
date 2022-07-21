import React, { useState } from 'react';
import './index.css';
import Header from './Components/Header/Header.jsx';
import Main from './Components/Main/Main';
import { ModalRoot } from './Components/ModalRoot';
import { CardModal } from './Components/CardModal';

function App() {
	const [modal, setModal] = useState(false);
	const [card, setCard] = useState([]);
	return (
		<React.Fragment>
			<Header />
			<Main setModal={setModal} setCard={setCard} />
			{modal && (
				<ModalRoot>
					<CardModal card={card} setModal={setModal}/>
				</ModalRoot>
			)}
		</React.Fragment>
	);
}

export default App;
