import { LinkButtonProps } from "@/types";
import Link from "next/link";

export default function LinkButton({ link, content }: LinkButtonProps) {
  return (
    <div className="inline-block mr-2">
      <button
        type="button"
        className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gray-700 hover:bg-gray-900 hover:shadow-lg"
      >
        <Link href={link} className="text-base font-medium">
          {content}
        </Link>
      </button>
    </div>
  );
}
