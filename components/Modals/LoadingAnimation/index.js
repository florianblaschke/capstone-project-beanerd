import styled, { keyframes } from "styled-components";
import Image from "next/image";
import singleBean from "@/public/singleBean.svg";

export default function LoadingAnimation() {
  return (
    <WrapperDiv>
      <MovingDiv>
        <Bean src={singleBean} height={""} width={""} alt={"a coffee bean"} />
      </MovingDiv>
      <TextWrapper>
        <Letter>L</Letter>
        <LetterO>O</LetterO>
        <LetterA>A</LetterA>
        <LetterD>D</LetterD>
        <LetterI>I</LetterI>
        <LetterN>N</LetterN>
        <LetterG>G</LetterG>
      </TextWrapper>
    </WrapperDiv>
  );
}

const drop = keyframes`
0% {
  transform: translateY(0px);
  opacity: 1;
}
100% {
  transform: translateY(300px);
  opacity: 0;
}`;

const translateToSide = keyframes`
0%{
  transform: translateX(0px) translateY(0px);
}
8% {
  transform: translateX(35px) translateY(32px);
}
15%{
  transform: translateX(70px) translateY(20px);
}
23%{
  transform: translateX(105px) translateY(18px);
}
30%{
  transform: translateX(150px) translateY(2px);
}
36%{
  transform: translateX(190px) translateY(30px);
}
45%{
  transform: translateX(210px) translateY(20px);
}
60%{
  transform: translateX(300px);
}
75%{
  transform: translateX(240px) translateY(20px);
}
84%{
  transform: translateX(200px) translateY(20px);
}
92%{
  transform: translateX(180px) translateY(20px);
}
100%{
  transform: translateX(340px) translateY(-10px);
}
`;

const rotate = keyframes`
0%{
  transform: rotate(0deg);
}
8%{
  transform: rotate(95deg)
}
15%{
  transform: rotate(170deg)
}
23%{
  transform: rotate(275deg)
}
30%{
  transform: rotate(360deg)
}
36%{
  transform: rotate(450deg)
}
45%{
  transform: rotate(540deg)
}
60%{
  transform: rotate(720deg)
}
75%{
  transform: rotate(630deg)
}
84%{
  transform: rotate(580deg)
}
92%{
  transform: rotate(520deg)
}
100%{
  transform: rotate(900deg)
}
`;

const WrapperDiv = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  height: 120vh;
  width: 100vw;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(96, 57, 47, 0.8);
`;

const MovingDiv = styled.div`
  height: 120px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${translateToSide} 5s linear forwards;
  align-self: flex-start;
  margin: 0px;
  padding: 0px;c1
`;

const Bean = styled(Image)`
  height: 310px;
  width: 310px;
  animation: ${rotate} 5s linear forwards;
`;

const Letter = styled.span`
  font-weight: 500;
  font-size: 4.5rem;
  letter-spacing: 5px;
  animation: ${drop} 1s forwards;
`;

const LetterO = styled(Letter)`
  animation-delay: 0.7s;
`;

const LetterA = styled(Letter)`
  animation-delay: 1.4s;
`;

const LetterD = styled(Letter)`
  animation-delay: 2.1s;
`;

const LetterI = styled(Letter)`
  animation-delay: 4.5s;
`;

const LetterN = styled(Letter)`
  animation-delay: 4.7s;
`;

const LetterG = styled(Letter)`
  animation-delay: 4.9s;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;
