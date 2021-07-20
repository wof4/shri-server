import React, { useCallback } from 'react';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import s from './form.module.css';
import cancel from '../../../../icons/cancel.png';
import star from '../../../../icons/star.png';
import { setSettingTc } from '../../../../redux/settingsReducer';
import { NavLink } from 'react-router-dom';

type GetFormPropsType = {
  loader:boolean
}

const GetForm:React.FC<GetFormPropsType> = (props) => {
  const { loader } = props;
  const dispatch = useDispatch();
  const setSet = useCallback(
    (values) => {
      if (loader === false) {
        dispatch(setSettingTc(values));
      }
    },
    [dispatch, loader],
  );

  const validationSchema = yup.object().shape({
    repoName: yup
      .string()
      .typeError('Должно быть строкой')
      .required('Поле обязательно для заполнения'),
    buildCommand: yup
      .string()
      .typeError('Должно быть строкой')
      .required('Поле обязательно для заполнения'),
    mainBranch: yup.string().typeError('Должно быть строкой'),
  });

  return (
    <div>
      <Formik
        initialValues={{
          repoName: '',
          buildCommand: '',
          mainBranch: 'master |',
          period: 1,
        }}
        onSubmit={() => { }}
        validationSchema={validationSchema}
        validateOnBlur
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
            <div className={s.form_container}>
              <div className={s.form__title}>Settings</div>
              <div className={s.form__desc}>
                Configure repository connection and synchronization settings.
              </div>
              <div className={s.form__inputs}>
                <div className={s.input_container}>
                  {values.repoName !== '' ? (
                    <img
                      data-testid="repoNameIcon"
                      onClick={() => {
                        setFieldValue('repoName', '');
                      }}
                      className={s.form__icon}
                      src={cancel}
                      alt="icon"
                      role="presentation"
                    />
                  ) : null}
                  <div className={s.form__input_title}>
                    <div>GitHub repository</div>
                    <span className={s.form__star_icon}>
                      <img src={star} alt="star" />
                    </span>
                  </div>
                  <label className={s.form__price_input} htmlFor="repoName">
                    <Field
                      data-testid="repoName"
                      name="repoName"
                      type="text"
                      placeholder="user-name/repo-name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.repoName}
                      className={
                        errors.repoName && touched.repoName
                          ? s.form_input_error
                          : s.form_input
                      }
                    />
                    {touched.repoName && errors.repoName && (
                      <div className={s.error}>{errors.repoName}</div>
                    )}
                  </label>
                </div>
                <div className={s.input_container}>
                  {values.buildCommand !== '' ? (
                    <img
                      data-testid="buildCommandIcon"
                      onClick={() => {
                        setFieldValue('buildCommand', '');
                      }}
                      className={s.form__icon}
                      src={cancel}
                      alt="icon"
                      role="presentation"
                    />
                  ) : null}
                  <div className={s.form__input_title}>
                    <div>Build command</div>
                    <span className={s.form__star_icon}>
                      <img src={star} alt="star" />
                    </span>
                  </div>
                  <label className={s.form__price_input} htmlFor="buildCommand">
                    <Field
                      data-testid="buildCommand"
                      name="buildCommand"
                      type="text"
                      placeholder="npm ci && npm run build"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.buildCommand}
                      className={
                        errors.buildCommand && touched.buildCommand
                          ? s.form_input_error
                          : s.form_input
                      }
                    />
                    {touched.buildCommand && errors.buildCommand && (
                      <div className={s.error}>{errors.buildCommand}</div>
                    )}
                  </label>
                </div>
                <div className={s.input_container}>
                  {values.mainBranch !== '' ? (
                    <img
                      data-testid="mainBranchIcon"
                      onClick={() => {
                        setFieldValue('mainBranch', '');
                      }}
                      className={s.form__icon}
                      src={cancel}
                      alt="icon"
                      role="presentation"
                    />
                  ) : null}
                  <div className={s.form__input_title}>Main branch</div>
                  <label className={s.form__price_input} htmlFor="mainBranch">
                    <Field
                      data-testid="mainBranch"
                      name="mainBranch"
                      type="text"
                      placeholder="master"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.mainBranch}
                      className={
                        errors.mainBranch && touched.mainBranch
                          ? s.form_input_error
                          : s.form_input
                      }
                    />
                    {touched.mainBranch && errors.mainBranch && (
                      <div className={s.error}>{errors.mainBranch}</div>
                    )}
                  </label>
                </div>

                <div className={s.input_container_time}>
                  <div className={s.form__input_title}>
                    <div>Synchronize every</div>
                  </div>
                  <label className={s.form__time_label} htmlFor="period">
                    <Field
                      data-testid="period"
                      name="period"
                      type="text"
                      placeholder="period"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.period}
                      className={
                        errors.period && touched.period
                          ? s.form_input_error
                          : s.form_input
                      }
                    />
                    {touched.period && errors.period && (
                      <div className={s.error}>{errors.period}</div>
                    )}
                  </label>
                  <div className={s.form__input_title}>minutes</div>
                </div>
              </div>
              <div className={s.form__buttons}>
                <div
                  data-testid="button-add-settings"
                  onClick={isValid && dirty ? () => setSet(values) : undefined}
                  className={
                    loader === true || !isValid || !dirty
                      ? s.form__button
                      : s.form__button_save
                  }
                  role="presentation"
                >
                  Save
                </div>
                <NavLink to="/build">
    
                <div
                  data-testid="button-cansel"
                  role="presentation"
                  className={s.form__button_cansel}
                >
                  Cansel
                </div>
                </NavLink>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default GetForm;
