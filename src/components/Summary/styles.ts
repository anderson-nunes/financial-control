import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;

  @media (max-width: 769px) {
    overflow: auto;
  }
`;

interface SummaryCardProps {
  variant?: "green";
  text?: "white";
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${(props) => props.theme.summary};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme.text};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    color: ${(props) => props.theme.text};

    @media (max-width: 769px) {
      width: 10rem;
      font-size: 1.5rem;
    }
  }

  ${(props) =>
    props.variant === "green" &&
    css`
      background: ${props.theme["green-700"]};
    `}

  span, strong {
    ${(props) =>
      props.text === "white" &&
      css`
        color: ${props.theme.white};
      `}
  }
`;
