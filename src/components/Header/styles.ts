import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.background_header};
  padding: 2.5rem 0 7.5rem;

  /* svg {
    ;
  } */

  @media (max-width: 769px) {
    width: 100%;
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 769px) {
    img {
      width: 10rem;
    }
  }

  @media (max-width: 425px) {
    img {
      width: 8rem;
    }
  }
`;

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme.text};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme["green-700"]};
    transition: background-color 0.2s;
  }

  @media (max-width: 769px) {
    height: 45px;
  }

  @media (max-width: 425px) {
    height: 40px;
  }
`;
