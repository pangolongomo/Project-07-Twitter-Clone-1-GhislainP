import avatarImage from "../images/profile-photo.png";
import Avatar from "./Avatar";
import { useEffect, useState } from "react";
import { fetchIcons } from "../utils/helper";

function TweetEditor() {
  const [editorIcons, setEditorIcons] = useState([]);
  const iconNames = [
    "iconImage",
    "iconGif",
    "iconGraph",
    "iconSmiley",
    "iconClock",
  ];
  useEffect(() => {
    async function getIcons() {
      const icons = await Promise.all(
        iconNames.map(async (icon) => {
          return await fetchIcons(icon);
        })
      );
      setEditorIcons(icons);
    }
    getIcons();
  }, []);
  const buttonList = editorIcons.map((editorButton, index) => {
    return (
      <button key={index}>
        <img src={editorButton} alt="insert image" />
      </button>
    );
  });
  return (
    <div className="tweet-editor">
      <Avatar avatarClass="avatar" image={avatarImage} description="avatar" />
      <div className="tweet-editor-form">
        <input
          type="text"
          className="tweet-editor-input"
          placeholder="What’s happening?"
        />
        <div className="tweet-editor-buttons">
          <div className="tweet-editor-actions">{buttonList}</div>
          <div className="button">Tweet</div>
        </div>
      </div>
    </div>
  );
}

export default TweetEditor;
