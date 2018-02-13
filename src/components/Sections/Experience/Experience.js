import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../../styled/SectionTitle';

const Item = styled.div`
  margin-bottom: 16px;
`

const Experience = () => (
  <section className="experience">
    <SectionTitle>Experience</SectionTitle>
    <Item>
      <h3>Brilliant Mind</h3>
      <span className="caption">June 2017 - Now</span>
    </Item>
    <Item>
      <h3>Webbyrån Konsulterna</h3>
      <span className="caption">July 2015 - May 2017</span>
      <p>Project manager, server admin, front-end developer.</p>
    </Item>
    <Item>
      <h3>118100</h3>
      <span className="caption">2008 - 2009</span>
      <p>Internship web development 40%.</p>
      <a
        target="_blank"
        href="https://docs.google.com/document/d/1IadnojWoM5wjDWOjhOXrqONKedEEaGUFp8Nj8yaK5XM/edit?usp=sharing"
        rel="noopener noreferrer"
      >
        Letter of recommendation (in swedish)
      </a>
    </Item>
  </section>
);

export default Experience;
