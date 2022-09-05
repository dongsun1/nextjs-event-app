import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/events">Events</Link>
    </div>
  );
};

export default Home;
