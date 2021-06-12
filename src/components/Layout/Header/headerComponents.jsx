import styled from 'styled-components'

export const Nav = styled.nav`
display: flex;
justify-content:space-between;
color: black;
padding: 0 1rem;
box-shadow: rgb(253 253 253 / 69%) 0px 21px 30px -10px, rgb(158 158 158 / 73%) 0px 14px 20px -18px;
`;

export const Links = styled.div`
    display: flex;
    align-items: center;

    ul {
        display: flex;
        flex-direction: row;
    }

    li {
        margin: 0.5rem 0.5rem;
        list-style: none;
        cursor: pointer;
    }

    img {
        width: 24%;
    }
`;

export const Cart = styled.div`
    display: flex;
    align-items: center;
`;