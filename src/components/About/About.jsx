import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';

import RESUME from '../../images/RESUME.pdf';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper" style={{ marginLeft: '15rem', marginRight: '10rem' }}>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <div className="about-wrapper__info">
              <p className="about-wrapper__info-text">{paragraphOne}</p>
              <p className="about-wrapper__info-text">{paragraphTwo}</p>
              <p className="about-wrapper__info-text">{paragraphThree}</p>

              {resume && (
                <span className="d-flex mt-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--resume"
                    href={RESUME}
                  >
                    Resume
                  </a>
                </span>
              )}
            </div>
          </Fade>
          {/* </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default About;
