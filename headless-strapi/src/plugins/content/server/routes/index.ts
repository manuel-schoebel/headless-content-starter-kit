export default [
  {
    method: "POST",
    path: "/preview",
    handler: "content.preview",
    config: {
      policies: [
        (policyContext) => {
          if (policyContext.state.user) {
            return true;
          }
          return false;
        },
      ],
    },
  },
  {
    method: "POST",
    path: "/disable-preview",
    handler: "content.disablePreview",
    config: {
      policies: [
        (policyContext) => {
          if (policyContext.state.user) {
            return true;
          }
          return false;
        },
      ],
    },
  },
  {
    method: "POST",
    path: "/revalidate",
    handler: "content.revalidate",
    config: {
      policies: [
        (policyContext) => {
          if (policyContext.state.user) {
            return true;
          }
          return false;
        },
      ],
    },
  },
];
