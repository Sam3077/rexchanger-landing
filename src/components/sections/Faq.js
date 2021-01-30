import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';

const FAQS = [
  {
    title: 'What is Rexchanger?',
    content: () => (
      <>
        Rexchanger is the go-to gear rental market. You can find whatever gear
        you need for your next adventure. All our gear is listed by locals and
        is much cheaper than going through a rental shop.
      </>
    ),
  },
  {
    title: 'How do I rent gear on Rexchanger?',
    content: () => (
      <>
        Just download the app to become a Rexchanger Adventurer and get instant
        access to our entire marketplace of gear rentals. Simply add a payment
        method in the app and we'll take care of the rest! Payments are
        automatically processed so you can focus on the adventure.
      </>
    ),
  },
  {
    title: 'How do I list my gear on Rexchanger?',
    content: () => (
      <>
        All rentals are listed through our convenient mobile app. Register
        yourself as a Trailblazer, add listing details, set a daily price, and
        wait for the Adventurers to come to you! Payments are automatically
        depositted into your Rexchanger account and you can transfer them to
        your bank account at any time.
      </>
    ),
  },
  {
    title: 'How do I know my gear is safe?',
    content: () => (
      <>
        We track the condition of your gear from start to finish of the rental.
        We also offer an optional Rexprotect policy that covers your gear from
        damages.
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
