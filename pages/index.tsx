import type { NextPage } from "next";
import Link from "next/link";
import { getFeaturedEvents } from "../dummy-data";

const HomePage: NextPage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <ul></ul>
    </div>
  );
};

export default HomePage;
