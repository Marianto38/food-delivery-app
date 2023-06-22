import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as yup from 'yup';
import { Formik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faPencil } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import BtnCta from '../components/common/btnCta/BtnCta';
import { useDispatch, useSelector } from "react-redux";
import { updateUserMethodsActionAsync } from '../redux/actions/userActions';

import Swal from 'sweetalert2';

const PaymentMethod = () => {

  const { paymentMethods } = useSelector((store) => store.paymentMethods);
  console.log(paymentMethods);



  const dispatch = useDispatch();
  const navigate = useNavigate();
 // const [avatar, setAvatar] = useState(user?.avatar);

  const schema = yup.object().shape({
    creditCard: yup.string().required("Por favor ingresar su numero tarjeta"),
    paypal: yup
      .string()
      .required("Este campo es obligatorio"),
    // password: yup
    //   .string()
    //   .required("Este campo es obligatorio")
    //   .min(8, "La contraseña debe contener al menos 8 caracteres.")
    //   .max(16, "La contraseña no puede contener más de 16 caracteres")
    //   .oneOf(
    //     [yup.ref("repeatPassword")],
    //     "Las contraseñas ingresadas no coinciden"
    //   ),
    // repeatPassword: yup
    //   .string()
    //   .required("Este campo es obligatorio")
    //   .min(8, "La contraseña debe contener al menos 8 caracteres.")
    //   .max(16, "La contraseña no puede contener más de 16 caracteres")
    //   .oneOf([yup.ref("password")], "Las contraseñas ingresadas no coinciden"),
    // avatar: yup
    //   .mixed()
    //   .test("file", "Por favor ingrese una imagen", (value) =>
    //     value.length > 0 ? true : false
    //   ),
    //.test('fileType', "Formato no válido", (value) => value && value.type === '')
  });


  const handleUpdateUser = async (values) => {
    console.log('update')
    //values.avatar = avatar;
   dispatch(updateUserMethodsActionAsync(values.paypal, values.creditCard)).then(() => {
    const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'success',
          title: '¡The user was successfully updated!'
        })

      } )
  };

  const handleBack = () => {
    navigate('/profile')
  }
  
  return (
    <>
      <div className=''>
        <Row>
          <Col sm={12}>
            <div className='form__content'>
        <FontAwesomeIcon icon={faChevronLeft} style={{padding:'1rem 0 0 1rem', cursor:'pointer'}} onClick={handleBack} />
              <p className='form__title__profile'>Profile</p>
              <Formik
                validationSchema={schema}
                onSubmit={handleUpdateUser}
                initialValues={{
                  paypal: "",
                 // avatar: user.avatar,
                  creditCard: "",
                //  password: user.password,
                 // birthday: user.birthday,
                 // phone: user.phone,
                }}
              >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                  <Form noValidate onSubmit={handleSubmit} >

                    {/* <AvatarUpload setAvatar={setAvatar} imageUrl={user.avatar} className='avatar__upload' /> */}

                    <div className="mb-1 " >

                      <div >
                        <div className="mb-1">
                          <Form.Group controlId="validationFormik01">
                            {/* <Form.Label>NAME</Form.Label> */}
                            <div className='form__input__profile'>
                              <Form.Control
                                type="text"
                                name="creditCard"
                                placeholder='Robert Foxy'
                                value={values.creditCard}
                                onChange={handleChange}
                                isValid={touched.creditCard && !errors.creditCard}
                                isInvalid={!!errors.creditCard}
                                className='form__profile__input'
                                autoComplete="off"
                              />
                              <FontAwesomeIcon icon={faPencil} /></div>
                            <Form.Control.Feedback className='form__login__errors'>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid" className='form__login__errors'>
                              {errors.creditCard}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>
                      </div>
                    </div>

                    <div className="mb-1" >
                      <div >
                        <div className="mb-1">
                          <Form.Group controlId="validationFormik02">
                            <div className='form__input__profile'>
                              <Form.Control
                                type="email"
                                name="paypal"
                                placeholder='example@gmail.com'
                                value={values.paypal}
                                onChange={handleChange}
                                isValid={touched.paypal && !errors.paypal}
                                isInvalid={!!errors.paypal}
                                className='form__profile__input'
                                autoComplete="off"
                              />
                              <FontAwesomeIcon icon={faPencil} /></div>
                            <Form.Control.Feedback className='form__login__errors'>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid" className='form__login__errors'>
                              {errors.paypal}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>
                      </div>
                    </div>

                     {/* <Form.Group className="mb-1" controlId="validationFormik07">
                    <div className="mb-1">
                      <div >
                      <div className='form__input__profile'>
                        <Form.Control type="password"
                          placeholder="********"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          isValid={touched.password && !errors.password}
                          isInvalid={!!errors.password}
                          className='form__profile__input'
                          autoComplete="off"
                        />
                             <FontAwesomeIcon icon={faPencil} /></div>
                        <Form.Control.Feedback type="invalid" className='form__login__errors'>
                          {errors.password}
                        </Form.Control.Feedback>
                      </div>
                    </div>
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
                          className='form__profile__input'
                          autoComplete="off"
                        />
                        <Form.Control.Feedback type="invalid" className='form__login__errors'>
                          {errors.repeatPassword}
                        </Form.Control.Feedback>
                      </div>
                    </Row>
                  </Form.Group>   */}
{/* 
                    <div className="mb-1" >
                      <div >
                        <div className="mb-1">
                          <Form.Group controlId="validationFormik03">
                            <div className='form__input__profile'>
                              <Form.Control
                                type="date"
                                name="birthday"
                                placeholder='Nombre de Usuario'
                                value={values.birthday}
                                onChange={handleChange}
                                isValid={touched.birthday && !errors.birthday}
                                isInvalid={!!errors.birthday}
                                className='form__profile__input'
                                autoComplete="off"
                              />
                              <FontAwesomeIcon icon={faPencil} /></div>
                            <Form.Control.Feedback className='form__login__errors'>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid" className='form__login__errors'>
                              {errors.birthday}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>
                      </div>
                    </div>

                    <div style={{marginBottom:'8rem'}} >
                      <div >
                        <div className="mb-1">
                          <Form.Group controlId="validationFormik04">
                            <div className='form__input__profile'>
                              <Form.Control
                                type="text"
                                name="phone"
                                placeholder='300-3333333'
                                value={values.phone}
                                onChange={handleChange}
                                isValid={touched.phone && !errors.phone}
                                isInvalid={!!errors.phone}
                                className='form__profile__input'
                                autoComplete="off"
                              />
                              <FontAwesomeIcon icon={faPencil} /></div>
                            <Form.Control.Feedback className='form__login__errors'>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid" className='form__login__errors'>
                              {errors.phone}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>
                      </div>
                    </div> */}
                    
                    <BtnCta cta={'SAVE'} bgColor={'#FFE031'} type={'submit'}  />

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

export default PaymentMethod

