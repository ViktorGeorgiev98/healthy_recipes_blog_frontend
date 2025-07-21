export const setLocalStorageLogin = (data) => {
  localStorage.setItem("token", data.access_token);
  localStorage.setItem("tokenType", data.token_type);
  localStorage.setItem("userEmail", data.email);
};

export const removeLocalStorageLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("tokenType");
  localStorage.removeItem("userEmail");
};
