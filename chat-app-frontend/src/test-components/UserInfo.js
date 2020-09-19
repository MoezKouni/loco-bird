import React from "react";
import "../components/UserInfo.css";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar, Divider } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  details: {
    display: "flex",
    alignItems: "center",
  },
  message: {
    background: "#34a5e9",
    borderRadius: "4px",
    color: "white",
    width: "fit-content",
    marginLeft: "-10px",
    padding: "2px 8px 2px 15px",
  },
  status: {
    background: "#c2c2c283",
    borderRadius: "4px",
    width: "fit-content",
    padding: "0px 10px",
  },
  date: {
    fontSize: 9,
    fontStyle: "italic",
  },
  AccordionBody: {
    display: "flex",
    flexDirection: "column",
  },
}));

const UserInfo = () => {
  const classes = useStyles();
  const theme = useSelector((state) => state.theme);

  return (
    <div className="col-md-3 userInfo">
      <div
        className="userInfo__profil"
        style={{ background: theme.secondBgColor, color: theme.textColor }}
      >
        <img
          className="userInfo__profil__img"
          alt="profil"
          src="https://media-exp1.licdn.com/dms/image/C5103AQHm8fjIvEFJBA/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=4Ps-cnuYhY26SU6tPDSeNIQQAP4qgXg5OuFhx71gXQs"
        />
        <p>Marwa Ali Bouchiba</p>
        <p className="userInfo__occupation">Expert Accountant</p>
      </div>
      <div className="userInfo__profil__sections">
        <Accordion
          style={{ background: theme.secondBgColor, color: theme.textColor }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: theme.iconColors }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            style={{ background: theme.secondBgColor, color: theme.textColor }}
          >
            <Typography className={classes.heading}>Information</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.AccordionBody}>
            <Typography>
              Bio:
              <Typography variant="caption" display="block" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                blandit enim convallis sollicitudin consectetur. Cras bibendum
                malesuada accumsan. Proin vehicula accumsan eros, sit amet
                volutpat nibh congue ac. Cras laoreet risus sed mauris dictum,
                vitae tempus nisl cursus. Donec congue vestibulum ipsum pretium
                condimentum. Praesent vitae sollicitudin dolor. Etiam commodo
                euismod orci et pulvinar. Maecenas tempor id magna in convallis.
                Etiam venenatis urna sed ipsum scelerisque egestas. Suspendisse
                bibendum lorem et mi vehicula euismod.
              </Typography>
            </Typography>
            <Divider />
            <Typography>
              Date of birth:
              <Typography variant="caption" display="block" gutterBottom>
                12/08/1996
              </Typography>
            </Typography>
            <Divider />
            <Typography>
              E-mail address:
              <Typography variant="caption" display="block" gutterBottom>
                marwabouchiba@gmail.com
              </Typography>
            </Typography>
            <Divider />
            <Typography>
              Phone Number:
              <Typography variant="caption" display="block" gutterBottom>
                28231208
              </Typography>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{ background: theme.secondBgColor, color: theme.textColor }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: theme.iconColors }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>
              Favorite Messages
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.details}>
            <Avatar src="data:image/jpeg;base64,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" />
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              className={classes.message}
            >
              Hello babe
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          style={{ background: theme.secondBgColor, color: theme.textColor }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: theme.iconColors }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>Status</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.status}>
            <Typography variant="h6" gutterBottom>
              This is my first status
              <Typography
                variant="caption"
                display="block"
                className={classes.date}
                gutterBottom
              >
                {Date()}
              </Typography>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default UserInfo;
