import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { actions, getBuildsTc, setNewBuildTc } from '../../../redux/buildHistoryReducer';
import { getCurentBuildData, Config, addNewBuild } from '../../../selectors';
import Button from '../buttons/Button';
import s from './header.module.css';

const Header = (props) => {
  const {
    headerText, ComandButtonText, ComandButtonIcon, settingIcon,
  } = props;
  const dispatch = useDispatch();
  const currentCommit = useSelector(getCurentBuildData);
  const handleClick = (value) => {
    if (value === 'buildIcon') {
      dispatch(actions.isShowBuildForm(true));
    } if (value === 'rebuild') {
      dispatch(setNewBuildTc({ commitHash: currentCommit.commitHash }));
    }
  };
  const storeConfig = useSelector(Config);
  const isAddNewBuild = useSelector(addNewBuild);
  useEffect(() => {
    dispatch(getBuildsTc(storeConfig));
  }, [isAddNewBuild === true]);
  return (
    <div className={s.header}>
      <div className={s.header__description}>{headerText}</div>
      {ComandButtonText && ComandButtonIcon ? (
        <div className={s.heaedr__buttons}>
          <Button
            icon={ComandButtonIcon}
            text={ComandButtonText}
            handleClick={handleClick}
          />
          <NavLink to="/setting">
            <div className={s.header__setting_item}>
              <Button icon={settingIcon} handleClick={handleClick} />
            </div>
          </NavLink>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
