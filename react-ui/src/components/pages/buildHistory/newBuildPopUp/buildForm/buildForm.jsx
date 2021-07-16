import React from 'react';
import BuildFields from './buildFields';
import s from './buildForm.module.css';

const BuildForm = (props) => {
  const {
    title, description, closeBuildForm, addBuild,
  } = props;
  return (
    <div data-testid="build__form" className={s.build__form_container}>
      <div className={s.form__title}>{title}</div>
      <div className={s.form__description}>{description}</div>
      <div className={s.form__field}>
        <BuildFields closeBuildForm={closeBuildForm} addBuild={addBuild} />
      </div>
      <div className={s.form__buttons} />
    </div>
  );
};

export default BuildForm;
