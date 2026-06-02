import { Post, User, Tag } from "@/lib/types";
import { UserAvatar } from "@neondatabase/auth/react";
import Link from "next/link";

export function PostCard({
  post,
  author,
  tagsBySlug,
  score,
  userVote,
}: {
  post: Post;
  author: User;
  tagsBySlug: Map<string, Tag>;
  score: number;
  userVote: -1 | 0 | 1;
}) {
  return (
    <article>
      <div>
        <div>
          <UserAvatar user={author} size="sm" />
          <Link href={`/post/${post.id}`}>u/{author.username}</Link>
        </div>
      </div>
    </article>
  );
}
