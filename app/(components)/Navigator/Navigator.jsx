import Link from "next/link";

const Navigator = () => {
  return (
    <div className="flex gap-2 my-2 ">
      <Link
        href="/MyCollection"
        className="bg-emerald-500 text-white px-2 py-1 rounded-lg"
      >
        My Collection
      </Link>
      <Link href="/" className="bg-emerald-500 text-white px-2 py-1 rounded-lg">
        My Profile
      </Link>
    </div>
  );
};

export default Navigator;
