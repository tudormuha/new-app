import { useSelector, useDispatch } from "react-redux";
import { signIn, signOut } from "./actions/index";

const baseurl = "http://localhost:3030/";

function AuthCheck() {
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  if (!token) {
    console.log("No token saved");
    return;
  }
  let h = new Headers();
  h.append("Authorization", `Bearer ${token}`);
  let url = baseurl + "test";
  let req = new Request(url, {
    headers: h,
    method: "GET",
  });

  fetch(req)
    .then((res) => res.json())
    .then((content) => {
      if (content.code > 0) {
        //error happened
        localStorage.removeItem("token");
        console.log("fail" + content.code);
        dispatch(signOut());
      } else {
        console.log("success" + content.code);
        dispatch(signIn());
      }
    });

  return isLogged;
}

export default AuthCheck;
