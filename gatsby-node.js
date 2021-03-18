exports.createPages = async function({ actions, graphql }) {
  actions.createRedirect({
    fromPath: '/privacy-policy',
    toPath: '/privacy-policy.pdf',
    statusCode: 301,
    force: true,
  });
  actions.createRedirect({
    fromPath: '/terms-of-use',
    toPath: '/terms-of-use.pdf',
    statusCode: 301,
    force: true,
  });
  actions.createRedirect({
    fromPath: '/refer/*',
    toPath: '/',
    statusCode: 302,
    force: true,
  });
};
