import { signOut, getSession } from "next-auth/react";
import { StyUl, StyLi } from "..";
import useSWR from "swr";
import RoastCardProfile from "@/components/RoastCardProfile";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProfilePage() {
  const { data, isLoading } = useSWR("/api/user", fetcher);

  console.log(data);
  if (isLoading) return <h1>Loading</h1>;

  return (
    <>
      <h1>You are now logged in {data.name}!</h1>
      <button onClick={() => signOut()}>Ausloggen</button>
      <StyUl>
        {data.roasts.map((roast) => (
          <StyLi key={roast._id}>
            <RoastCardProfile
              name={roast.name}
              roaster={roast.roaster}
              score={roast.score}
            />
          </StyLi>
        ))}
      </StyUl>
    </>
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
