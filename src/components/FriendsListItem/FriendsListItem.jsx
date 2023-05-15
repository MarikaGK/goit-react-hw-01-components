import PropTypes from 'prop-types';
import css from './FriendsListItem.module.css';

const FriendsListItem = ({ avatar, name, isOnline }) => (
  <li className={css.item}>
    <span
      className={isOnline ? css.onlineStatus : css.offlineStatus}
    ></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
);

FriendsListItem.propTypes = {
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool
  };

export default FriendsListItem;