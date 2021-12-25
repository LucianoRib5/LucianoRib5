import styled from "styled-components"

export const ContainerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 5rem;
    border: none;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
    min-width: 500px;
`
export const ContainerLista = styled.div`
    display: flex;
`
export const Li = styled.li`
    list-style-type: none;
    padding: 0 1rem;
    cursor: pointer;
    font-weight: bold;

    :hover{
        color: #FF5722;
    }
`
export const Logo = styled.h2`    
    :hover{
        color: #FF5722;
        cursor: pointer;
    }
`