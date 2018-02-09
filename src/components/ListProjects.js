import React from 'react'

import Project from './Project'

const projects = [
	{
		name: 'Holmhenning',
		permalink: 'http://hhpes.se/',
		imageSrc: 'src/img/holmhenning-screenshot_1062x518.jpg',
		imageAlt: 'holmhenning & partners website screenshot',
	},
	{
		name: 'David Eberhard',
		permalink: 'http://eberhard.se/',
		imageSrc: 'src/img/davideberhard-screenshot_1062x518.jpg',
		imageAlt: 'david eberhard website screenshot',
	},
	{
		name: 'Arkipol',
		permalink: 'http://arkipol.se/',
		imageSrc: 'src/img/arkipol-screenshot_1062x518.jpg',
		imageAlt: 'arkipol website screenshot',
	},
	{
		name: 'Ngenia',
		permalink: 'http://ngenia.se',
		imageSrc: 'src/img/ngenia-screenshot_1062x518.jpg',
		imageAlt: 'ngenia website screenshot',
	},
	{
		name: 'Kendi',
		permalink: 'http://kendi.konsulterna.nu/',
		imageSrc: 'src/img/kendi-screenshot_1062x518.jpg',
		imageAlt: 'kendi website screenshot',
	},
	{
		name: 'Djupvik',
		imageSrc: 'src/img/hotel-djupvik_screenshot_1068x518.jpg',
		imageAlt: 'djupvik hotell website screenshot',
	},
]

const ListProjects = () => (
	<section className="projects">
		<h2>Projects</h2>
	  <div className="row">
			{ projects.map( ( project, i ) => (
				<Project key={ i } { ...project } />
			) ) }
	  </div>
	 </section>
)

export default ListProjects