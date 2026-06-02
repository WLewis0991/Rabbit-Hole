import { formatRelativeTime } from "@/lib/format";
import { Post, User, Tag } from "@/lib/types";
import { UserAvatar } from "@neondatabase/auth/react";
import { MessageSquare } from "lucide-react";
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
  const primarySlug = post.tagSlugs[0];
  const primaryTag = primarySlug ? tagsBySlug.get(primarySlug) : undefined;

  return (
    <article className="rounded-xl ring-1 ring-foreground/10 bg-card p-3 md:p-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <UserAvatar user={author} size="sm" />
          <Link
            href={`/post/${post.id}`}
            className="hover:text-foreground transition-colors"
          >
            u/{author.username}
          </Link>
          <span aria-hidden="true">•</span>
          <span>{formatRelativeTime(post.createdAt)}</span>
        </div>
        <Link href={`/post/${post.id}`} className="group">
          <h2 className="font-heading text-base leading-snug font-medium group-hover:underline">
            {post.title}
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            {snippet(post.body)}
          </p>
        </Link>

        {primaryTag && (
          <div>
            <Link
              href={`/?tag=${encodeURIComponent(primaryTag.slug)}`}
              className="inline-flex items-center rounded-full bg-tag-bg px-2.5 py-0.5 text-xs font-medium text-tag-text transition-colors hover:bg-tag-bg/80"
            >
              #{primaryTag.label}
            </Link>
          </div>
        )}

        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <MessageSquare className="size-4 shrink-0" />
          <span>
            {post.commentCount} Comment
            {post.commentCount !== 1 ? "s" : ""}
          </span>
        </div>
      </div>
    </article>
  );
}
