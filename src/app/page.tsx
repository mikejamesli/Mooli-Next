import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          {posts.map((post, index) => (
            <div key={index}
              className="group flex items-center justify-between rounded-lg border border-[hsl(280,100%,70%)] bg-white px-4 py-2 text-sm font-medium text-[hsl(280,100%,70%)] hover:bg-[hsl(280,100%,95%)] hover:text-white transition-colors"
            >
              <p className="flex items-center gap-2">
                <span className="text-[hsl(280,100%,70%)]">{post.name}</span>
              </p>
            </div>
            ))}
        </div>
      </div>
    </main>
  );
}
