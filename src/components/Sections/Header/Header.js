import React from 'react';
import codeHtml from './code.html';

import animate from './animate';

class Code extends React.Component {
  componentDidMount() {
    animate();
  }

  render() {
    return (
      <header id="codeRoot" dangerouslySetInnerHTML={{ __html: codeHtml }} />
    );
  }
}

export default Code;
