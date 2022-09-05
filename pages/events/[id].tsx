import { NextPage } from "next";
import { useRouter } from "next/router";

const Events: NextPage = () => {
  const { query: { id } = {} } = useRouter();
  return <div>{id}</div>;
};

export default Events;
