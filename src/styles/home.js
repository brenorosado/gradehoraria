import styled from "styled-components";
import media from "./media";

export const HomeMain = styled.main`
    padding: 20px;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h1 {
        text-align: center;
        margin-bottom: 30px;
        font-size: 22px;

        ${media.tablet`
            font-size: 30px;
        `}
    }

    section {
        padding-top: 30px ;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 50%);
        grid-row-gap: 20px;
        grid-column-gap: 5px;
        justify-content: center;

        ${media.tablet`
            grid-template-columns: repeat(4, 180px);
        `}

        ${media.desktop`
            grid-template-columns: repeat(5, 180px);
        `}

        ${media.widescreen`
            grid-template-columns: repeat(10, 130px);
        `}

        ${media.uhd`
            grid-template-columns: repeat(10, 180px);
        `}
    }
    }
`;