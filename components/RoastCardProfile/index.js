import defaultPic from "@/public/default.jpg";
import {
  StyDiv,
  StyImage,
  StyDivText,
  StyHTwo,
  StyP,
  StyRating,
  StyNumberRating,
} from "../RoastCard";

export default function RoastCardProfile({ name, roaster, score }) {
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
    </StyDiv>
  );
}
