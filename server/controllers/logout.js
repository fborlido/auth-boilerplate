const logout = (req, res) => {
  return res
    .status(200)
    .cookie("access_token", "")
    .send("User logged out");
};

export default logout;
