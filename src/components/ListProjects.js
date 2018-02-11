import React from 'react';
import uuid from 'uuid';

import holmhenning from '../img/holmhenning-screenshot_1062x518.jpg';
import arkipol from '../img/arkipol-screenshot_1062x518.jpg';
import davideberhard from '../img/davideberhard-screenshot_1062x518.jpg';
import hoteldjupvik from '../img/hotel-djupvik_screenshot_1068x518.jpg';
import kendi from '../img/kendi-screenshot_1062x518.jpg';
import ngenia from '../img/ngenia-screenshot_1062x518.jpg';

import Project from './Project';

const projects = [
  {
    name: 'Holmhenning',
    permalink: 'http://hhpes.se/',
    imageSrc: holmhenning,
    imageAlt: 'holmhenning & partners website screenshot',
  },
  {
    name: 'David Eberhard',
    permalink: 'http://eberhard.se/',
    imageSrc: davideberhard,
    imageAlt: 'david eberhard website screenshot',
  },
  {
    name: 'Arkipol',
    permalink: 'http://arkipol.se/',
    imageSrc: arkipol,
    imageAlt: 'arkipol website screenshot',
  },
  {
    name: 'Ngenia',
    permalink: 'http://ngenia.se',
    imageSrc: ngenia,
    imageAlt: 'ngenia website screenshot',
  },
  {
    name: 'Kendi',
    permalink: 'http://kendi.konsulterna.nu/',
    imageSrc: kendi,
    imageAlt: 'kendi website screenshot',
  },
  {
    name: 'Djupvik',
    imageSrc: hoteldjupvik,
    imageAlt: 'djupvik hotell website screenshot',
  },
];

const ListProjects = () => (
  <section className="projects">
    <h2>Projects</h2>
    <div className="row">
      { projects.map(project => (
        <Project key={uuid.v4()} {...project} />
      )) }
    </div>
  </section>
);

export default ListProjects;
