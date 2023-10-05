import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  width: 100%;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme.search};
    color: ${(props) => props.theme.text};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme["green-300"]};
    color: ${(props) => props.theme["green-300"]};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:not(:disabled):hover {
      background: ${(props) => props.theme["green-500"]};
      border-color: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme.text};
      transition:
        background-color overflow 0.2s,
        color 0.2s,
        border-color 0.2s;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    @media (max-width: 769px) {
      span {
        display: none;
      }
    }
  }
`;
