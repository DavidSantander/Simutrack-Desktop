import axios from "./../plugins/axios-auth";
import globalAxios from "axios";

export default {
  setLogoutTimer({ commit }, expirationTime) {
    setTimeout(() => {
      commit("clearAuthData");
    }, expirationTime * 1000);
  },
  signup({ commit, dispatch, state }, authData) {
    // TODO Change Post request with the backend
    axios
      .post("/accounts:signUp?key=AIzaSyDJe-8SNbW0ky2z0xDs1lm2VZfIFfZFsGQ", {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      .then(res => {
        commit("authUser", {
          token: res.data.idToken,
          userId: res.data.localId
        });
        const now = new Date();
        const expirationDate = new Date(
          now.getTime() + res.data.expiresIn * 1000
        );
        localStorage.setItem("token", res.data.idToken);
        localStorage.setItem("userId", res.data.localId);
        localStorage.setItem("expirationDate", expirationDate);
        dispatch("storeUser", authData);
        dispatch("setLogoutTimer", res.data.expiresIn);
      })
      .catch(error => console.log(error));
  },
  signin({ commit, dispatch }, authData) {
    axios
      .post(
        "/accounts:signInWithPassword?key=AIzaSyDJe-8SNbW0ky2z0xDs1lm2VZfIFfZFsGQ",
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }
      )
      .then(res => {
        const now = new Date();
        const expirationDate = new Date(
          now.getTime() + res.data.expiresIn * 1000
        );
        localStorage.setItem("token", res.data.idToken);
        localStorage.setItem("userId", res.data.localId);
        localStorage.setItem("expirationDate", expirationDate);
        commit("authUser", {
          token: res.data.idToken,
          userId: res.data.localId
        });
        // If Authenticated redirect to Dashboard
        dispatch("setLogoutTimer", res.data.expiresIn);
        authData.router.push("/");
      })
      .catch(error => console.log("TCL: signin -> error", error));
  },
  tryAutoSignin({ commit }, signinRouter) {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    const expirationDate = localStorage.getItem("expirationDate");
    const now = new Date();
    if (now >= expirationDate) {
      return;
    }
    const userId = localStorage.getItem("userId");
    commit("authUser", {
      token: token,
      userId: userId
    });
    signinRouter.push("/");
  },
  storeUser({ commit, state }, userData) {
    if (!state.idToken) {
      return;
    }
    globalAxios
      .post("/users.json" + "?auth=" + state.idToken, userData)
      .then(res => console.log(res))
      .catch(error => console.log(error));
  },
  fetchUser({ commit, state }) {
    if (!state.idToken) {
      return;
    }
    globalAxios
      .get("/users.json" + "?auth=" + state.idToken)
      .then(res => {
        const data = res.data;
        const users = [];
        for (let key in data) {
          const user = data[key];
          user.id = key;
          users.push(user);
        }
        commit("storeUser", users[0]);
      })
      .catch(error => console.log(error));
  },
  logout({ commit, state }) {
    commit("clearAuthData");
    localStorage.removeItem("expirationDate");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    router.replace("/signin");
  }
};
