import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as yup from 'yup';
import { Formik } from 'formik';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useNavigate } from 'react-router-dom';
import BtnCta from '../components/common/btnCta/BtnCta';
import { useDispatch, useSelector } from "react-redux";
import { registerActionAsync } from '../redux/actions/userActions';
import AvatarUpload from '../components/login/uploadImage/AvatarUpload';

const Register = () => {

  const { user}   = useSelector((store) => store.user);
  console.log(user);


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState("");

  const schema = yup.object().shape({
    fullName: yup.string().required("Por favor ingresar su nombre"),
    email: yup
      .string()
      .email("Debe ingresar un email")
      .required("Este campo es obligatorio"),
    password: yup
      .string()
      .required("Este campo es obligatorio")
      .min(8, "La contraseña debe contener al menos 8 caracteres.")
      .max(16, "La contraseña no puede contener más de 16 caracteres")
      .oneOf(
        [yup.ref("repeatPassword")],
        "Las contraseñas ingresadas no coinciden"
      ),
    repeatPassword: yup
      .string()
      .required("Este campo es obligatorio")
      .min(8, "La contraseña debe contener al menos 8 caracteres.")
      .max(16, "La contraseña no puede contener más de 16 caracteres")
      .oneOf([yup.ref("password")], "Las contraseñas ingresadas no coinciden"),
    // avatar: yup
    //   .mixed()
    //   .test("file", "Por favor ingrese una imagen", (value) =>
    //     value.length > 0 ? true : false
    //   ),
    //.test('fileType', "Formato no válido", (value) => value && value.type === '')
  });


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
                initialValues={{
                  email: "",
                  avatar: "",
                  fullName: "",
                  password: '',
                  birthday: "",
                  phone: "",
                  address:"",
                }}
              >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                  <Form noValidate onSubmit={handleSubmit} >

                    <AvatarUpload setAvatar={setAvatar} imageUrl={""} className='avatar__upload' />

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

                    <Form.Group className="mb-1" controlId="validationFormik07">
                      <Row className="mb-1 form__login">
                        <div >
                          <Form.Label>PASSWORD</Form.Label>
                          <Form.Control type="password"
                            placeholder="********"
                            name="repeatPassword"
                            value={values.repeatPassword}
                            onChange={handleChange}
                            isValid={touched.repeatPassword && !errors.repeatPassword}
                            isInvalid={!!errors.repeatPassword}
                            className='form__login__input'
                            autoComplete="off"
                          />
                          <Form.Control.Feedback type="invalid" className='form__login__errors'>
                            {errors.repeatPassword}
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

                    <Row className="mb-3 form__login" >
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

                    <Row className="mb-3 form__login" >
                      <div >
                        <InputGroup className="mb-1">
                          <Form.Group controlId="validationFormik04">
                            <Form.Label>ADDRESS</Form.Label>
                            <Form.Control
                              type="text"
                              name="address"
                              placeholder='882 Well St, New-York'
                              value={values.address}
                              onChange={handleChange}
                              isValid={touched.address && !errors.address}
                              isInvalid={!!errors.address}
                              className='form__login__input'
                              autoComplete="off"
                            />
                            <Form.Control.Feedback className='form__login__errors'>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid" className='form__login__errors'>
                              {errors.address}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </InputGroup>
                      </div>
                    </Row>

                    <BtnCta cta={'Sign Up'} bgColor={'#FFE031'} type={'submit'} />

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