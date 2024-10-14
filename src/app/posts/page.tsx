import Link from "next/link";

import prisma from "@/db/db";
import LinkButton from "@/components/link-button";

export default async function PostsPage() {
  // const posts = await prisma.post.findMany({
  //   orderBy: {
  //     createdAt: "asc",
  //   },
  // });

  const user = await prisma.user.findUnique({
    where: {
      email: "j42@example.com",
    },
    include: {
      posts: true,
    },
  });

  if (!user) return;

  const postsCount = user.posts.length;

  return (
    <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
      <div className="flex flex-row gap-4">
        <h1 className="text-4xl font-semibold px-4">
          All Posts (<span>{postsCount}</span>)
        </h1>
        <LinkButton link="/" content="Home" />
      </div>

      <ul className="border-t border-b border-black/10  py-5 leading-8">
        {user.posts.map((post) => (
          <li key={post.id} className="flex items-center justify-between px-5">
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
