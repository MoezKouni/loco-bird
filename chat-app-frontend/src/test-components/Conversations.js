import React from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton, Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import "../components/Conversations.css";

const Conversations = () => {
  const theme = useSelector((state) => state.theme);
  return (
    <div className="conversations col-md-3">
      <div className="conversations__header">
        <button
          className="conversations__header-button"
          style={{ background: theme.buttonBg, color: theme.textColor }}
        >
          +
        </button>
        <span
          className="conversations__header-newConversation"
          style={{ background: theme.buttonBg, color: theme.textColor }}
        >
          New Conversation
        </span>
      </div>
      <div className="conversations__title">
        <h1>Chats</h1>
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </div>
      <div className="conversations__search">
        <input
          type="text"
          placeholder="Search here"
          className="conversations__search-input"
        />
        <SearchIcon style={{ color: "gray" }} />
      </div>
      <div className="conversations__chatList">
        <div className="conversations__chatList-chatItem">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU" />
          <div className="conversations__chatList-chatItem--info">
            <p>Tim Hover</p>
            <p className="chatItem__date">32 mins ago</p>
          </div>
        </div>
        <div className="conversations__chatList-chatItem">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRedZ-8EmuNjXQr6jzVyhom8UV2TMzlABW8MA&usqp=CAU" />
          <div className="conversations__chatList-chatItem--info">
            <p>Marian Zuch</p>
            <p className="chatItem__date">40 mins ago</p>
          </div>
        </div>
        <div className="conversations__chatList-chatItem">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsSaDPDrch66QzL6o7rPtEeOOeo8YBVDx8ew&usqp=CAU" />
          <div className="conversations__chatList-chatItem--info">
            <p className="chatItem__name">Maria Valbuena</p>
            <p className="chatItem__date">45 mins ago</p>
          </div>
        </div>
        <div className="conversations__chatList-chatItem">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsSaDPDrch66QzL6o7rPtEeOOeo8YBVDx8ew&usqp=CAU" />
          <div className="conversations__chatList-chatItem--info">
            <p className="chatItem__name">Maria Valbuena</p>
            <p className="chatItem__date">45 mins ago</p>
          </div>
        </div>
        <div className="conversations__chatList-chatItem">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsSaDPDrch66QzL6o7rPtEeOOeo8YBVDx8ew&usqp=CAU" />
          <div className="conversations__chatList-chatItem--info">
            <p className="chatItem__name">Maria Valbuena</p>
            <p className="chatItem__date">45 mins ago</p>
          </div>
        </div>
        <div className="conversations__chatList-chatItem">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsSaDPDrch66QzL6o7rPtEeOOeo8YBVDx8ew&usqp=CAU" />
          <div className="conversations__chatList-chatItem--info">
            <p className="chatItem__name">Maria Valbuena</p>
            <p className="chatItem__date">45 mins ago</p>
          </div>
        </div>
        <div className="conversations__chatList-chatItem">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsSaDPDrch66QzL6o7rPtEeOOeo8YBVDx8ew&usqp=CAU" />
          <div className="conversations__chatList-chatItem--info">
            <p className="chatItem__name">Maria Valbuena</p>
            <p className="chatItem__date">45 mins ago</p>
          </div>
        </div>
        <div className="conversations__chatList-chatItem">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsSaDPDrch66QzL6o7rPtEeOOeo8YBVDx8ew&usqp=CAU" />
          <div className="conversations__chatList-chatItem--info">
            <p className="chatItem__name">Maria Valbuena</p>
            <p className="chatItem__date">45 mins ago</p>
          </div>
        </div>
        <div className="conversations__chatList-chatItem">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsSaDPDrch66QzL6o7rPtEeOOeo8YBVDx8ew&usqp=CAU" />
          <div className="conversations__chatList-chatItem--info">
            <p className="chatItem__name">Maria Valbuena</p>
            <p className="chatItem__date">45 mins ago</p>
          </div>
        </div>
        <div className="conversations__chatList-chatItem">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsSaDPDrch66QzL6o7rPtEeOOeo8YBVDx8ew&usqp=CAU" />
          <div className="conversations__chatList-chatItem--info">
            <p className="chatItem__name">Maria Valbuena</p>
            <p className="chatItem__date">45 mins ago</p>
          </div>
        </div>
        <div className="conversations__chatList-chatItem">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsSaDPDrch66QzL6o7rPtEeOOeo8YBVDx8ew&usqp=CAU" />
          <div className="conversations__chatList-chatItem--info">
            <p className="chatItem__name">Maria Valbuena</p>
            <p className="chatItem__date">45 mins ago</p>
          </div>
        </div>
        <div className="conversations__chatList-chatItem">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsSaDPDrch66QzL6o7rPtEeOOeo8YBVDx8ew&usqp=CAU" />
          <div className="conversations__chatList-chatItem--info">
            <p className="chatItem__name">Maria Valbuena</p>
            <p className="chatItem__date">45 mins ago</p>
          </div>
        </div>
        <div className="conversations__chatList-chatItem">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsSaDPDrch66QzL6o7rPtEeOOeo8YBVDx8ew&usqp=CAU" />
          <div className="conversations__chatList-chatItem--info">
            <p className="chatItem__name">Maria Valbuena</p>
            <p className="chatItem__date">45 mins ago</p>
          </div>
        </div>
        <div className="conversations__chatList-chatItem">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsSaDPDrch66QzL6o7rPtEeOOeo8YBVDx8ew&usqp=CAU" />
          <div className="conversations__chatList-chatItem--info">
            <p className="chatItem__name">Maria Valbuena</p>
            <p className="chatItem__date">45 mins ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversations;
