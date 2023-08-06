import { signOut, getSession } from "next-auth/react";
import useSWR from "swr";
import RoastCard from "@/components/RoastCard";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProfilePage() {
  const { data, isLoading } = useSWR("/api/user", fetcher);

  if (isLoading) return <h1>Loading</h1>;

  return (
    <h1>
      You are now logged in!
      <button onClick={() => signOut()}>Ausloggen</button>
      {data.map((roast) => (
        <RoastCard
          key={1}
          name={roast.name}
          roaster={roast.roaster}
          score={roast.score}
        />
      ))}
    </h1>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return { props: { session } };
}
