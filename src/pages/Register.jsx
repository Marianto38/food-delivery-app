// import React from 'react'

// const Register = () => {
//   return (
//     <div>Register</div>
//   )
// }

// export default Register

import React, { useState } from 'react';
//import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as yup from 'yup';
import { Formik } from 'formik';
import '@fortawesome/fontawesome-svg-core/styles.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
//import { createUser } from '../../services/createUser';
//import AvatarUpload from './uploadImage/AvatarUpload';
//import Swal from 'sweetalert2';
//import { useContext } from 'react';
import BtnCta from '../components/common/btnCta/BtnCta';
import { useDispatch } from "react-redux";
import { registerActionAsync } from '../redux/actions/userActions';
import AvatarUpload from '../components/login/uploadImage/AvatarUpload';
//import { registerActionAsync } from '../redux/actions/userActions';
//import { AppContext } from '../../context/AppContext';

const Register = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState('');
 // const { userLogged, setUserLogged } = useContext(AppContext);


  const schema = yup.object().shape({
    //username: yup.string().required(),
    fullName: yup.string().required('El nombre completo es obligatorio').test('two-words', 'Ingrese Nombre  Apellido', value => {
      if (value) {
        const words = value.trim().split(' ');
        return words.length === 2;
      }
      return false;
    }),
    password: yup.string().required().min(8, 'Debe contener al menos 8 caracteres').max(20, 'Puede contener máximo 20 caracateres')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
      ),
  });


 // const [showLogin, setShowLogin] = useState(false);
  //const { setIsLogged } = useContext(AppContext);

  const handleOpenLogin = () => {
    navigate('/')
  };

  const handleCreateUser = async (values) => {
    console.log(values);
    values.avatar = avatar; 
    console.log(values);
 
    dispatch(registerActionAsync(values));
  }


  return (
    <>
          <div className='form'>
            <Row>
              <Col sm={12}>
                <div className='form__content'>
                  <p className='form__title__register'>CREATE ACCOUNT</p>
                  <Formik
                    validationSchema={schema}
                   onSubmit={handleCreateUser}
                    // onSubmit={(values) => {
                    //  // values.avatar = avatar; // Asigna el valor de avatar al objeto values
                    //  // console.log(values)
                    // //  dispatch(registerActionAsync(values));
                    //  // createUser(values);
                    //  // setIsLogged(true)
                    //  // setUserLogged(values);   
                    // //  console.log(userLogged)

                    //   const Toast = Swal.mixin({
                    //     toast: true,
                    //     position: 'top-end',
                    //     showConfirmButton: false,
                    //     timer: 3000,
                    //     timerProgressBar: true,
                    //     didOpen: (toast) => {
                    //       toast.addEventListener('mouseenter', Swal.stopTimer)
                    //       toast.addEventListener('mouseleave', Swal.resumeTimer)
                    //     }
                    //   })

                    //   Toast.fire({
                    //     icon: 'success',
                    //     title: '¡Registro exitoso!'
                    //   }).then(() => {
                    //     navigate('/home');
                    //   });

                    // }}
    
                    initialValues={{
                      email: '',
                      avatar: '',
                      fullName: '',
                      password: '',
                      birthday: '',
                      phone: '',
                    }}
                  >
                    {({ handleSubmit, handleChange, values, touched, errors }) => (
                      <Form noValidate onSubmit={handleSubmit} >

                        <AvatarUpload setAvatar={setAvatar} className='avatar__upload' />

                        <Row className="mb-1 form__login" >

                          <div >
                            <InputGroup className="mb-1">
                              <Form.Group controlId="validationFormik01">
                                <Form.Label>NAME</Form.Label> 
                                <Form.Control
                                  type="text"
                                  name="fullName"
                                  placeholder='Robert Foxy'
                                  value={values.fullName}
                                  onChange={handleChange}
                                  isValid={touched.fullName && !errors.fullName}
                                  isInvalid={!!errors.fullName}
                                  className='form__login__input'
                                  autoComplete="off"
                                />
                                <Form.Control.Feedback className='form__login__errors'>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid" className='form__login__errors'>
                                {errors.fullName}
                              </Form.Control.Feedback>
                              </Form.Group>
                            </InputGroup>
                          </div>
                        </Row>



                        <Row className="mb-1 form__login" >
                          <div >
                            <InputGroup className="mb-1">
                              <Form.Group controlId="validationFormik02">
                              <Form.Label>EMAIL</Form.Label>
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
                        </Row>

                        <Form.Group className="mb-1" controlId="validationFormik07">
                          <Row className="mb-1 form__login">
                            <div >
                            <Form.Label>PASSWORD</Form.Label>
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

                        <Row className="mb-1 form__login" >
                          <div >
                            <InputGroup className="mb-1">
                              <Form.Group controlId="validationFormik03">
                              <Form.Label>BIRTHDAY</Form.Label>
                                <Form.Control
                                  type="date"
                                  name="birthday"
                                  placeholder='Nombre de Usuario'
                                  value={values.birthday}
                                  onChange={handleChange}
                                  isValid={touched.birthday && !errors.birthday}
                                  isInvalid={!!errors.birthday}
                                  className='form__login__input'
                                  autoComplete="off"
                                />
                                <Form.Control.Feedback className='form__login__errors'>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid" className='form__login__errors'>
                                {errors.birthday}
                                </Form.Control.Feedback>
                              </Form.Group>
                            </InputGroup>
                          </div>
                        </Row>

                        <Row className="mb-5 form__login" >
                          <div >
                            <InputGroup className="mb-1">
                              <Form.Group controlId="validationFormik04">
                              <Form.Label>PHONE NUMBER</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="phone"
                                  placeholder='300-3333333'
                                  value={values.phone}
                                  onChange={handleChange}
                                  isValid={touched.phone && !errors.phone}
                                  isInvalid={!!errors.phone}
                                  className='form__login__input'
                                  autoComplete="off"
                                />
                                <Form.Control.Feedback className='form__login__errors'>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid" className='form__login__errors'>
                                {errors.phone}
                                </Form.Control.Feedback>
                              </Form.Group>
                            </InputGroup>
                          </div>
                        </Row>



                        <BtnCta cta={'Sign Up'} bgColor={'#FFE031'} type={'submit'}/>
                        <div className='form__login__registration'>
                          <p className='form__login__registration__log' onClick={handleOpenLogin}>Sign In</p>
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

export default Register