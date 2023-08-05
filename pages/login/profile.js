import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function User() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session || null) {
      router.push("/login");
    }
  }, [session]);

  if (session)
    return (
      <h1>
        Your are now logged in!
        <button onClick={() => signOut()}>Ausloggen</button>
      </h1>
    );
}
