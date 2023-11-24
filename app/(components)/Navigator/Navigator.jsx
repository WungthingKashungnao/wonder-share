import Link from "next/link";

const Navigator = () => {
  return (
    <div className="flex gap-2 my-2 ">
      <Link href="/" className="bg-emerald-500 text-white px-2 py-1 rounded-lg">
        Discovery
      </Link>
      <Link
        href="/profile"
        className="bg-emerald-500 text-white px-2 py-1 rounded-lg"
      >
        Profile
      </Link>
    </div>
  );
};

export default Navigator;
