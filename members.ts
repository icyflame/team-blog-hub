import { Member } from "@src/types";

export const members: Member[] = [
  {
    name: "Jessie",
	avatarSrc: "/avatars/tech.jpg",
    sources: [
      "https://blog.jessfraz.com/index.xml",
    ],
    websiteUrl: "https://blog.jessfraz.com",
  },
  {
    name: "Kazeburo",
	avatarSrc: "/avatars/tech.jpg",
    sources: [
      "https://kazeburo.hatenablog.com/feed",
    ],
    websiteUrl: "https://kazeburo.hatenablog.com",
  },
  {
    name: "538",
	avatarSrc: "/avatars/news.png",
    sources: [
      "https://fivethirtyeight.com/all/feed",
    ],
    websiteUrl: "https://fivethirtyeight.com",
  },
  {
    name: "NYT Politics",
	avatarSrc: "/avatars/nyt.jpg",
    sources: [
	  "https://rss.nytimes.com/services/xml/rss/nyt/Politics.xml",
	],
    websiteUrl: "https://nytimes.com",
  },
];
