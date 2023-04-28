import styled from "styled-components";


export const Container = styled.div`
  max-width: 540px;
  padding:  20px 15px;
  margin:  auto  ;
  @media (min-width: 767.98px) {
    & {
      max-width: 720px;
    }
  }
  @media (min-width: 991.98px) {
    & {
      max-width: 960px;
         }
  }
  @media (min-width: 1199.98px) {
    & {
      max-width: 1260px;
    }
  }
  @media (min-width: 1399.98px) {
    & {
      max-width: 1320px;
    }
  }
  `;

export const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
width: 100%;
height: 100%;
background: ${({ theme }) => theme.gradientOverlay};
z-index: 200;
display: grid;
place-items: center;
  backdrop-filter: blur(5px);

`;



export const AsideContainer = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.gradientBig};
  border-radius: 20px;
  padding: 10px;
overflow: hidden;
  @media (min-width: 767.98px) {
    & {
      flex:0 0 calc(50% - 5px);
      height: fit-content;
      flex-direction: column;
    }
  }
  @media (min-width: 991.98px) {
    & {
      padding: 18px;
      flex:initial;
    
    }
  }
`;