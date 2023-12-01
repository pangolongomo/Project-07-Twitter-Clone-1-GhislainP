import Avatar from "./Avatar";

function TweetEditor() {
  const icons = [
    "https://res.cloudinary.com/dvmqqgrx5/image/upload/v1701449366/Project-07-Twitter-Clone-1-GhislainP/icons/iconImage_bxfs5b.svg",
    "https://res.cloudinary.com/dvmqqgrx5/image/upload/v1701449366/Project-07-Twitter-Clone-1-GhislainP/icons/iconGif_rkyuwp.svg",
    "https://res.cloudinary.com/dvmqqgrx5/image/upload/v1701449366/Project-07-Twitter-Clone-1-GhislainP/icons/iconGraph_s1hdcx.svg",
    "https://res.cloudinary.com/dvmqqgrx5/image/upload/v1701449367/Project-07-Twitter-Clone-1-GhislainP/icons/iconSmiley_tstjwj.svg",
    "https://res.cloudinary.com/dvmqqgrx5/image/upload/v1701449370/Project-07-Twitter-Clone-1-GhislainP/icons/iconClock_mc1hoe.svg",
  ];

  const buttonList = icons.map((editorButton, index) => {
    return (
      <button key={index}>
        <img src={editorButton} alt="insert image" />
      </button>
    );
  });
  const avatarImage =
    "https://res.cloudinary.com/dvmqqgrx5/image/upload/v1701448976/Project-07-Twitter-Clone-1-GhislainP/images/profile-photo_opdacz.png";
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
