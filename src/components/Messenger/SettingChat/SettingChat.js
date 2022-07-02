import React, { useState } from "react";

import userImg from "../../../images/avatar.png";
import { Avatar, Box, Button, Paper, Typography } from "@material-ui/core";
import useStyles from "./styles";

import NotificationsIcon from "@material-ui/icons/Notifications";
import FacebookIcon from "@material-ui/icons/Facebook";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";
import TranslateIcon from "@material-ui/icons/Translate";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import DescriptionIcon from "@material-ui/icons/Description";
import InsertLinkIcon from "@material-ui/icons/InsertLink";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import BlockIcon from "@material-ui/icons/Block";
import ReportProblemOutlinedIcon from "@material-ui/icons/ReportProblemOutlined";

const SettingChat = () => {
  const classes = useStyles();
  const [setting, setSetting] = useState(false);
  const [file, setFile] = useState(false);
  const [secure, setSecure] = useState(false);

  return (
    <Paper
      style={{
        width: "26%",
        backgroundColor: "rgba(0, 0, 0,0.2)",
        padding: "15px",
      }}
    >
      <Box className={classes.settingTop}>
        <Avatar alt="AvatarSetting" src={userImg} className={classes.avatar} />
        <Typography style={{ fontWeight: 700, fontSize: 20 }} align="center">
          Trung Nghĩa
        </Typography>
        <Typography style={{ fontWeight: 300, fontSize: 13 }} align="center">
          Đang hoạt động
        </Typography>
        <Box className={classes.settingTopOption}>
          <Box className={classes.settingTopOptionBtn}>
            <FacebookIcon style={{ margin: "0 auto", width: "100%" }} />
            <Typography>Trang cá nhân</Typography>
          </Box>
          <Box>
            <NotificationsIcon style={{ margin: "0 auto", width: "100%" }} />
            <Typography>Tắt thông báo</Typography>
          </Box>
          <Box>
            <SearchIcon style={{ margin: "0 auto", width: "100%" }} />
            <Typography>Tìm kiếm</Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.settingMenu}>
        <Button
          variant="contained"
          className={classes.button}
          disableElevation
          disableRipple
          fullWidth
          classes={{
            label: classes.settingMenuText,
            contained: classes.settingMenuHover,
          }}
          onClick={() => setSetting(!setting)}
        >
          Tùy chỉnh đoạn chat
          {!setting ? (
            <KeyboardArrowDownIcon
              style={{
                position: "absolute",
                top: "20%",
                right: 10,
              }}
            />
          ) : (
            <KeyboardArrowUpIcon
              style={{
                position: "absolute",
                top: "20%",
                right: 10,
              }}
            />
          )}
        </Button>
        {setting ? (
          <Box>
            <Button
              variant="contained"
              className={classes.button}
              startIcon={<ColorLensIcon style={{ color: "#fd0885" }} />}
              disableElevation
              disableRipple
              fullWidth
              classes={{
                label: classes.settingMenuText,
                contained: classes.settingMenuHover,
              }}
            >
              Đổi chủ đề
            </Button>
            <Button
              variant="contained"
              className={classes.button}
              startIcon={<FavoriteSharpIcon style={{ color: "red" }} />}
              disableElevation
              disableRipple
              fullWidth
              classes={{
                label: classes.settingMenuText,
                contained: classes.settingMenuHover,
              }}
            >
              Thay đổi biểu tượng cảm xúc
            </Button>
            <Button
              variant="contained"
              className={classes.button}
              startIcon={<TranslateIcon />}
              disableElevation
              disableRipple
              fullWidth
              classes={{
                label: classes.settingMenuText,
                contained: classes.settingMenuHover,
              }}
            >
              Chỉnh sửa biệt danh
            </Button>
          </Box>
        ) : null}
        <Button
          variant="contained"
          className={classes.button}
          disableElevation
          disableRipple
          fullWidth
          classes={{
            label: classes.settingMenuText,
            contained: classes.settingMenuHover,
          }}
          onClick={() => setFile(!file)}
        >
          File phương tiện, file và liên kết
          {!file ? (
            <KeyboardArrowDownIcon
              style={{
                position: "absolute",
                top: "20%",
                right: 10,
              }}
            />
          ) : (
            <KeyboardArrowUpIcon
              style={{
                position: "absolute",
                top: "20%",
                right: 10,
              }}
            />
          )}
        </Button>
        {file ? (
          <Box>
            <Button
              variant="contained"
              className={classes.button}
              startIcon={<PhotoLibraryIcon />}
              disableElevation
              disableRipple
              fullWidth
              classes={{
                label: classes.settingMenuText,
                contained: classes.settingMenuHover,
              }}
            >
              File phương tiện
            </Button>
            <Button
              variant="contained"
              className={classes.button}
              startIcon={<DescriptionIcon />}
              disableElevation
              disableRipple
              fullWidth
              classes={{
                label: classes.settingMenuText,
                contained: classes.settingMenuHover,
              }}
            >
              File
            </Button>
            <Button
              variant="contained"
              className={classes.button}
              startIcon={<InsertLinkIcon />}
              disableElevation
              disableRipple
              fullWidth
              classes={{
                label: classes.settingMenuText,
                contained: classes.settingMenuHover,
              }}
            >
              Liên kết
            </Button>
          </Box>
        ) : null}
        <Button
          variant="contained"
          className={classes.button}
          disableElevation
          disableRipple
          fullWidth
          classes={{
            label: classes.settingMenuText,
            contained: classes.settingMenuHover,
          }}
          onClick={() => setSecure(!secure)}
        >
          Quyền riêng tư và hỗ trợ
          {!secure ? (
            <KeyboardArrowDownIcon
              style={{
                position: "absolute",
                top: "20%",
                right: 10,
              }}
            />
          ) : (
            <KeyboardArrowUpIcon
              style={{
                position: "absolute",
                top: "20%",
                right: 10,
              }}
            />
          )}
        </Button>
        {secure ? (
          <Box>
            <Button
              variant="contained"
              className={classes.button}
              startIcon={<LockOutlinedIcon />}
              disableElevation
              disableRipple
              fullWidth
              classes={{
                label: classes.settingMenuText,
                contained: classes.settingMenuHover,
              }}
            >
              Bắt đầu đoạn chat mã hóa đầu cuối
            </Button>
            <Button
              variant="contained"
              className={classes.button}
              startIcon={<NotificationsOutlinedIcon />}
              disableElevation
              disableRipple
              fullWidth
              classes={{
                label: classes.settingMenuText,
                contained: classes.settingMenuHover,
              }}
            >
              Tắt thông báo
            </Button>
            <Button
              variant="contained"
              className={classes.button}
              startIcon={<BlockIcon />}
              disableElevation
              disableRipple
              fullWidth
              classes={{
                label: classes.settingMenuText,
                contained: classes.settingMenuHover,
              }}
            >
              Chặn
            </Button>
            <Button
              variant="contained"
              className={classes.button}
              startIcon={<ReportProblemOutlinedIcon />}
              disableElevation
              disableRipple
              fullWidth
              classes={{
                label: classes.settingMenuText,
                contained: classes.settingMenuHover,
              }}
            >
              Báo cáo
            </Button>
          </Box>
        ) : null}
      </Box>
    </Paper>
  );
};

export default SettingChat;
