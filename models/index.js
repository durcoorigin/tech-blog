const User = require('./User');
const Post = require('./Post');

// User and Post Associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});


module.exports = { User, Post };