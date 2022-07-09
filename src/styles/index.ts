import styled from "styled-components";
import background from "../data/fondo.jpg";

export const ContainerJournal = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`;

export const ContainerAuth = styled.div`
    width: 80%;
    max-width: 500px;
    margin: auto;
    text-align: center;
`;

export const ContainerList = styled.ul`
    flex: 1 1 auto;
    list-style: none;
    overflow-y: scroll;
    padding: 0;
    margin-left: 0;
    margin-right: 0;
`;

export const Background = styled.div`
    width: 100%;
    height: 100vh;
    background: url(${background});
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    background-blend-mode: soft-light;
    background-color: rgba(0, 0, 0, 0.8);
    overflow: hidden;
`;

export const Description = styled.p`
    font-size: .9em;
    color: gray;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

interface SubMenuType {
    active?: boolean; 
}

export const Menu = styled.nav<SubMenuType>`
    background-color: #101010;
    height: 100vh;
    min-width: 300px;
    padding: 1em 1em 0;
    display: flex;
    flex-direction: column;

    @media (max-width: 720px) {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        display: ${({active}) => active && 'none'};
    }
`;