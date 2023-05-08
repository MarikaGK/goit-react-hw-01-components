import css from './FriendsList.module.css';

const getBgColor = variant => {
  switch (variant) {
    case true:
      return 'green';
    case false:
      return 'red';
    default:
      throw new Error(`Unsupported variant prop value - ${variant}`);
  }
};

export const FriendsList = ({ friends }) => (
  <>
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={css.item} key={id}>
          <span
            className={css.status}
            style={{ backgroundColor: getBgColor(isOnline) }}
          ></span>
          <img
            className={css.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  </>
);
