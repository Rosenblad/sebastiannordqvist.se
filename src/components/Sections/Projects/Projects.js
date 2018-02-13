import React from 'react';

import ListProjects from './ListProjects';
import SectionTitle from '../../styled/SectionTitle';

const projects = [
  {
    name: 'Holmhenning',
    permalink: 'http://hhpes.se/',
    imageSrc: '/assets/img/holmhenning-screenshot_1062x518.jpg',
    imageAlt: 'holmhenning & partners website screenshot',
  },
  {
    name: 'David Eberhard',
    permalink: 'http://eberhard.se/',
    imageSrc: '/assets/img/davideberhard-screenshot_1062x518.jpg',
    imageAlt: 'david eberhard website screenshot',
  },
  {
    name: 'Arkipol',
    permalink: 'http://arkipol.se/',
    imageSrc: '/assets/img/arkipol-screenshot_1062x518.jpg',
    imageAlt: 'arkipol website screenshot',
  },
  {
    name: 'Ngenia',
    permalink: 'http://ngenia.se',
    imageSrc: '/assets/img/ngenia-screenshot_1062x518.jpg',
    imageAlt: 'ngenia website screenshot',
  },
  {
    name: 'Kendi',
    permalink: 'http://kendi.konsulterna.nu/',
    imageSrc: '/assets/img/kendi-screenshot_1062x518.jpg',
    imageAlt: 'kendi website screenshot',
  },
  {
    name: 'Djupvik',
    imageSrc: '/assets/img/hotel-djupvik_screenshot_1068x518.jpg',
    imageAlt: 'djupvik hotell website screenshot',
  },
];

const Projects = () => (
	<section className="projects">
    <SectionTitle>Projects</SectionTitle>
		<ListProjects projects={projects} />
	</section>
);

export default Projects;