import React from 'react';
import PropTypes from 'prop-types';

const Project = ({
  permalink,
  imageSrc,
  imageAlt,
}) => {
  let image;

  if (permalink) {
    image = (
      <a href={permalink} target="_blank">
        <img src={imageSrc} alt={imageAlt} />
      </a>
    );
  } else {
    image = <img src={imageSrc} alt={imageAlt} />;
  }

  return (
    <div className="cx12">
      <div className="project">
        { image }
      </div>
    </div>
  );
};

Project.propTypes = {
  permalink: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

export default Project;
