import SubmitButton from "@/components/submit-button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-6xl text-blue-700 text-center font-semibold mt-32 mb-20">
        My Awesome Blogsite
      </h1>
      <main className="flex flex-col items-center gap-8">
        <SubmitButton>
          <Link href="/posts" className="text-base">
            View Posts
          </Link>
        </SubmitButton>
        <SubmitButton>
          <Link href="/posts/create" className="text-base">
            Create Post
          </Link>
        </SubmitButton>
      </main>
    </div>
  );
}
