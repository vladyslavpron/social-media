import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  // user: null,
  user: {
    _id: "6238c8d9338a1d3642e64866",
    username: "jane",
    email: "jane@gmail.com",
    profilePicture: "person/1.jpeg",
    coverPicture: "",
    followins: [],
    isAdmin: false,
    followers: [],
    followings: ["6238c47fc4cf0112e3dd4f49"],
    city: "Lviv",
    desc: "HELLO THERE IMA JANE",
    from: "India",
    relationship: { $numberInt: "2" },
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
