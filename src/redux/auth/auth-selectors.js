const getIsLoggedIn = state => state.auth.isLoggedIn
const getUsername = state => state.auth.user.getUsername
const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingCurrent,
};
export default authSelectors;