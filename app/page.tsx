import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full justify-center py-20 text-xl font-bold">
      <Link href={"/apply"}>Apply</Link>
    </div>
  );
}
