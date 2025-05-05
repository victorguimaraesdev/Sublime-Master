// import { useState } from "react";
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
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
  position: relative;
  /* border: 2px solid red; */
  a {
    width: 40%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    padding: 20px;
    height: 580px;
  }
`;

const Caneca = styled.img<{ $ativado: boolean; $delay?: string }>`
  display: ${(props) => (props.$ativado ? "flex" : "none")};
  width: 50%;
  max-width: 600px;
  height: auto;
  opacity: ${(props) => (props.$ativado ? 1 : 0)};
  animation: ${(props) => (props.$ativado ? fadeIn : "none")} 1s ease-in-out;
  animation-delay: ${(props) => props.$delay || "0s"};
  animation-fill-mode: both;

  @media (max-width: 768px) {
    width: 90%;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
  }
`;

const TextContainer = styled.div<{ $ativado: boolean }>`
  display: ${(props) => (props.$ativado ? "flex" : "none")};
  flex-direction: column;
  width: 500px;
  height: 420px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
    text-align: justify;
    padding: 0 0px;
  }
`;

const Title = styled.h1<{ $ativado: boolean; $delay?: string }>`
  font-size: 5rem;
  font-weight: bold;
  font-family: "League Gothic", sans-serif;
  opacity: ${(props) => (props.$ativado ? 1 : 0)};
  animation: ${(props) => (props.$ativado ? fadeIn : "none")} 1s ease-in-out;
  animation-delay: ${(props) => props.$delay || "0s"};
  animation-fill-mode: both;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 10px;
    text-align: center;
  }
`;

const Text = styled.p<{ $ativado: boolean; $delay?: string }>`
  max-width: 460px;
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
    max-width: 100%;
    text-align: center;
    margin-bottom: 20px;
    padding: 0 10px;
  }
`;

const BuyButton = styled.button<{ $ativado?: boolean; $delay?: string }>`
  display: ${(props) => (props.$ativado ? "flex" : "none")};
  width: 200px;
  height: 40px;
  justify-content: center;
  align-items: center;
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
    font-size: 1rem;
    width: 90%;
    height: 45px;
    margin-top: 10px;
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
interface CanecasProps {
  indexNow: number;
  setIndexNow: (index: number) => void;
  ativado: boolean;
  setAtivado: (ativado: boolean) => void;
}
export const CanecasComponents = ({
  indexNow,
  setIndexNow,
  ativado,
  setAtivado,
}: CanecasProps) => {
  const trocarItem = (novoIndex: number) => {
    setAtivado(false);
    setTimeout(() => {
      setIndexNow(novoIndex);
      setAtivado(true);
    }, 100);
  };

  const mudarDirecao = (direcao: "Anterior" | "Próximo") => {
    const novoIndex =
      direcao === "Anterior"
        ? indexNow === 0
          ? MugList.length - 1
          : indexNow - 1
        : indexNow === MugList.length - 1
        ? 0
        : indexNow + 1;

    trocarItem(novoIndex);
  };
  const mug = MugList[indexNow];

  return (
    <MugContainer>
      <ArrowLeft onClick={() => mudarDirecao("Anterior")} />

      <Caneca src={mug.mug} $ativado={ativado} $delay="0s" />

      <TextContainer $ativado={ativado}>
        <Title $ativado={ativado} $delay="0.2s">
          {mug.title}
        </Title>
        <Text $ativado={ativado} $delay="0.4s">
          {mug.text}
        </Text>
        <a href="https://wa.me/5515998522101" target="_blank">
          <BuyButton $ativado={ativado} $delay="0.6s">
            ENCOMENDE
          </BuyButton>
        </a>
      </TextContainer>
      <ArrowRight onClick={() => mudarDirecao("Próximo")} />
    </MugContainer>
  );
};
