import { useRouter } from "next/router";
import useSWR from "swr";
import RoastDetailCard from "@/components/RoastDetailCard";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function Detail() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useSWR(`api/roasts/${id}`, fetcher);

  if (isLoading) return <h1>... is Loading</h1>;

  return (
    <RoastDetailCard
      name={data.name}
      roaster={data.roaster}
      arabica={data.arabica}
      robusta={data.robusta}
      level={data.level}
      provenance={data.provenance}
      score={data.score}
    />
  );
}
