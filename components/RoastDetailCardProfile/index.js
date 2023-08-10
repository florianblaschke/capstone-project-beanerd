import defaultPic from "@/public/default.jpg";
import { useRouter } from "next/router";
import {
  StyDiv,
  StyImage,
  StyDivText,
  StyHTwo,
  StyP,
  StyRating,
  StyNumberRating,
  StyButtonDiv,
  StyButton,
} from "../RoastDetailCard";

export default function RoastDetailCardProfile({
  name,
  roaster,
  arabica,
  robusta,
  level,
  provenance,
  score,
}) {
  const router = useRouter();
  console.log(router);
  return (
    <StyDiv>
      <StyImage
        priority={true}
        src={defaultPic}
        width={""}
        height={""}
        alt="Coffee-Package"
      ></StyImage>
      <StyDivText>
        <StyHTwo>{name}</StyHTwo>
        <StyP>{roaster}</StyP>
        <StyHTwo>Arabica / Robusta</StyHTwo>
        <StyP>
          {arabica} / {robusta}
        </StyP>
        <StyHTwo>Röstgrad</StyHTwo>
        <StyP>{level}</StyP>
        <StyHTwo>Herkunft</StyHTwo>
        <StyP>{provenance}</StyP>
        <StyRating>
          Bewertung:{" "}
          {score.length > 0
            ? Math.floor(
                score.reduce((acc, curr) => acc + curr, 0) / score.length
              )
            : 0}
          /100
        </StyRating>
        <StyNumberRating>
          {score.length} {score.length === 1 ? "Bewertung" : "Bewertungen"}
        </StyNumberRating>
      </StyDivText>
      <StyButtonDiv>
        <StyButton onClick={() => router.push("/login/profile")}>
          Zurück
        </StyButton>
      </StyButtonDiv>
    </StyDiv>
  );
}
