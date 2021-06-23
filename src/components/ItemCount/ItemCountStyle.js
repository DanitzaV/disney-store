import styled from 'styled-components'

export const ItemCountContainer = styled.div`
    width: auto;
    margin: 1rem 0;
    display: flex;
    
    .btn-actions{
        display: flex;
        width: 40%;
        justify-content: space-between;
        padding-right: 2%;
        button {
            background-color: transparent;
            vertical-align: middle;
            align-self: center;
            border-radius: 4px;
            border: 1px solid #d8d8d8;
            width:35%;
            height: 96%;
            transition: all 0.2s ease-in-out 0s;
            font-size: 1.15rem;
            cursor: pointer;
        }
        button:hover {
            background: rgb(198, 198, 198);
        }
        p {
            margin: 0;
            align-self: center;
        }
    }

    .btn-agregar {
        width: 60%;
        background-color: black;
        color: white;
        font-size: 15px;
        padding: 4px 24px;
        font-family: Avenir-Heavy, sans-serif;
        border-radius: 4px;
        transition: all 0.2s ease-in-out 0s;
        border: 1px solid #d8d8d8;
        cursor: pointer;
    }

    .btn-agregar:hover, .btn-agregar:focus {
        background: rgb(31 31 31);
    }
`;