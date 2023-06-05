import styled from "styled-components";

interface iStyledModalProps {
  maxWidth?: number;
}

export const StyledModal = styled.div<iStyledModalProps>`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  inset: 0;
  z-index: 1001;
  .modal-box {
    position: relative;
    z-index: 1002;
    width: 60%;
    max-height: 43.75rem;
    max-width: 500rem;
    padding: 1.25rem;
    background-color: var(--color-main);
    border-radius: 0.5rem;
    border: none;
  }
  .modal-close {
    cursor: pointer;
    position: absolute;
    top: 2%;
    left: 93%;
    transition: all 0.3s linear 1s;
    background-color: var(--color-button);
    color: var(--color-text);
    border: medium none;
    border-radius: 50%;
    display: flex;
    padding: 0.1875rem;
    -moz-box-pack: center;
    justify-content: center;
    -moz-box-align: center;
    align-items: center;
    height: 1.875rem;
    width: 1.875rem;
    :hover {
      opacity: 0.8;
    }
  }
`;
