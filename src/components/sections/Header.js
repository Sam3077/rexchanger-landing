import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          art_build: file(
            sourceInstanceName: { eq: "art" }
            name: { eq: "tent_door" }
          ) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      `}
      render={data => (
        <HeaderWrapper>
          <Container>
            <Grid>
              <Art>
                <Img fluid={data.art_build.childImageSharp.fluid} />
              </Art>
              <Text>
                <h1>
                  Your
                  <br />
                  door to
                  <br />
                  the outdoors
                </h1>
                <br />
                <p>
                  <Text>
                    Download now on{' '}
                    <StyledExternalLink href={googlePlayLink}>
                      Android
                    </StyledExternalLink>{' '}
                    and{' '}
                    <StyledExternalLink href={appStoreLink}>
                      iOS
                    </StyledExternalLink>
                    &nbsp;&#x2794;
                  </Text>
                </p>
              </Text>
            </Grid>
          </Container>
        </HeaderWrapper>
      )}
    />
  );
};

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const Art = styled.figure`
  width: 90%;
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;
    filter: drop-shadow(
      5px 5px 0.75rem ${props => props.theme.color.black.regular}
    );

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: underline;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

export default Header;
