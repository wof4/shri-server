import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import s from './buildForm.module.css';
import cancel from '../../../../../icons/cancel.png';

const buildFields = (props) => {
  const { closeBuildForm, addBuild } = props;
  const validationSchema = yup.object().shape({
    commitHash: yup
      .string()
      .typeError('Должно быть строкой')
      .required('Поле должно быть заполненно'),
  });
  return (
    <div>
      <Formik
        initialValues={{
          commitHash: '',
        }}
        onSubmit={() => {}}
        validateOnBlur
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          isValid,
          dirty,
          handleChange,
          handleBlur,
          setFieldValue,
        }) => (
          <Form>
            <div className={s.build__input_container}>
              {values.commitHash !== '' ? (
                <img
                  onClick={() => {
                    setFieldValue('commitHash', '');
                  }}
                  className={s.build__input_icon}
                  src={cancel}
                  alt="icon"
                  role="presentation"
                />
              ) : null}
              <label htmlFor="commitHash">
                <Field
                  data-testid="commitHash"
                  name="commitHash"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Commit hash"
                  value={values.commitHash}
                  className={
                                        errors.commitHash && touched.commitHash
                                          ? s.build__input_error
                                          : s.build__input
                                    }
                />
                {touched.commitHash && errors.commitHash && (
                <div className={s.build__error}>{errors.commitHash}</div>
                )}
              </label>
              <div className={s.build__buttons}>
                <div
                  data-testid="addBuild"
                  onClick={
                                        isValid && dirty
                                          ? () => {
                                            addBuild(values);
                                          }
                                          : null
                                    }
                  className={
                                        !isValid || !dirty ? s.build__button : s.build__button_run
                                    }
                  role="presentation"
                >
                  Run build
                </div>
                <div
                  onClick={() => {
                    closeBuildForm();
                  }}
                  className={s.build__button_cansel}
                  role="presentation"
                >
                  Cansel
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default buildFields;
