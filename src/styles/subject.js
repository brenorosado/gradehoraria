import styled from "styled-components";

export const SubjectContainer = styled.div`
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.2s ease-out;
    border-radius: 10px;
    border: 1px solid ${props => props.color};
    background: #303030;
    color: ${props => props.color};
    width: 100%;
    overflow: hidden;

    h4 {
        color: ${props => props.color};
    }
`;