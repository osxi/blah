ServiceConfiguration.configurations.upsert(
  { service: "github" },
  {
    $set: {
      clientId: process.env.GITHUB_CLIENT_ID,
      loginStyle: "popup",
      secret: process.env.GITHUB_SECRET
    }
  }
);
