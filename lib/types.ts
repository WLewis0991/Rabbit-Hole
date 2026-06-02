export type User = {
  id: string;
  username: string;
  displayName?: string;
  avatarUrl?: string;
};

export type FeedSort = "hot" | "new" | "top";

export type Post = {
  id: string;
  authorId: string;
  title: string;
  body: string;
  tagSlugs: string[];
  createdAt: string;
  commentCount: number;
};
