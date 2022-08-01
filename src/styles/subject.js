import styled from "styled-components";

export const SubjectContainer = styled.div`
    padding: 10px;
    margin: 5px 0px;
    cursor: pointer;
    transition: background-color 0.2s ease-out;
    border-radius: 10px;
    border: 1px solid ${props => props.color};
    background: #303030;
    color: ${props => props.color};

    h4 {
        word-break: break-all;
        font-size: 16px;
        color: ${props => props.color};
    }

    span {
        word-break: break-all;
    }
`;