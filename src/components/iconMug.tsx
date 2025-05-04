import styled from "styled-components";
import { MugList } from "../utils/canecasList";

const IconMugContainer = styled.div`
  display: flex;
  /* position: fixed; */
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 10px;
  /* border: 2px solid red; */
`;
const IconMugContainerItem = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 520px;
  height: auto;
  /* border: 2px solid red; */
`;
const IconMugItem = styled.img<{ $ativado: boolean }>`
  width: auto;
  height: 100px;
  transition: 2s;
  scale: ${(props) => (props.$ativado ? "1.3" : "1")};
  &:hover {
    cursor: pointer;
  }
`;
interface CanecasProps {
  indexNow: number;
  setIndexNow: (index: number) => void;
  ativado: boolean;
  setAtivado: (ativado: boolean) => void;
}
export const IconMug = ({
  setIndexNow,
  indexNow,
  setAtivado,
}: CanecasProps) => {
  const trocarItem = (novoIndex: number) => {
    setAtivado(false);
    setTimeout(() => {
      setIndexNow(novoIndex);
      setAtivado(true);
    }, 100);
  };
  return (
    <IconMugContainer>
      <IconMugContainerItem>
        {MugList.map((mug, i) => (
          <IconMugItem
            src={mug.mug}
            key={i}
            $ativado={i === indexNow}
            onClick={() => trocarItem(i)}
          />
        ))}
      </IconMugContainerItem>
    </IconMugContainer>
  );
};
