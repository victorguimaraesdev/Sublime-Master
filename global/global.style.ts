import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        
    }
    :root {
        --primary-color: #d4b521;
        --secondary-color:rgb(255, 255, 255);
        --tertiary-color: #2a2a2a;
    }
    html, body, #root {
        height: 100%;
    }
    body {
        background: radial-gradient(circle,rgba(18, 172, 219, 1) 0%, rgba(0, 95, 163, 1) 100%);
        color: var(--primary-color);
    }
    button {
        cursor: pointer;
        border: none;
        background: none;
    }
`;
