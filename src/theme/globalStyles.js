import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        scrollbar-width: thin;
        scrollbar-color: blue orange;
      }
      
      /* Works on Chrome, Edge, and Safari */
      *::-webkit-scrollbar {
        width: 12px;
      }
      
      *::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.gradientBackground};
      }
      
      *::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.gradientBackground};

        border-radius: 20px;
        border: 1px solid  ${({ theme }) => theme.border};
      }
      
body{
    background: ${({ theme }) => theme.body};

    transition: all .1s linear;
}
`
    ;
