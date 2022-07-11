import React, { useState, useEffect } from "react";
import { Grid, Grow } from "@material-ui/core";
import Category from "../Category/Category";
import FriendList from "../FriendList/FriendList";
import Posts from "../Posts/Posts";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  logout,
  refreshToken,
  isLogin,
  getUsers,
} from "../../redux/reducerSlice/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import firebase, { db, auth } from "../../Auth/firebase/config";
import { collection, query, where, onSnapshot } from "firebase/firestore";

function Home() {
  const { user, users, exp, statusRefToken, status, isLoginThird } =
    useSelector((store) => store.users);
  console.log(users);
  const refToken = JSON.parse(localStorage.getItem("profile"))?.refreshToken;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [arrUsers, setArrUsers] = useState([]);
  console.log(arrUsers);
  useEffect(() => {
    if (status === "success") {
      toast("Đăng nhập thành công! ");

      dispatch(isLogin());
    }
  }, [status, dispatch]);
  useEffect(() => {
    if (isLoginThird) {
      toast("Đăng nhập thành công! ");

      dispatch(isLogin());
    }
  }, [isLoginThird, dispatch]);
  useEffect(() => {
    if (user) {
      if (!isLoginThird)
        if (exp) {
          if (exp * 1000 < Date.now()) {
            dispatch(refreshToken({ token: refToken, user: user.email }));
            if (statusRefToken === "failed") {
              dispatch(logout());
              setTimeout(() => {
                navigate("../login");
              }, 100);
            }
          }
        }
      const userRef = collection(db, "users");
      const q = query(userRef);
      const unSub = onSnapshot(q, (querySnapshot) => {
        let usersThird = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          usersThird.push(doc.data());
        });
        setArrUsers(usersThird);
      });
      // dispatch(getUsers());
      return () => unSub();
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
