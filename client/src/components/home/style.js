import styled from 'styled-components';

export const HomeContainer = styled.div`
    border-radius: 5px;
    margin: 0 auto;
    font-size: 13px;
    width: 100%;
    min-height: 90%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
export const TitleDiv = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #232323;
`;
export const MenuCard = styled.div`
    width: 80%;
    margin-top: 20px;
    margin-bottom: 0;
    max-width: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 20px;
    & > a {
        text-decoration: none;
        color :black;
        width: 100%;
    }
`;
export const MenuItem = styled.a`
    border-radius: 3px;
    background-color: white;
    text-decoration: none;
    text-transform: none;
    margin: 10px;
    width: 70%;
    height: 100px;
    border: 1px solid #e2e2e2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 20px;
    margin: 0 auto;
    margin-bottom: 50px;
    box-shadow: rgb(50 50 93 / 25%) 0px 13px 27px -5px, rgb(0 0 0 / 30%) 0px 8px 16px -8px, rgb(0 0 0 / 2%) 0px -6px 16px -6px;
    &:hover {
        background-color: whitesmoke;
    }
`;

export const MenuIcon = styled.div`

    & > svg {
        font-size: 45px;
        margin-bottom: 5px;
    }
`;

export const MenuTitle = styled.div`
    font-size: 1.2em;
    font-weight: bold;
`;
