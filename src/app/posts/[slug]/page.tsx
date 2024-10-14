import prisma from "@/db/db";
import { PostPageProps } from "@/types";
import LinkButton from "@/components/link-button";

export default async function PostPage({ params }: PostPageProps) {
  const post = await prisma.post.findUnique({
    where: {
      slug: params.slug,
    },
  });

  if (!post) return;

  return (
    <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
      <div className="flex flex-row gap-4">
        <h1 className="text-4xl font-semibold px-4">{post.title}</h1>
        <LinkButton link="/" content="Home" />
        <LinkButton link="/posts" content="Posts" />
      </div>
      <p>{post.content}</p>
    </main>
  );
}
