const data = require('./data');

module.exports = {
  getUserById(id, callback) {
    setTimeout(() => {
      const user = data.users.find(user => user.id === id);
      callback(user);
    }, 150);
  },

  getPostsForUser(userId, callback) {
    setTimeout(() => {
      const posts = data.posts.filter(post => post.createdBy === userId);
      callback(posts);
    }, 150);
  },
};
