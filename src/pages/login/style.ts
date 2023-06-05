import styled from "styled-components";

export const LoginMain = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.25rem;
  div {
    width: 90%;
    border-radius: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  form {
    background-color: var(--color-form);
    border: 0.125rem solid var(--color-border-form);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: initial;
    width: 90%;
    height: 60vh;
    border-radius: 0.375rem;
    padding: 0rem 1.25rem;
  }
  form > h2 {
    color: var(--color-text);
    font-size: 2.25rem;
    display: flex;
    justify-content: center;
    margin-bottom: 0.625rem;
  }
  form > label {
    color: var(--color-text);
    padding: 0.625rem 0;
  }
  form > input {
    width: 100%;
    height: 5vh;
    border: none;
    border-radius: 0.5rem;
  }
  input::placeholder {
    margin-left: 1.25rem;
  }
  .divButtonsForm {
    width: 100%;
    height: 15vh;
    display: flex;
    flex-direction: column;
    gap: 0.9375rem;
    margin-top: 3vh;
  }
  button {
    width: 100%;
    height: 5vh;
    background-color: var(--color-button);
    color: var(--color-text);
    border: none;
    font-size: 1.2125rem;
    :hover {
      opacity: 0.8;
    }
  }
  p {
    color: var(--color-text);
  }
  a {
    width: 100%;
    height: 5vh;
    background-color: var(--color-button);
    color: var(--color-text);
    border: none;
    text-decoration: none;
    color: var(--color-text);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    :hover {
      opacity: 0.8;
    }
  }
  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;
    div {
      width: 90%;
      border-radius: 1.25rem;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    form {
      width: 50vw;
      max-width: 50vw;
      height: 55vh;
      display: flex;
      justify-content: center;
      align-items: initial;
    }
    form > label {
      color: var(--color-text);
    }
    .divButtonsForm {
      width: 100%;
      height: 15vh;
      display: flex;
      flex-direction: column;
    }
  }
`;
