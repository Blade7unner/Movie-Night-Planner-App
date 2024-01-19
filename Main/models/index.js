const User = require('./User');
const MovieNight = require('./MovieNight');
const Invitation = require('./Invitation');

User.hasMany(MovieNight, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Invitation.belongsTo(MovieNight, {
  foreignKey: '',
  onDelete: 'CASCADE'
});

MovieNight.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, MovieNight , Invitation };
