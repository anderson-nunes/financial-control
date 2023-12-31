import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  /* width: 100vw;
  height: 100vh; */
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme.modal};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h2 {
    font-size: 1.6rem;
    color: ${(props) => props.theme.text};
  }

  @media (max-width: 769px) {
    min-width: 18rem;
    border-radius: 18px 18px;
    /* top: 20%;
    left: 0;
    transform: none;
    bottom: 0;
    margin: 0.3rem;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center; */
  }

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 769px) {
      gap: 0.75rem;
    }

    input {
      border-radius: 6px;
      border: 0;
      background: ${(props) => props.theme.table};
      color: ${(props) => props.theme.text};
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme["gray-500"]};
      }
    }

    button[type="submit"] {
      height: 58px;
      border: 0;
      background: ${(props) => props.theme["green-500"]};
      color: #ffff;
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;
      cursor: pointer;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${(props) => props.theme["green-700"]};
        transition: background-color 0.2s;
      }
      @media (max-width: 769px) {
        height: 40px;
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme["gray-500"]};
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0%.5rem;
`;

interface TransactionTypeButtonProps {
  variant: "income" | "outcome";
}

export const Btn = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  background: ${(props) => props.theme["gray-700"]};
  color: #ffff;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;

  svg {
    color: ${(props) =>
      props.variant === "income"
        ? props.theme["green-300"]
        : props.theme["red-300"]};
  }

  &[data-state="checked"] {
    color: #ffff;
    background: ${(props) =>
      props.variant === "income"
        ? props.theme["green-500"]
        : props.theme["red-500"]};
  }

  svg {
    color: ${(props) => props.theme.text};
  }
`;
