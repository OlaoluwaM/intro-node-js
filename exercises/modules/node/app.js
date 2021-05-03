const api = require('./api');

module.exports = {
  showPostsForCurrentUser(userId, callback) {
    api.getPostsForUser(userId, posts => callback(posts));
  },
  showUserProfile(userId, callback) {
    api.getUserById(userId, user => callback(user));
  },
};
