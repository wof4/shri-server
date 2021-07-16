import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setNewBuildToStoreTc } from '../../../redux/buildDatailsReducer';
import s from './card.module.css';

const Card = (props) => {
  const {
    status,
    commitMessage,
    buildNumber,
    branchName,
    commitHash,
    authorName,
    shouldDirectionColumn,
    id,
    duration,
  } = props;

  const cardContainerClassNames = `${s.card__container} ${shouldDirectionColumn && s.card__container_direction_column
  }`;
  const data = {
    status,
    commitMessage,
    buildNumber,
    branchName,
    commitHash,
    authorName,
    id,
    duration,
  };
  const dispach = useDispatch();
  const setCurrentCommit = () => {
    dispach(setNewBuildToStoreTc(data));
  };
  return (
    <NavLink to="/details">
      <div data-testid={buildNumber} onClick={() => { setCurrentCommit(); }} role="presentation" className={cardContainerClassNames}>
        <div className={s.card__left}>
          <div className={s.card__commit}>
            <div
              className={s[status]}
            >
              {`#${buildNumber}`}
            </div>
            <div className={s.card__commitMessage}>{commitMessage}</div>
          </div>
          <div className={s.card__branch}>
            <div className={s.card__branch_commit}>
              <div className={s.card__branchName}>{branchName}</div>
              <div className={s.card__commitHash}>{commitHash}</div>
            </div>
            <div className={s.card_authorName}>{authorName}</div>
          </div>
        </div>
        <div>
          <div className={s.card__date}>
            <div className={s.card__day}>21 янв,03:06</div>
            <div className={s.card__duration}>1ч 20мин</div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
