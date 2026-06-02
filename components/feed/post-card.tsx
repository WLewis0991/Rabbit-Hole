import { formatRelativeTime } from "@/lib/format";
import { Post, User, Tag } from "@/lib/types";
import { UserAvatar } from "@neondatabase/auth/react";
import Link from "next/link";

function snippet(body: string, max = 160) {
  const t = body.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max)}...`;
}

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
          <span>•</span>
          <span>{formatRelativeTime(post.createdAt)}</span>
        </div>
        <Link href={`/post/${post.id}`}>
          <h2>{post.title}</h2>
          <p>{snippet(post.body)}</p>
        </Link>
      </div>
    </article>
  );
}
