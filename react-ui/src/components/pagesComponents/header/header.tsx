import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { actions, getBuildsTc, setNewBuildTc } from '../../../redux/buildHistoryReducer';
import { getCurentBuildData, Config, addNewBuild } from '../../../selectors';
import { HeaderPropsType } from '../../../types';
import Button from '../buttons/Button';
import s from './header.module.css';



const Header: React.FC<HeaderPropsType> = (props) => {
  const {
    headerText, ComandButtonText, ComandButtonIcon, settingIcon,
  } = props;
  const dispatch = useDispatch();
  const currentCommit = useSelector(getCurentBuildData);
  const handleClick = (value: string) => {
    if (value === 'buildIcon') {
      dispatch(actions.isShowBuildForm(true));
    } if (value === 'rebuild') {
      dispatch(setNewBuildTc({ commitHash: currentCommit.commitHash }));
    }
  };
  const storeConfig = useSelector(Config);
  const isAddNewBuild = useSelector(addNewBuild);

  if (isAddNewBuild === true) {
    dispatch(getBuildsTc(storeConfig));
  }

  return (
    <div className={s.header}>
      <NavLink to="/build">
        <div className={s.header__description}>{headerText}</div>
      </NavLink>
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
