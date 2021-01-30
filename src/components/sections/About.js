import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_bike: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "mountain_bike" }
        ) {
          childImageSharp {
            fluid(maxHeight: 750) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_chill: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "hammock" }
        ) {
          childImageSharp {
            fluid(maxHeight: 750) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_share: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "share" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="about">
        <Container>
          <Grid>
            <div>
              <h2>You don’t have to buy the gear to have the adventure</h2>
              <p>
                Whether you're trying a new sport or getting back to an old
                favorite, Rexchanger's got you covered. Find gear to support
                your next outting for much cheaper than any rental shops.
              </p>
            </div>
            <Art>
              <Img
                fadeIn={true}
                imgStyle={{ maxHeight: 500 }}
                fluid={data.art_bike.childImageSharp.fluid}
              />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img
                fadeIn={true}
                imgStyle={{ maxHeight: 500 }}
                fluid={data.art_chill.childImageSharp.fluid}
              />
            </Art>
            <div>
              <h2>Travel light, but don’t miss out on an adventure</h2>
              <p>
                With listings all over the world you can eave your bigger items
                at home and rent top quality gear no matter where you go. Local
                Trailblazers are always available to rent their gear and give
                you tips about the area.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>Share the adventure and earn money</h2>
              <p>
                If you can’t use it, somebody should… and you should make some
                extra cash in the process. Help others discover your favorite
                sport and make some cash on the gear in your garage.
              </p>
            </div>
            <Art>
              <Img
                fadeIn={true}
                imgStyle={{ maxHeight: 500 }}
                fluid={data.art_share.childImageSharp.fluid}
              />
            </Art>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  max-height: 500px;
  width: 100%;
`;

export default About;
