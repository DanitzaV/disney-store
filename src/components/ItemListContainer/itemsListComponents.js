import styled from 'styled-components'

export const ItemListCard = styled.div `
    width: 289px;
    margin: 0.5rem;  
    font-family: Avenir-Heavy, sans-serif; 
    a {
        backface-visibility: hidden;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 20%) 0px 26px 30px -10px, rgb(0 0 0 / 27%) 0px 16px 10px -10px;
        cursor: pointer;
        display: block;
        position: relative;
        transform: scale(1, 1) translateZ(0px);
        transition-duration: 300ms;
        transition-property: transform, box-shadow;
        transition-timing-function: ease-out;
        -webkit-font-smoothing: subpixel-antialiased;
        background: linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42));
        border-radius: 4px;
        padding-top: 56.25%;
    }
    img {
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
    }
    a:hover, a:focus, a:focus-within {
        box-shadow: rgb(0 0 0 / 8%) 0px 40px 58px -16px, rgb(0 0 0 / 41%) 0px 30px 22px -10px;
        transform: scale(1.05, 1.05) translateZ(0px) translate3d(0px, 0px, 0px);
        transition-duration: 300ms;
        transition-property: transform, box-shadow;
        transition-timing-function: ease-out;
    }

    .name-card {

    }
`;