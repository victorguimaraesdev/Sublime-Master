import { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { MugList } from "../utils/canecasList";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const MugContainer = styled.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  gap: 40px;
  position: relative;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 10px;
  }
`;

const Caneca = styled.img<{ $ativado: boolean; $delay?: string }>`
  position: absolute;
  top: 90px;
  left: 250px;
  width: 100%;
  max-width: 600px;
  height: auto;
  opacity: ${(props) => (props.$ativado ? 1 : 0)};
  animation: ${(props) => (props.$ativado ? fadeIn : "none")} 1s ease-in-out;
  animation-delay: ${(props) => props.$delay || "0s"};
  animation-fill-mode: both;

  @media (max-width: 768px) {
    max-width: 90%;
    left: 35px;
    top: 40px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  min-height: 60vh;

  @media (max-width: 768px) {
    width: 100%;
    min-height: auto;
    text-align: center;
  }
`;

const Title = styled.h1<{ $ativado: boolean; $delay?: string }>`
  position: absolute;
  top: 50px;
  left: 850px;
  font-size: 5rem;
  font-weight: bold;
  font-family: "League Gothic", sans-serif;
  opacity: ${(props) => (props.$ativado ? 1 : 0)};
  animation: ${(props) => (props.$ativado ? fadeIn : "none")} 1s ease-in-out;
  animation-delay: ${(props) => props.$delay || "0s"};
  animation-fill-mode: both;

  @media (max-width: 768px) {
    font-size: 3rem;
    top: 500px;
    text-align: center;
    left: 0;
    position: static;
    margin-bottom: 20px;
  }
`;

const Text = styled.p<{ $ativado: boolean; $delay?: string }>`
  position: absolute;
  max-width: 460px;
  top: 150px;
  left: 850px;
  font-size: 1.2rem;
  font-weight: 100;
  color: var(--secondary-color);
  text-align: justify;
  opacity: ${(props) => (props.$ativado ? 1 : 0)};
  animation: ${(props) => (props.$ativado ? fadeIn : "none")} 1s ease-in-out;
  animation-delay: ${(props) => props.$delay || "0s"};
  animation-fill-mode: both;

  @media (max-width: 768px) {
    font-size: 1rem;
    position: static;
    max-width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const BuyButton = styled.button<{ $ativado?: boolean; $delay?: string }>`
  position: absolute;
  top: 330px;
  left: 850px;
  width: 200px;
  height: 40px;
  margin-top: 20px;
  font-size: 1.2rem;
  font-weight: bold;
  background: var(--primary-color);
  color: var(--secondary-color);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  opacity: ${(props) => (props.$ativado ? 1 : 0)};
  animation: ${(props) => (props.$ativado ? fadeIn : "none")} 1s ease-in-out;
  animation-delay: ${(props) => props.$delay || "0s"};
  animation-fill-mode: both;

  @media (max-width: 768px) {
    align-self: center;
    position: static;
    margin-top: 0;
    font-size: 1rem;
    width: 80%;
  }
`;

const ArrowLeft = styled(SlArrowLeft)`
  position: absolute;
  left: 8rem;
  font-size: 10rem;
  color: var(--primaria);
  cursor: pointer;
  z-index: 1;

  @media (max-width: 768px) {
    left: 1rem;
    top: 100px;
    font-size: 3rem;
  }
`;

const ArrowRight = styled(SlArrowRight)`
  position: absolute;
  right: 5rem;
  font-size: 10rem;
  color: var(--primaria);
  cursor: pointer;
  z-index: 1;

  @media (max-width: 768px) {
    right: 1rem;
    top: 100px;
    font-size: 3rem;
  }
`;

export const CanecasComponents = () => {
  const [indexNow, setIndexNow] = useState<number>(0);
  const [ativado, setAtivado] = useState(true);

  const trocarItem = (novoIndex: number) => {
    setAtivado(false);
    setTimeout(() => {
      setIndexNow(novoIndex);
      setAtivado(true);
    }, 100);
  };

  const handlePrevious = () => {
    if (indexNow > 0) trocarItem(indexNow - 1);
  };

  const handleNext = () => {
    if (indexNow < MugList.length - 1) trocarItem(indexNow + 1);
  };

  const mug = MugList[indexNow];

  return (
    <MugContainer>
      <ArrowLeft onClick={handlePrevious} />
      <ArrowRight onClick={handleNext} />

      <Caneca src={mug.mug} $ativado={ativado} $delay="0s" />

      <TextContainer>
        <Title $ativado={ativado} $delay="0.2s">
          {mug.title}
        </Title>
        <Text $ativado={ativado} $delay="0.4s">
          {mug.text}
        </Text>
        <BuyButton $ativado={ativado} $delay="0.6s">
          ENCOMENDE
        </BuyButton>
      </TextContainer>
    </MugContainer>
  );
};
