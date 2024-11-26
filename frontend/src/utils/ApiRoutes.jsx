const ApiRoutes = {
  LOGIN: {
    path: "/auth/login",
    authenticate: false,
  },
  SIGNUP: {
    path: "/auth/createUser",
    authenticate: false,
  },
  ForgotPassword: {
    path: "/auth/forgotPassword",
    authenticate: false,
  },
  RESETPASSWORD: {
    path: "/auth/resetPassword",
    authenticate: false,
  },
};

export default ApiRoutes;
