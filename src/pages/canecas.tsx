import { CanecasComponents } from "../components/canecasComponents";
import { IconMug } from "../components/iconMug";
import { useState } from "react";

export const Canecas = () => {
  const [indexNow, setIndexNow] = useState<number>(0);
  const [ativado, setAtivado] = useState(true);

  return (
    <>
      <CanecasComponents
        indexNow={indexNow}
        setIndexNow={setIndexNow}
        ativado={ativado}
        setAtivado={setAtivado}
      />
      <IconMug
        indexNow={indexNow}
        setIndexNow={setIndexNow}
        ativado={ativado}
        setAtivado={setAtivado}
      />
    </>
  );
};
