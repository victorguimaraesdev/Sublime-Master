import styled from "styled-components";
import { MugList } from "../utils/canecasList";

const IconMugContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 20px;
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
const IconMugItem = styled.img`
  width: auto;
  height: 100px;
`;
export const IconMug = () => {
  return (
    <IconMugContainer>
      <IconMugContainerItem>
        {MugList.map((mug, i) => (
          <IconMugItem src={mug.mug} key={i} />
        ))}
      </IconMugContainerItem>
    </IconMugContainer>
  );
};
