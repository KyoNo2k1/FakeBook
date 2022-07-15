import React from "react";
import { Avatar, Button, Divider, Paper, Typography } from "@material-ui/core";

import userImg from "../../../images/avatar.png";
import useStyles from "./styles";

const categoryList1 = ["Trung Nghia", "Bạn bè", "Nhóm", "MarketPlace", "Watch"];
const categoryListImg1 = [
  "",
  "https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png",
  "https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png",
  "https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png",
  "https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png",
];
const categoryList2 = ["Group 1", "Group 2", "Group 3", "Group 4", "Group 5"];
const categoryListImg2 = [
  "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png",
  "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png",
  "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png",
  "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png",
  "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png",
];

function Category() {
  const classes = useStyles();

  return (
    <>
      <Paper
        color="primary"
        alignItems="stretch"
        className={classes.category}
        elevation={12}
      >
        {categoryList1.map((cate1, index) => (
          <Button
            className={classes.categoryButton}
            variant="contained"
            size="small"
            fullWidth
            key={index}
          >
            <Avatar
              alt="Nghia"
              src={
                categoryListImg1[index] !== ""
                  ? categoryListImg1[index]
                  : userImg
              }
              className={classes.categoryImg}
            />
            <Typography variant="p" style={{ fontWeight: "bold" }}>
              {cate1}
            </Typography>
          </Button>
        ))}
        <Divider style={{ margin: "20px 0" }} />
        <Typography
          variant="h6"
          align="center"
          color="secondary"
          className={classes.categoryHeading}
        >
          Lối tắt
        </Typography>
        {categoryList2.map((cate2, index) => (
          <Button
            className={classes.categoryButton}
            variant="contained"
            size="small"
            fullWidth
            key={index}
          >
            <Avatar
              alt="Nghia"
              src={categoryListImg2[index]}
              className={classes.categoryImg}
            />
            <Typography variant="p" style={{ fontWeight: "bold" }}>
              {cate2}
            </Typography>
          </Button>
        ))}
      </Paper>
      <Paper color="primary" alignItems="stretch" className={classes.category2}>
        <ul style={{ margin: "10px 0" }}>
          <li className={classes.categoryRule}>Quyền riêng tư</li>
          <li className={classes.categoryRule}>Điều khoản</li>
          <li className={classes.categoryRule}>Quảng cáo</li>
          <li className={classes.categoryRule}>Lựa chọn quảng cáo</li>
          <li className={classes.categoryRule}>Cookie</li>
        </ul>
      </Paper>
    </>
  );
}

export default Category;
