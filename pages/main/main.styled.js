import { styled } from "styled-components"

const MainStyled = styled.div`
    @import url("href=https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap rel=stylesheet");

    width: 100%;
    min-height: 100vh;
    background-color: hsl(27, 66%, 92%);
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    justify-content: center;
    align-items: center;

    * {
        font-family: "DM Sans", sans-serif;
    }
`

export default MainStyled