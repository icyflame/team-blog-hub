export const config = {
  siteMeta: {
    title: "RSS Feed Subscriptions",
    teamName: "Home Inc.",
    description: "Latest posts from subscribed RSS feeds.",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://team-blog-hub.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "GitHub",
      href: "https://github.com/catnose99/team-blog-hub",
    },
  ],
};
