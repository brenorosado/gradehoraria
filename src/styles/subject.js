import styled from "styled-components";

export const SubjectContainer = styled.div`
    padding: 10px;
    border: 1px solid black;
    margin: 5px 0px;
    cursor: pointer;
    background-color: ${props => props.color};
    transition: background-color 0.2s ease-out;

    h4 {
        word-break: break-all;
        font-size: 16px;
    }

    span {
        word-break: break-all;
    }
`;