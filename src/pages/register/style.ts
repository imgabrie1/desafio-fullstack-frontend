import styled from "styled-components";

export const RegisterMain = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.25rem;
  div {
    display: flex;
    flex-direction: column;
    height: 15%;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
  }
  form {
    background-color: var(--color-form);
    border: 0.125rem solid var(--color-border-form);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 60vh;
    border-radius: 0.5rem;
    padding: 1.25rem;
  }
  form > h2 {
    color: var(--color-text);
    font-size: 2.625rem;
    display: flex;
    justify-content: center;
    margin-bottom: 1.25rem;
  }
  form > label {
    color: var(--color-text);
    padding: 0.625rem 0;
  }
  form > input {
    width: 100%;
    height: 3rem;
    border: 0.0625rem solid var(--color-border-button);
    border-radius: 0.5rem;
  }
  input::placeholder {
    margin-left: 1.25rem;
  }
  button {
    width: 100%;
    height: 3rem;
    margin: 1.25rem 0;
    background-color: var(--color-button);
    border: 0.0625rem solid var(--color-border-button);
    border-radius: 0.5rem;
    color: var(--color-text);
    :hover {
      opacity: 0.8;
    }
  }
  p {
    color: var(--color-text);
  }
  a {
    text-decoration: none;
    color: var(--color-text);
    padding-top: 0.375rem;
    background-color: var(--color-button);
    border-radius: 0.5rem;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5rem;
    :hover {
      opacity: 0.8;
    }
  }
  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;
    form {
      width: 50vw;
      max-width: 50vw;
      height: 90vh;
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
