import "./Online.css";

export default function Online({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="rightbarFriend">
      <div className="rightbarProfile">
        <div className="rightbarProfileImgContainer">
          <img
            src={PF + user.profilePicture}
            alt=""
            className="rightbarProfileImg"
          />
          <span className="rightbarOnline"></span>
        </div>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
}
