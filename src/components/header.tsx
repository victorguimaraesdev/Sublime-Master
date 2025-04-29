import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  background: transparent;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  transition: 1s;

  @media (max-width: 768px) {
    display: flex;
    top: 20px;
    flex-direction: column;
    height: auto;
    padding: 20px 5%;
    gap: 2px;
  }
`;

const Logo = styled.img`
  height: 80px;

  @media (max-width: 768px) {
    display: none;
    height: 60px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;

  @media (max-width: 768px) {
    gap: 40px;
  }
`;

const Icon = styled.img`
  width: 45px;
  height: 45px;
  transition: 0.5s;

  &:hover {
    scale: 1.2;
    cursor: pointer;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

const BuyContainer = styled.button`
  background-color: var(--primary-color);
  color: var(--secondary-color);
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  transition: 0.3s;
  border: none;

  &:hover {
    background-color: #e9c513; /* tom mais escuro para hover */
  }

  @media (max-width: 768px) {
    display: none;
    font-size: 0.9rem;
    padding: 8px 16px;
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="assets/logo/Logo.png" />
      <IconContainer>
        {/* <Icon src="assets/iconesHeader/iconeHome.png" /> */}
        <Icon src="assets/iconesHeader/iconeCaneca.png" />
        <Icon src="assets/iconesHeader/iconeCamiseta.png" />
        <Icon src="assets/iconesHeader/iconePresente.png" />
      </IconContainer>
      <BuyContainer>ENCOMENDAS</BuyContainer>
    </HeaderContainer>
  );
};
