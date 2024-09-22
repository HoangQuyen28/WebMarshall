import styled from "styled-components";

export const Section = styled.section`
    user-select: none;
    outline: none;
    background-color:white;
    border-radius:20px;
    display:flex;
    margin-top:100px;

`
export const Content =styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:30%;
    margin-left:100px;
    h1{
        font-size:60px;
        font-weight:bold;
        color:black;
    }
    p{
        font-size:16px;
        color:black;
    }
`

export const Img = styled.div`
    background-image:url('/img/m1.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height:500px;
    width:50%
`

