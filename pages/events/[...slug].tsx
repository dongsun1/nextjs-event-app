import { useRouter } from "next/router";

const FilteredEventsPage = () => {
  const { query: { slug } = {} } = useRouter();
  return (
    <div>
      <h1>Filtered Event Page</h1>
    </div>
  );
};

export default FilteredEventsPage;
