import SubmitButton from "@/components/submit-button";
import { createPost } from "@/actions/actions";
import LinkButton from "@/components/link-button";

export default async function CreatePostPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row gap-4 px-20 py-20">
        <h1 className="text-4xl text-center font-semibold px-4">
          Create New Post
        </h1>
        <LinkButton link="/" content="Home" />
        <LinkButton link="/posts" content="Posts" />
      </div>

      <main className="flex items-center justify-center">
        <form action={createPost} className="flex flex-col gap-y-2 w-[400px]">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="px-2 py-2 rounded-sm"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Author"
            className="px-2 py-2 rounded-sm"
            required
          />
          <textarea
            name="content"
            rows={5}
            placeholder="Content"
            className="px-2 py-2 mb-2 mt-2 rounded-sm"
          />
          <SubmitButton>Create Post</SubmitButton>
        </form>
      </main>
    </div>
  );
}
