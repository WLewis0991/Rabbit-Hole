import Image from "next/image";
import { FeedSortTabs } from "@/components/feed/feed-sort-tabs";

export default function Home() {
  return (
    <div>
      <div>
        <FeedSortTabs />
        <div></div>
      </div>
    </div>
  );
}
