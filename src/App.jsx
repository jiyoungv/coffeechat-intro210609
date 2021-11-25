import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Hero from './components/Hero';
import Info from './components/Info';
import Review from './components/Review';
import Usage from './components/Usage';
import Newtalk from './components/Newtalk';
import Faq from './components/Faq';
import Partner from './components/Partner';
import Start from './components/Start';

function App () {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Hero />
			<Info />
			<Review />
			<Usage />
			<Newtalk />
			<Faq />
			<Partner />
			<Start />
		</>
	);
}

export default App;