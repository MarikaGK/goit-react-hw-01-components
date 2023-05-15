import PropTypes from 'prop-types';
import css from './FriendsList.module.css';
import FriendsListItem from 'components/FriendsListItem/FriendsListItem';


export const FriendsList = ({ friends }) => (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendsListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number
  }))
};
