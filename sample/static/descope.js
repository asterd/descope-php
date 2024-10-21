const projectId = "P2lpYELRlIQZSM7akVGZCe8uMtFu";
const sdk = Descope({
  projectId: projectId,
  persistTokens: true,
  autoRefresh: true,
});
const sessionToken = sdk.getSessionToken();
