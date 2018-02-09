import React from 'react'

import Header from './Header'
import Intro from './Intro'
import ListProjects from './ListProjects'
import Experience from './Experience'
import Competence from './Competence';
import AboutMe from './AboutMe';
import Footer from './Footer'

class App extends React.Component {

	constructor() {
		super()
	}
	
	render() {
		return(
			<div className="app">
				<Header />
				<div className="content">
					<div className="container-fluid">
						<Intro />
						<ListProjects />
						<Experience />
						<Competence />
						<AboutMe />
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default App