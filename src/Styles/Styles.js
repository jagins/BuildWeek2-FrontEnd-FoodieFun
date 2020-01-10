import styled from 'styled-components';
import {Field} from 'formik';

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
`;

export const Button = styled.button`
    width: 50%;
    font-size: 1.5rem;
    border-radius: 5px;
    &:hover
    {
        background: gold;
    }

    margin: 0 auto;
    margin-top: 5%;
    margin-bottom: 3%;
`;

export const MainDiv = styled.div`
    margin: 5%;
`

export const ErrorMessage = styled.p`
    color: red;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 2%;
    margin-top: 5%;
    text-align: left;
    margin-left: 25%;
    color: white;
`;

export const Input = styled(Field)`
   width: 50%;
   line-height: 30px;
   margin-left: 25%;
   font-size: 1.5rem;
`;

export const Title = styled.h1`
    font-size: 2rem;
    color: white;
`;

export const SubTitle = styled.p`
    color: white;
    font-size: 1.5rem;
`;

export const NavLink = styled.span`
    color: lightblue;
`;