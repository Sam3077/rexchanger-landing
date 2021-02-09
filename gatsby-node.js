exports.createPages = async function({ actions, graphql }) {
  actions.createRedirect({
    fromPath: '/privacy-policy',
    toPath: '/privacy-policy.pdf',
    statusCode: 200,
    force: true,
  });
  actions.createRedirect({
    fromPath: '/terms-of-use',
    toPath: '/terms-of-use.pdf',
    statusCode: 200,
    force: true,
  });
};
