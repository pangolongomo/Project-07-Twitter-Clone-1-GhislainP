import avatarImage from "../images/profile-photo.png";
import Avatar from "./Avatar";
import TweetEditorAction from "./TweetEditorAction";
function TweetEditor() {
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
          <TweetEditorAction elementClass="tweet-editor-actions" />
          <div className="button">Tweet</div>
        </div>
      </div>
    </div>
  );
}

export default TweetEditor;
