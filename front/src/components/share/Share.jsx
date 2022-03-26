import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material";
import { useContext, useRef, useState } from "react";
import "./Share.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Share() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState(null);
  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = { userId: user._id, desc: desc.current.value };
    try {
      await axios.post("/posts/", newPost);
    } catch (err) {}
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
          />
          <input
            placeholder={`What's in your mind ${user.username}?`}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </label>
            <div className="shareOption">
              <Label htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="gold" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button type="submit" className="shareButton">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}
