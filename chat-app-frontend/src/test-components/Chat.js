import React from "react";
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import SendIcon from "@material-ui/icons/Send";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "../components/Chat.css";
import { useSelector } from "react-redux";

const Chat = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [color, setColor] = React.useState("#34a5e9");
  const theme = useSelector((state) => state.theme);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="col-md-6 chat">
      <div className="chat__header">
        <div className="chat__header__name">
          <Avatar src="https://media-exp1.licdn.com/dms/image/C5103AQHm8fjIvEFJBA/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=4Ps-cnuYhY26SU6tPDSeNIQQAP4qgXg5OuFhx71gXQs" />
          <span>Marwa Ali Bouchiba</span>
        </div>
        <IconButton>
          <SettingsIcon
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            style={{ color: theme.iconColors }}
          />
        </IconButton>
        <Menu
          elevation={2}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <input
              type="color"
              value={color}
              style={{ marginRight: 5, width: 25, height: 25, border: "none" }}
              onChange={(e) => setColor(e.target.value)}
              placeholder="Change conversation color"
            />
            <Typography>Change conversation color</Typography>
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            style={{ display: "flex", alignItems: "center" }}
          >
            <FavoriteBorderIcon
              style={{ width: 25, height: 25, marginRight: 10 }}
            />
            Add to favorite contact
          </MenuItem>
        </Menu>
      </div>
      <div className="chat__body">
        <div className="chat__body__message">
          <div
            className="chat__body__message__text"
            style={{ background: color }}
          >
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
              sit commodi voluptatum perspiciatis enim, qui vero iusto harum
              dolores unde explicabo voluptas suscipit eaque eum voluptatibus
              architecto aspernatur maxime omnis.
            </p>
          </div>
          <Avatar src="data:image/jpeg;base64,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" />
        </div>
        <div className="chat__body__message receiver">
          <div
            className="chat__body__message__text text-received"
            style={{ background: theme.secondBgColor, color: theme.textColor }}
          >
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
          <Avatar src="https://media-exp1.licdn.com/dms/image/C5103AQHm8fjIvEFJBA/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=4Ps-cnuYhY26SU6tPDSeNIQQAP4qgXg5OuFhx71gXQs" />
        </div>
        <div className="chat__body__message">
          <div
            className="chat__body__message__text"
            style={{ background: color }}
          >
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
              sit commodi voluptatum perspiciatis enim, qui vero iusto harum
              dolores unde explicabo volupta.
            </p>
          </div>
          <Avatar src="data:image/jpeg;base64,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" />
        </div>
        <div className="chat__body__message">
          <div
            className="chat__body__message__text"
            style={{ background: color }}
          >
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
              sit commodi voluptatum perspic
            </p>
          </div>
          <Avatar src="data:image/jpeg;base64,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" />
        </div>
        <div className="chat__body__message receiver">
          <div
            className="chat__body__message__text text-received"
            style={{ background: theme.secondBgColor, color: theme.textColor }}
          >
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
          <Avatar src="https://media-exp1.licdn.com/dms/image/C5103AQHm8fjIvEFJBA/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=4Ps-cnuYhY26SU6tPDSeNIQQAP4qgXg5OuFhx71gXQs" />
        </div>
        <div className="chat__body__message receiver">
          <div
            className="chat__body__message__text text-received"
            style={{ background: theme.secondBgColor, color: theme.textColor }}
          >
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
          <Avatar src="https://media-exp1.licdn.com/dms/image/C5103AQHm8fjIvEFJBA/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=4Ps-cnuYhY26SU6tPDSeNIQQAP4qgXg5OuFhx71gXQs" />
        </div>
        <div className="chat__body__message receiver">
          <div
            className="chat__body__message__text text-received"
            style={{ background: theme.secondBgColor, color: theme.textColor }}
          >
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
          <Avatar src="https://media-exp1.licdn.com/dms/image/C5103AQHm8fjIvEFJBA/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=4Ps-cnuYhY26SU6tPDSeNIQQAP4qgXg5OuFhx71gXQs" />
        </div>
        <div className="chat__body__message receiver">
          <div
            className="chat__body__message__text text-received"
            style={{ background: theme.secondBgColor, color: theme.textColor }}
          >
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
          <Avatar src="https://media-exp1.licdn.com/dms/image/C5103AQHm8fjIvEFJBA/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=4Ps-cnuYhY26SU6tPDSeNIQQAP4qgXg5OuFhx71gXQs" />
        </div>
      </div>
      <div className="chat__footer" style={{ background: theme.secondBgColor }}>
        <button
          className="chat__footer__addbutton"
          style={{ background: color }}
        >
          +
        </button>
        <input
          type="text"
          className="chat__footer__input"
          style={{ background: theme.secondBgColor, color: theme.textColor }}
          placeholder="Type a message here"
        />
        <IconButton>
          <InsertEmoticonIcon style={{ color: theme.iconColors }} />
        </IconButton>
        <div className="chat__footer__send" style={{ background: color }}>
          <SendIcon />
        </div>
      </div>
    </div>
  );
};

export default Chat;
