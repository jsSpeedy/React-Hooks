import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        background-color: #333;
        color: #fff;
    }

    a {
      text-decoration: none;
    }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}