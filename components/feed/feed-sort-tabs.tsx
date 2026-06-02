import { FeedSort } from "@/lib/types";
import { Flame, Sparkles, TrendingUp } from "lucide-react";
import Link from "next/link";

export function FeedSortTabs({
  current,
  tag,
}: {
  current: FeedSort;
  tag?: string;
}) {
  const tabs: { id: FeedSort; label: string; icon: typeof Flame }[] = [
    { id: "hot", label: "Hot", icon: Flame },
    { id: "new", label: "New", icon: Sparkles },
    { id: "top", label: "Top", icon: TrendingUp },
  ];
  return (
    <div>
      <div>
        {tabs.map(({ id, label, icon: Icon }) => {
          const active = current === id;

          return (
            <Link key={id} href={``}>
              <Icon />
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
