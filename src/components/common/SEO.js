import React from 'react';
import Helmet from 'react-helmet';

const SEO_DATA = {
  description: 'Rent outdoor gear and equipment and make money off your gear',
  title: 'Rexchanger | Your door to the outdoors',
  url: 'rexchanger.com',
  author: 'Sam3077',
  keywords: [
    'gatsby',
    'site',
    'rexchanger',
    'gear',
    'outdoor',
    'peer-to-peer',
    'marketplace',
    'camping',
    'hiking',
    'skis',
    'snowboard',
  ],
  img: 'static/icons/tallicon.svg',
  twitterId: '',
  facebookId: '172511664872347',
  facebookVerificationId: 'yl2anq6hpsulexypyuh1uc5dvo62qa',
};

const SEO = () => {
  return (
    <Helmet>
      <meta property="fb:app_id" content={SEO_DATA.facebookId} />
      <meta
        name="facebook-domain-verification"
        content="yl2anq6hpsulexypyuh1uc5dvo62qa"
      />
      <meta property="og:title" content={SEO_DATA.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SEO_DATA.url} />
      <meta property="og:image" content={SEO_DATA.img} />
      <meta property="og:description" content={SEO_DATA.description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={SEO_DATA.twitterId} />
      <meta name="twitter:site" content={SEO_DATA.url} />
      <meta name="twitter:title" content={SEO_DATA.title} />
      <meta name="twitter:description" content={SEO_DATA.description} />
      <meta name="twitter:domain" content={SEO_DATA.url} />
      <meta name="twitter:image:src" content={SEO_DATA.img} />

      <meta name="description" content={SEO_DATA.description} />
      <meta name="keywords" content={SEO_DATA.keywords.join(', ')} />
      <meta name="author" content={SEO_DATA.author} />
      <title>{SEO_DATA.title}</title>
      <html lang="en" />
    </Helmet>
  );
};

export default SEO;
