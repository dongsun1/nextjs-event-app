import { useRouter } from "next/router";

const Slug = () => {
  const { query: { slug } = {} } = useRouter();
  return <div>{slug}</div>;
};

export default Slug;
