import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Post({ avatarSrc, userName, location, imageUrl, caption }) {
  return (
    <div className="post__container">
      <div className="post__userInfoContainer">
        <Avatar className="post__avatar" alt="Remy Sharp" src={avatarSrc} />
        <div className="post__userPostInfo">
          <h4 className="post__username">{userName}</h4>
          <p className="post__location">{location}</p>
        </div>
        <MoreHorizIcon className="menu__icon" />
      </div>
      <img src={imageUrl} alt="post image" className="post__image" />
      <div className="post__actions">
        <div className="giveActions">
          <FavoriteBorderIcon className="action__icon" />
          <ChatBubbleOutlineOutlinedIcon className="action__icon" />
          <ShareOutlinedIcon className="action__icon" />
        </div>

        <BookmarkBorderOutlinedIcon className="bookmark__icon" />
      </div>
      <div className="post__likes"></div>
      <div className="post__caption">
        <p className="caption__text">
          <span className="post__username">{userName}</span>
          {caption}
        </p>
      </div>
    </div>
  );
}

export default Post;
