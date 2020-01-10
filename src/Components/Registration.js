import React from 'react';
import { Link } from 'react-router-dom';
import { withFormik, Form } from 'formik';
import * as Yup from 'yup';
import { FlexContainer, Button, MainDiv, ErrorMessage, Label, Input, Title, SubTitle, NavLink } from '../Styles/Styles'

function Registration({ errors, touched }) {

    return (
        <MainDiv>
            <Title>New User? Register with your info here!</Title>
            <Form>
                <FlexContainer>
                    <Label htmlFor='username'>Username:</Label>
                    <Input type='text' name='username' />
                    {touched.username && <ErrorMessage>{errors.username}</ErrorMessage>}

                    <Label htmlFor='password'>Password:</Label>
                    <Input type='password' name='password' />
                    {touched.password && <ErrorMessage>{errors.password}</ErrorMessage>}

                    <Label htmlFor='email'>Email:</Label>
                    <Input type='email' name='email' />
                    {touched.email && <ErrorMessage>{errors.email}</ErrorMessage>}

                    <Label htmlFor='city'>City:</Label>
                    <Input type='text' name='city' />
                    {touched.city && <ErrorMessage>{errors.city}</ErrorMessage>}

                    <Label htmlFor='state'>State:</Label>
                    <Input type='text' name='state' />
                    {touched.state && <ErrorMessage>{errors.state}</ErrorMessage>}

                    <Button type='submit'>Submit</Button>
                </FlexContainer>
            </Form>
            <SubTitle>Already registered? Click <Link to='/'><NavLink>here</NavLink></Link> to login</SubTitle>
        </MainDiv>
    );
}

const FormikRegistration = withFormik({
    mapPropsToValues({ username, password, email, city, state }) {
        return {
            username: username || '',
            password: password || '',
            email: email || '',
            city: city || '',
            state: state || ''
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string()
            .min(6, 'username must be 6 characters or longer')
            .required('Please enter a username'),

        password: Yup.string()
            .min(8, 'Password must include at least 8 characters')
            .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must include 1 special character')
            .required('Please enter password'),

        email: Yup.string()
            .email('must include @')
            .required('Email is required'),

        city: Yup.string(),

        state: Yup.string()
            .max(2, "Please enter the 2 letter state code")

    }),

    handleSubmit(values, { resetForm }) {
        console.log(values);
        resetForm();

    }
})(Registration)

export default FormikRegistration;