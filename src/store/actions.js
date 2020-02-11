import axios from "./../plugins/axios-auth";
import globalAxios from "axios";
export default {
  signup({ commit, dispatch }, authData) {
    // TODO Change Post request with the backend
    axios
      .post("/accounts:signUp?key=AIzaSyDJe-8SNbW0ky2z0xDs1lm2VZfIFfZFsGQ", {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      .then(res => {
        console.log("TCL: signup -> res", res);
        commit("authUser", {
          token: res.data.idToken,
          userId: res.data.localId
        });
        dispatch("storeUser", authData);
        commit("showDrawer");
      })
      .catch(error => console.log(error));
  },
  signin({ commit }, authData) {
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
        console.log("TCL: signin -> res", res);
        commit("authUser", {
          token: res.data.idToken,
          userId: res.data.localId
        });
        commit("showDrawer");
      })
      .catch(error => console.log("TCL: signin -> error", error));
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
        console.log(res);
        const data = res.data;
        const users = [];
        for (let key in data) {
          const user = data[key];
          user.id = key;
          users.push(user);
        }
        console.log(users);
        commit("storeUser", users[0]);
      })
      .catch(error => console.log(error));
  }
};
