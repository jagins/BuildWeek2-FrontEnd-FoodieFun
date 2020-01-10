import React from 'react';
import { useHistory } from 'react-router-dom';
import { withFormik, Form } from 'formik';
import * as Yup from 'yup';
import { FlexContainer, Button, MainDiv, ErrorMessage, Label, Input, Title } from '../Styles/Styles'

function Login({ errors, touched }) {
    const history = useHistory();

    function handleClick() {
        history.push('/register');
    }
    return (
        <MainDiv>
            <Title>Already Registered? Log in here!</Title>
            <Form>
                <FlexContainer>
                    <Label htmlFor='username'>Username:</Label>
                    <Input type='text' name='username' />
                    {touched.username && <ErrorMessage>{errors.username}</ErrorMessage>}

                    <Label htmlFor='password'>Password:</Label>
                    <Input type='password' name='password' />
                    {touched.password && <ErrorMessage>{errors.password}</ErrorMessage>}
                    <Button type='submit'>Submit</Button>
                    <Button onClick={handleClick}>Sign Up</Button>
                </FlexContainer>
            </Form>
        </MainDiv>
    );
}

const FormikLogin = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || '',
            password: password || ''
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required('Please enter your username'),
        password: Yup.string().required('Please enter your password')
    }),

    handleSubmit(values, { resetForm }) {
        console.log(values);
        resetForm();

    }
})(Login)

export default FormikLogin;