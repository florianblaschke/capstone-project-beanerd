import { getSession } from "next-auth/react";
import {
  StyledList,
  StyledItem,
  StyledHeadingProfile,
  StyledMinorHeadingProfile,
  StyledDivHeading,
} from "@/lib/styled-components";
import { useToast } from "@/components/Modals/Toast/toastProvider";
import LoadingAnimation from "@/components/Modals/LoadingAnimation";
import useSWR from "swr";
import RoastCardProfile from "@/components/RoastCardProfile";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProfilePage() {
  const { data, isLoading, mutate } = useSWR("/api/user", fetcher);
  const toast = useToast();

  if (isLoading) return <LoadingAnimation />;
  async function handleDelete(id) {
    const res = await fetch("/api/user", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(id),
    });

    if (!res.ok) {
      return toast.errorToast("Something went wrong!");
    }
    toast.successToast("Roast removed from your list!");
    mutate();
  }
  return (
    <>
      <StyledDivHeading>
        <StyledHeadingProfile>
          This is your personal bean cellar!
        </StyledHeadingProfile>
        <StyledMinorHeadingProfile>
          Here you will find your marked roasts and can create brew recipes for
          them. If you are annoyed by one, just delete it!
        </StyledMinorHeadingProfile>
      </StyledDivHeading>
      <StyledList>
        {data.roasts.map((roast) => (
          <StyledItem key={roast._id}>
            <RoastCardProfile
              id={roast._id}
              onDelete={() => handleDelete(roast._id)}
              name={roast.name}
              roaster={roast.roaster}
              score={roast.score.map(({ rating }) => rating)}
            />
          </StyledItem>
        ))}
      </StyledList>
      {data.roasts.length === 0 && (
        <StyledMinorHeadingProfile>
          You have no roasts marked yet!
        </StyledMinorHeadingProfile>
      )}
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
