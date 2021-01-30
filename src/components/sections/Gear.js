import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';

import { ReactComponent as Kayak } from '@images/logos/kayak.svg';
import { ReactComponent as Raft } from '@images/logos/raft.svg';
import { ReactComponent as Skis } from '@images/logos/skis.svg';
import { ReactComponent as Snowboard } from '@images/logos/snowboards.svg';
import { ReactComponent as SleepingBag } from '@images/logos/sleeping-bag.svg';
import { ReactComponent as Tent } from '@images/logos/tent.svg';
import { ReactComponent as Climbing } from '@images/logos/climbing.svg';
import { ReactComponent as Pack } from '@images/logos/pack.svg';
import { ReactComponent as Bike } from '@images/logos/bike.svg';

const LOGOS = [
  {
    logo: Kayak,
    text: 'Canoes & Kayaks',
  },
  {
    logo: Raft,
    text: 'Rafts',
  },
  {
    logo: Skis,
    text: 'Skis',
  },
  {
    logo: Snowboard,
    text: 'Snowboards',
  },
  {
    logo: SleepingBag,
    text: 'Camping Gear',
  },
  {
    logo: Tent,
    text: 'Tents',
  },
  {
    logo: Climbing,
    text: 'Climbing gear',
  },
  {
    logo: Bike,
    text: 'Mountain & Road Bikes',
  },
  {
    logo: Pack,
    text: 'And much more',
  },
];

const UsedBy = () => (
  <Section id="gear" accent>
    <StyledContainer>
      <div>
        <h1>All the gear you could need</h1>
        <LogoGrid>
          {LOGOS.map(({ logo, text }) => (
            <div key={text}>
              {logo()}
              <p>{text}</p>
            </div>
          ))}
        </LogoGrid>
      </div>
    </StyledContainer>
  </Section>
);

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  margin-top: 16px;

  div {
    width: 100%;
    text-align: center;
    margin: 10px;
    svg {
      width: 50%;
      max-height: 75px;
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: space-between;
  }
`;

export default UsedBy;
