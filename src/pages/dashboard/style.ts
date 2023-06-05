import styled from "styled-components";
export const ContainerMainDiv = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.09) 0rem .125rem .0625rem, rgba(0, 0, 0, 0.09) 0rem .25rem .125rem,
    rgba(0, 0, 0, 0.09) 0rem .5rem .25rem, rgba(0, 0, 0, 0.09) 0rem 1rem .5rem,
    rgba(0, 0, 0, 0.09) 0rem 2rem 1rem;
`;
export const NavBar = styled.nav`
  width: 56.25rem;
  height: 4.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1.25rem;
  p {
    color: var(--color-text);
    word-break: break-all;
    hyphens: auto;
    margin-top: 1.875rem;
    padding-bottom: 1.875rem;
  }

  .container-nav-div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.25rem;
    font-size: 5vh;
    a {
      margin-top: 0.5rem;
      color: var(--color-button);
      :hover {
        opacity: 0.7;
      }
    }
  }

  .UserSvg {
    color: var(--color-button);
    font-size: 5vh;
    cursor: pointer;
    :hover {
      opacity: 0.7;
    }
  }
`;

export const DashMain = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1.25rem;
  .title-add {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      color: var(--color-text);
      font-size: 1.5rem;
    }
    .add-new {
      color: var(--color-text);
      font-size: 2.875rem;
      cursor: pointer;
      :hover {
        color: var(--color-button);
      }
    }
  }
  section {
    width: 100%;
    max-width: 56.25rem;
    height: 100vh;
    padding: 0 .625rem;
    margin-top: 6.25rem;
    p:nth-child(2) {
      color: var(--color-text);
      opacity: 0.7;
    }
    ul {
      height: 31.25rem;
      overflow-x: scroll;
      margin: 4.375rem 0rem;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      align-items: center;
      flex-wrap: wrap;
    }
  }
`;
export const ContactDiv = styled.li`
  width: 25rem;
  list-style: none;
  padding: 1.25rem;
  cursor: pointer;

  position: relative;
  display: inline-block;
  :hover {
    box-shadow: 1.25rem 1.375rem 0rem -0.8125rem var(--color-button);
    transition: all 0.2s ease-in 0s;
  }
  p {
    color: var(--color-text);
    font-size: 1.25rem;
    line-height: 150%;
  }
  button {
    padding: 0.3125rem 0.625rem;
    background-color: transparent;
    border: 0.0625rem solid var(--color-button);
    border-radius: 0.5rem;
    color: var(--color-text);
    font-size: 1.125rem;
    margin: 1.875rem 0.625rem 0 0;
    :hover {
      background-color: var(--color-main);
      border: .0625rem solid var(--color-main);
    }
  }
  button:nth-of-type(1) {
    background-color: var(--color-button);
  }
  .edit-form {
    margin-top: 2.5rem;
    height: 25rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    label {
      font-weight: 600;
      font-size: 1.125rem;
      color: var(--color-text);
    }
    input {
      width: 100%;
      height: 3rem;
      border-radius: .5rem;
      padding-left: 10rem;
      color: var(--color-main);
      background-color: var(--color-button);
      border: .0625rem solid var(--color-main);
      border-radius: var(--radius);
      font-size: var(--text1);
      :hover {
        background-color: var(--color-button);
        border: .0625rem solid var(--color-main);
      }
      :focus {
        background-color: var(--color-button);
      }
    }
    button {
      width: 100%;
      height: 3rem;
      background-color: var(--color-form);
      border: .0625rem solid var(--color-main);
      border-radius: var(--radius);
      margin-top: 1.25rem;
      color: var(--color-text);
      font-size: var(--tile1);
      :hover {
        background-color: var(--color-main);
        border: .0625rem solid var(--color-main);
      }
      :focus {
        background-color: var(--color-form);
      }
    }
  }
`;
export const ModalContainer = styled.div`
    height: 100%;
    .add-contact {
        height: 50rem;
        display: flex;
        flex-direction: column;
        gap: 20rem;
        label {
            font-weight: 600;
            font-size: 1.125rem;
            color: var(--color-text);
        }
        input {
            width: 100%;
            height: 3rem;
            border-radius: .5rem;
            padding-left: .625rem;
            color: var(--color-main);
            background-color: var(--color-form);
            border: none
            border-radius: var(--radius);
            font-size: var(--text1);
            :hover {
                background-color: var(--color-text);
                opacity: 0.1;
            }
            :focus {
                background-color: var(--color-text);
                opacity: 0.5;
            }
        }
        button {
            width: 100%;
            height: 3rem;
            background-color: var(--color-button);
            border-radius: .5rem;
            gap: .125rem;
            margin-top: 1.25rem;
            color: var(--color-text);
            font-size: var(--tile1);
            :hover {
                opacity: 0.7;
            }
            :focus {
                background-color: transparent;
            }
        }
        button:nth-last-child(2){
            background-color: transparent;
            border: .125rem solid var(--color-button);
            border-radius: .5rem;
        }
    }
    .div-UserSvg {
        display: flex;
        align-items: center;
    }

    .cancel-button {
        color: var(--color-text);
        font-size: 2.375rem;
        margin-right: 2.5rem;
        cursor: pointer;
        :hover {
            background-color: var(--color-button);
            border: .125rem solid var(--color-main);
            border-radius: .5rem;
        }
    }
    .profile {
        list-style: none;
        font-size: 1.875rem;
        margin-bottom: 1.25rem;
    }
    .really {
        display: flex;
        width: 100%;
        height: 20rem;
        align-items: center;
        justify-content: space-around;
        .yes {
            padding: .3125rem .625rem;
            background-color: var(--color-button);
            border: .0625rem solid var(--color-main);
            border-radius: .5rem;
            color: white;
            font-size: 1.5rem;
            :hover {
                opacity: 0.7;
            }
        }
    }
    .cancel {
        padding: .3125rem .625rem;
        background-color: var(--color-form);
        border: .0625rem solid var(--color-main);
        border-radius: .5rem;
        color: var(--color-text);
        font-size: 1.5rem;
        margin-right: .3125rem;
        :hover {
            background-color: var(--color-main);
            border: .0625rem solid var(--color-main);
        }
    }
`;
