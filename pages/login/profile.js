import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function User() {
  const { status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/login");
  }

  return (
    <h1>
      Your are now logged in!
      <button onClick={() => signOut()}>Ausloggen</button>
    </h1>
  );
}
