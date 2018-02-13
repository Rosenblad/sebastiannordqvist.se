import React from 'react';
import SVG from 'react-inlinesvg';
import uuid from 'uuid';
import svgIcons from '../../../svg';

const Competence = () => (
  <section className="competence">
    <div className="row">

      {svgIcons.map(icon => (
        <div className="competency cx2 cs2" key={uuid.v4()}>
          <SVG src={`assets/icons/${icon}.svg`} />
        </div>
        ))}

    </div>
  </section>
);

export default Competence;
