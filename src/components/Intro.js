import React from 'react';
import PropTypes from 'prop-types';
import portraitSrc from '../img/sebastian-nordqvist.jpg';

const Intro = props => (
  <section className="row center-xs">

    <div className="cx12">
      <div className="portrait">
        <img
          src={portraitSrc}
          alt="Sebastian Nordqvist"
        />
      </div>
    </div>

    <div className="cx12">
      <h1>{props.name}</h1>
      <p>{props.about}</p>
    </div>

  </section>
);

Intro.propTypes = {
  name: PropTypes.string,
  about: PropTypes.string,
};

Intro.defaultProps = {
  name: 'Sebastian Nordqvist',
  about: 'Analytical, curious, positive and driven. Agile learner and problem solver. Thrives when being challenged and is always looking for ways to improve myself and people around me.',
};

export default Intro;
