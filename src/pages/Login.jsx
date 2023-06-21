import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as yup from 'yup';
import { Formik } from 'formik';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useNavigate } from 'react-router-dom';
import '../components/login/stylesLogin/stylesLogin.scss'
import BtnCta from '../components/common/btnCta/BtnCta';
import { actionLoginGoogleOrFacebook, loginActionAsync } from '../redux/actions/userActions';
import { useDispatch } from 'react-redux';
import { loginProvider } from '../services/dates';



const Login = () => {

  const handleLoginGoogleOrFacebook = (provider) => {
    dispatch(actionLoginGoogleOrFacebook(provider));
  };

  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Debe ingresar un email")
      .required("Este campo es obligatorio"),
    password: yup
      .string()
      .required("Este campo es obligatorio")
  });

  const handleToRegister = () => {
    navigate("/register")
  };

  const dispatch = useDispatch()

  const handleLogin = (values) => {
    console.log(values);
    dispatch(loginActionAsync(values.email, values.password));
  }

  return (
    <>
      <div className='form'>
        <Row>
          <Col sm={12} md={8}>
            <div className='form__content'>
              <figure className='form__figure'>
                <img src="https://res.cloudinary.com/dd8l8bm6q/image/upload/v1687033446/deliveryApp/oumm4vmttpba8iuafsit.png" alt="" className='form__icon' />
              </figure>
              <h2>Sing In</h2>
              <p className='form__title__paragrapho'>Login or create an account with your
                email to start ordering</p>
              <Formik
                validationSchema={schema}
                onSubmit={handleLogin}
                initialValues={{
                  email: '',
                  password: '',
                }}
              >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                  <Form noValidate onSubmit={handleSubmit} >
                    <div className="mb-4 form__login" >
                      <div >
                        <InputGroup className="">
                          <Form.Group controlId="validationFormik01">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              placeholder='example@gmail.com'
                              value={values.email}
                              onChange={handleChange}
                              isValid={touched.email && !errors.email}
                              isInvalid={!!errors.email}
                              className='form__login__input'
                              autoComplete="off"
                            />
                            <Form.Control.Feedback className='form__login__errors'>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid" className='form__login__errors'>
                              {errors.email}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </InputGroup>
                      </div>
                    </div>

                    <Form.Group className="" controlId="validationFormik02">
                      <Row className="mb-3 form__login">
                        <div >
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password"
                            placeholder="********"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            isValid={touched.password && !errors.password}
                            isInvalid={!!errors.password}
                            className='form__login__input'
                            autoComplete="off"
                          />
                          <Form.Control.Feedback type="invalid" className='form__login__errors'>
                            {errors.password}
                          </Form.Control.Feedback>
                        </div>
                      </Row>
                    </Form.Group>

                    <BtnCta cta={'Login'} bgColor={'#FFE031'} type={'submit'} />
                    <div style={{ display: "flex", gap: "20px", marginTop: "20px", justifyContent:'center' }}>
                      {loginProvider.map((provider, index) => (
                        <img
                          key={index}
                          src={provider.image}
                          alt={provider.name}
                          style={{ width: "40px", cursor: "pointer" }}
                          onClick={() => {
                            handleLoginGoogleOrFacebook(provider.provider);
                          }}
                        />
                      ))}
                    </div>
                    <div className='form__login__registration'>
                      <p className='mb-3 mt-3'>¿Don't have an account?</p>
                      <p className='form__login__registration__log mt-0' onClick={handleToRegister}>Create an account</p>
                    </div>
                  </Form>
                )}
              </Formik>
            </div >
          </Col>
        </Row>
      </div >
    </>
  )
}

export default Login