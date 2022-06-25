import React, { useEffect } from "react";
import { Grid, Grow } from "@material-ui/core";
import Category from "../Category/Category";
import FriendList from "../FriendList/FriendList";
import Posts from "../Posts/Posts";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { logout, refreshToken } from "../../redux/reducerSlice/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Home() {
  const { user, exp, statusRefToken, status } = useSelector(
    (store) => store.users
  );
  const refToken = JSON.parse(localStorage.getItem("profile"))?.refreshToken;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(status);
  useEffect(() => {
    if (status === "success") toast("Đăng nhập thành công! ");
  }, [status]);
  useEffect(() => {
    if (user) {
      if (exp) {
        if (exp * 1000 < Date.now()) {
          dispatch(refreshToken({ token: refToken, user: user.email }));
          if (statusRefToken === "failed") {
            dispatch(logout());
            setTimeout(() => {
              navigate("../");
            }, 100);
          }
        }
      }
    }
  }, [user]);
  if (user)
    return (
      <Grow in>
        <Grid
          container
          justify="center"
          alignItems="stretch"
          style={{ marginTop: 70, height: "100%" }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            alignItems="stretch"
            style={{ position: "fixed", left: 0 }}
          >
            <Category />
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <Posts />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            alignItems="stretch"
            style={{ position: "fixed", right: 0, width: "300px" }}
          >
            <FriendList />
          </Grid>
          <ToastContainer />
        </Grid>
      </Grow>
    );
  else return null;
}

export default Home;
