import React from "react";
import iconImage from "../images/icons/iconImage.svg";
import iconGif from "../images/icons/iconGif.svg";
import iconGraph from "../images/icons/iconGraph.svg";
import iconSmiley from "../images/icons/iconSmiley.svg";
import iconClock from "../images/icons/iconClock.svg";

function TweetEditorAction({ elementClass }) {
  return (
    <div className={elementClass}>
      <button>
        <img src={iconImage} alt="insert image" />
      </button>
      <button>
        <img src={iconGif} alt="insert GIF" />
      </button>
      <button>
        <img src={iconGraph} alt="insert graph" />
      </button>
      <button>
        <img src={iconSmiley} alt="insert emojis" />
      </button>
      <button>
        <img src={iconClock} alt="calendar logo" />
      </button>
    </div>
  );
}

export default TweetEditorAction;
