import React, { useState, useEffect } from "react";
import { Grid, Grow } from "@mui/material";
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
  updateUsers,
} from "../../redux/reducerSlice/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { db, auth } from "../../Auth/firebase/config";
import { collection, query, where, onSnapshot } from "firebase/firestore";

function Home() {
  const {
    user,
    users,
    exp,
    statusRefToken,
    status,
    isLoginThird,
    statusUsers,
  } = useSelector((store) => store.users);
  const refToken = JSON.parse(localStorage.getItem("profile"))?.refreshToken;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [arrUsers, setArrUsers] = useState([]);
  console.log(statusUsers);
  useEffect(() => {
    if (status === "success") {
      toast("Đăng nhập thành công! ");

      dispatch(isLogin());
    }
  }, [status]);

  useEffect(() => {
    if (isLoginThird) {
      toast("Đăng nhập thành công! ");

      dispatch(isLogin());
    }
  }, [isLoginThird]);
  useEffect(() => {
    if (user) {
      if (!isLoginThird) {
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
      }
      dispatch(getUsers());
    }
  }, [user]);
  useEffect(() => {
    if (users[0]) {
      let arr = [...users[0]];
      const userRef = collection(db, "users");
      if (auth.currentUser) {
        const q = query(
          userRef,
          where("uid", "not-in", [auth.currentUser.uid])
        );
        onSnapshot(q, (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            arr.push(doc.data());
            setArrUsers(arr);
          });
        });
      } else {
        const q = query(userRef);
        onSnapshot(q, (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            arr.push(doc.data());
            const newArrNotUser = arr.filter(
              (data) => data.email !== user.email
            );
            setArrUsers(newArrNotUser);
          });
        });
      }
    }
  }, [users]);
  useEffect(() => {
    if (arrUsers) dispatch(updateUsers(arrUsers));
  }, [arrUsers]);

  if (user)
    return (
      <Grow in>
        <Grid
          container
          alignItems="stretch"
          style={{ marginTop: 67, height: "100%" }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            alignItems="stretch"
            style={{ position: "fixed", left: 0, width: "350px" }}
          >
            <Category />
          </Grid>
          <Grid item xs={12} sm={6} md={6} style={{ margin: "0 auto" }}>
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
