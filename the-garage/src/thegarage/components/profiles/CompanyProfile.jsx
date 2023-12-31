/* eslint-disable react/prop-types */
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { z } from 'zod';
import { NavLinkProfile, SpanForm } from './StylesComponentsProfiles';
import { Formik, ErrorMessage } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { BtnSubmitStyled } from '../../../components';
import { getSession } from '../../../api/session';
import { updateCompanyProfile } from '../../../api/profile';

export const CompanyProfile = ({
  user,
  login,
  handelUpdate,
  setHandelUpdate,
  departments,
  city,
  handleChangeDepartment,
  changeImageInput,
  fileInputRef,
}) => {
  const updateCompanySchema = z.object({
    razon_social: z.string().min(3, 'Mínimo 3 caracteres'),
    tipo_documento_empresa: z.string().min(3, 'Mínimo 3 caracteres'),
    numero_documento_empresa: z.string().min(3, 'Mínimo 3 caracteres'),
    direccion: z.string().min(3, 'Mínimo 3 caracteres'),
    departamento: z.string().min(3, 'Mínimo 3 caracteres'),
    ciudad: z.string().min(3, 'Mínimo 3 caracteres'),
    correo: z.string().min(3, 'Mínimo 3 caracteres'),
    telefono: z.string().min(3, 'Mínimo 3 caracteres'),
  });

  const initialValues = {
    razon_social: user.profileData.razon_social,
    tipo_documento_empresa: user.profileData.tipo_documento_empresa,
    numero_documento_empresa: user.profileData.numero_documento_empresa,
    direccion: user.profileData.direccion,
    departamento: user.profileData.departamento,
    ciudad: user.profileData.ciudad,
    correo: user.profileData.correo,
    telefono: user.profileData.telefono,
  };

  const onSubmit = async (values, { setSubmitting }) => {
    const response = await updateCompanyProfile(values);
    const token = getSession();
    const { razon_social: name } = response.typeData;
    const type = response.user.tipo_usuario;
    const profileData = {
      ...response.user,
      ...response.typeData,
    };
    login(name, type, token, profileData);
    setSubmitting(false);
  };

  return (
    <>
      <div className="position-relative mb-4 col">
        <Image
          src={user.profileData.url_foto}
          style={{ height: 100, width: 100 }}
          roundedCircle
        />

        <Form.Control
          type="file"
          size="sm"
          ref={fileInputRef}
          style={{ display: 'none' }}
        />

        <NavLinkProfile
          className="position-absolute top-100 start-50 translate-middle"
          onClick={changeImageInput}
        >
          <Image
            src="../../../../assets/images/home/tecnologiesIcons/editImage.svg"
            style={{ height: 25, width: 25 }}
          />
        </NavLinkProfile>
      </div>
      <div className="col-11">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={toFormikValidationSchema(updateCompanySchema)}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form className="Form_client m-4 " onSubmit={handleSubmit}>
              <Row className="align-items-center mb-2">
                <Col>
                  <Form.Group
                    className="d-flex justify-content-center align-items-center"
                    controlId="formBasicName"
                  >
                    <Form.Label className="w-50">Razon Social:</Form.Label>
                    {handelUpdate ? (
                      <>
                        <Form.Control
                          type="texto"
                          placeholder="Ingrese su nombre completo"
                          name="razon_social"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.razon_social}
                          disabled
                          className={
                            touched.razon_social && errors.razon_social
                              ? 'is-invalid'
                              : ''
                          }
                        />
                        <ErrorMessage
                          name="razon_social"
                          component="div"
                          className="invalid-feedback"
                        />
                      </>
                    ) : (
                      <SpanForm>{user.name}</SpanForm>
                    )}
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className="d-flex justify-content-center align-items-center"
                    controlId="formBasicDepartment"
                  >
                    <Form.Label className="w-50">Departamento:</Form.Label>
                    {handelUpdate ? (
                      <>
                        <Form.Select
                          name="departamento"
                          onChange={(e) => {
                            handleChange(e), handleChangeDepartment(e);
                          }}
                          onBlur={handleBlur}
                          value={values.departamento}
                        >
                          <option value="0">Selecciona tu departamento</option>
                          {departments.map(({ departamento }) => {
                            return (
                              <option key={departamento} value={departamento}>
                                {departamento}
                              </option>
                            );
                          })}
                        </Form.Select>
                        <ErrorMessage
                          name="departamento"
                          component="div"
                          className="invalid-feedback"
                        />
                      </>
                    ) : (
                      <SpanForm>{user.profileData.departamento}</SpanForm>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <Row className="align-items-center mb-2">
                <Col>
                  <Form.Group
                    className="d-flex justify-content-center align-items-center"
                    controlId="formBasicDocumentTypeCompany"
                  >
                    <Form.Label className="w-50">Tipo de documento:</Form.Label>
                    {handelUpdate ? (
                      <>
                        <Form.Control
                          type="texto"
                          placeholder="ingrese su tipo de documento"
                          name="tipo_documento_empresa"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.tipo_documento_empresa}
                          disabled
                          className={
                            touched.tipo_documento_empresa &&
                            errors.tipo_documento_empresa
                              ? 'is-invalid'
                              : ''
                          }
                        />
                        <ErrorMessage
                          name="tipo_documento_empresa"
                          component="div"
                          className="invalid-feedback"
                        />
                      </>
                    ) : (
                      <SpanForm>
                        {user.profileData.tipo_documento_empresa}
                      </SpanForm>
                    )}
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className="d-flex justify-content-center align-items-center"
                    controlId="formBasicCity"
                  >
                    <Form.Label className="w-50">Ciudad:</Form.Label>
                    {handelUpdate ? (
                      <>
                        <Form.Select
                          name="ciudad"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.ciudad}
                          disabled={city.length === 0}
                        >
                          <option value="0">Selecciona tu ciudad</option>
                          {city.map((ciudad) => {
                            return (
                              <option
                                key={ciudad.municipio}
                                value={ciudad.municipio}
                              >
                                {ciudad.municipio}
                              </option>
                            );
                          })}
                        </Form.Select>
                        <ErrorMessage
                          name="city"
                          component="div"
                          className="invalid-feedback"
                        />
                      </>
                    ) : (
                      <SpanForm>{user.profileData.ciudad}</SpanForm>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <Row className="align-items-center mb-2">
                <Col>
                  <Form.Group
                    className="d-flex justify-content-center align-items-center"
                    controlId="formBasicDocumentNumberCompany"
                  >
                    <Form.Label className="w-50">
                      Número de documento:
                    </Form.Label>
                    {handelUpdate ? (
                      <>
                        <Form.Control
                          type="texto"
                          placeholder="Ingrese su número de documento"
                          name="numero_documento_empresa"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.numero_documento_empresa}
                          disabled
                          className={
                            touched.numero_documento_empresa &&
                            errors.numero_documento_empresa
                              ? 'is-invalid'
                              : ''
                          }
                        />
                        <ErrorMessage
                          name="numero_documento_empresa"
                          component="div"
                          className="invalid-feedback"
                        />
                      </>
                    ) : (
                      <SpanForm>
                        {user.profileData.numero_documento_empresa}
                      </SpanForm>
                    )}
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className="d-flex justify-content-center align-items-center"
                    controlId="formBasicAddress"
                  >
                    <Form.Label className="w-50">Dirección:</Form.Label>
                    {handelUpdate ? (
                      <>
                        <Form.Control
                          type="texto"
                          placeholder="Ingrese su dirección"
                          name="direccion"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.direccion}
                          className={
                            touched.direccion && errors.direccion
                              ? 'is-invalid'
                              : ''
                          }
                        />
                        <ErrorMessage
                          name="direccion"
                          component="div"
                          className="invalid-feedback"
                        />
                      </>
                    ) : (
                      <SpanForm>{user.profileData.direccion}</SpanForm>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <Row className="align-items-center mb-2">
                <Col>
                  <Form.Group
                    className="d-flex justify-content-center align-items-center"
                    controlId="formBasicEmail"
                  >
                    <Form.Label className="w-50">
                      Correo Electrónico:
                    </Form.Label>
                    {handelUpdate ? (
                      <>
                        <Form.Control
                          type="email"
                          placeholder="Ingrese su correo"
                          name="correo"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.correo}
                          disabled
                          className={
                            touched.correo && errors.correo ? 'is-invalid' : ''
                          }
                        />
                        <ErrorMessage
                          name="correo"
                          component="div"
                          className="invalid-feedback"
                        />
                      </>
                    ) : (
                      <SpanForm>{user.profileData.correo}</SpanForm>
                    )}
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className="d-flex justify-content-center align-items-center"
                    controlId="formBasicPhone"
                  >
                    <Form.Label className="w-50">Teléfono:</Form.Label>
                    {handelUpdate ? (
                      <>
                        <Form.Control
                          type="texto"
                          placeholder="Ingrese su número de teléfono"
                          name="telefono"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.telefono}
                          className={
                            touched.telefono && errors.telefono
                              ? 'is-invalid'
                              : ''
                          }
                        />
                        <ErrorMessage
                          name="telefono"
                          component="div"
                          className="invalid-feedback"
                        />
                      </>
                    ) : (
                      <SpanForm>{user.profileData.telefono}</SpanForm>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <div className="d-flex justify-content-center gap-5 my-3">
                <BtnSubmitStyled
                  type="button"
                  hidden={handelUpdate}
                  disabled={isSubmitting}
                  onClick={() => {
                    setHandelUpdate(true);
                  }}
                >
                  Editar
                </BtnSubmitStyled>
                <BtnSubmitStyled
                  type="submit"
                  hidden={!handelUpdate}
                  disabled={isSubmitting}
                  onClick={() => {
                    setHandelUpdate(false);
                  }}
                >
                  Guardar
                </BtnSubmitStyled>
                <BtnSubmitStyled
                  type="button"
                  variant="light"
                  hidden={!handelUpdate}
                  disabled={isSubmitting}
                  onClick={() => {
                    setHandelUpdate(false);
                  }}
                >
                  Cancelar
                </BtnSubmitStyled>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
