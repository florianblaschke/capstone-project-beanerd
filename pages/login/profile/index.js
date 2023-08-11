import { signOut, getSession } from "next-auth/react";
import { StyUl, StyLi } from "../..";
import { StyDiv } from "..";
import useSWR from "swr";
import RoastCardProfile from "@/components/RoastCardProfile";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProfilePage() {
  const { data, isLoading, mutate } = useSWR("/api/user", fetcher);

  if (isLoading) return <h1>Loading</h1>;

  async function handleDelete(id) {
    const res = await fetch("/api/user", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(id),
    });

    if (!res.ok) {
      return alert("Da ist was schiefgelaufen!");
    }
    mutate();
  }
  console.log(data);
  return (
    <>
      <h2>You are now logged in {data.name}!</h2>
      <button onClick={() => signOut()}>Ausloggen</button>
      <StyDiv>
        <StyUl>
          {data.roasts.map((roast) => (
            <StyLi key={roast._id}>
              <RoastCardProfile
                id={roast._id}
                onDelete={() => handleDelete(roast._id)}
                name={roast.name}
                roaster={roast.roaster}
                score={roast.score}
              />
            </StyLi>
          ))}
        </StyUl>
      </StyDiv>
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