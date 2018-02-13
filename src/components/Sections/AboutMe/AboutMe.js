import React from 'react';

import SectionTitle from '../../styled/SectionTitle';

const AboutMe = () => (
  <section className="about-me" style={{ paddingBottom: 0 }}>
    <SectionTitle>About me</SectionTitle>
    <ul>
      <li><strong>Age:</strong> 25</li>
      <li><strong>Location:</strong> Stockholm, Sweden</li>
      <li><strong>Languages:</strong> Swedish, English</li>
      <li><strong>Education:</strong> IT-Media</li>
    </ul>
    <p>
      Feel free to contact me if you have any questions.<br />
    </p>
  </section>
);

export default AboutMe;
