exports.createPages = async ({ graphql, actions }) => {
  actions.createRedirect({
    fromPath: `/privacy-policy`,
    toPath: `/privacy-policy.pdf`,
  });
  actions.createRedirect({
    fromPath: `/terms-of-use`,
    toPath: `/terms-of-use.pdf`,
  });
  actions.createRedirect({
    fromPath: `/refer/*`,
    toPath: `/`,
  });
};
