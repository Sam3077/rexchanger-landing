import React from 'react';
import styled from 'styled-components';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import FacebookIcon from '@static/icons/facebook.svg';
import InstagramIcon from '@static/icons/instagram.svg';
import TwitterIcon from '@static/icons/twitter.svg';

const SOCIAL = [
  {
    icon: InstagramIcon,
    link: 'https://www.instagram.com/rexchanger_/',
  },
  {
    icon: TwitterIcon,
    link: 'https://twitter.com/rexchanger',
  },
  {
    icon: FacebookIcon,
    link: 'https://www.facebook.com/Rexchanger-386426868562732',
  },
];

const Footer = () => (
  <React.Fragment>
    <FooterWrapper>
      <StyledContainer>
        <Copyright>
          <h2>Rexchanger</h2>
        </Copyright>
        <SocialIcons>
          {SOCIAL.map(({ icon, link }) => (
            <ExternalLink key={link} href={link}>
              <img src={icon} alt="link" />
            </ExternalLink>
          ))}
        </SocialIcons>
      </StyledContainer>
    </FooterWrapper>
  </React.Fragment>
);

const SocialIcons = styled.div`
  display: flex;

  img {
    margin: 0 8px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`;

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  padding: 32px 0;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.regular};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;
