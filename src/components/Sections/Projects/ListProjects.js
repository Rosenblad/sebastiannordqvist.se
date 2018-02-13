import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

import Project from './Project';

const ListProjects = ({ projects }) => (
  <div className="row">
    { projects.map(project => (
      <Project key={uuid.v4()} {...project} />
    )) }
  </div>
);

ListProjects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      permalink: PropTypes.string,
      imageSrc: PropTypes.string,
      imageAlt: PropTypes.string,
    })
  ),
};

export default ListProjects;
