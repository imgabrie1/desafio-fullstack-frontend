import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {
    --color-main: #454d6b;
    --color-text: #fff;
    --color-button: #FF4D61;
    --color-form: #353b50;
    --color-border-form: #7d7d7d;
    --color-border-button: #7d7d7d;
}

  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }

  body,html{
    width: 100vw;
    height: 100vh;

  }

  body {
    background-color: var(--color-main);
    color: var(--color-gray-300);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;

  }

  body, input, button, textarea {
    font-size: 1.6rem;
  }

  button {
    cursor: pointer;
    padding: .3125rem .625rem;
    background-color: var(--color-button);
    border: .0625rem solid var(--color-border-button);
    border-radius: .5rem;
    color: var(--color-text);
    font-size: 1.125rem;
    border: none;
  }


`;
