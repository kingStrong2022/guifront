const users = [];
function getFaceHtml(){
	let list=['20180414170003.jpg',
	'20180414165754.jpg',
	'20180414165815.jpg',
	'20180414165821.jpg',
	'20180414165827.jpg',
	'20180414165834.jpg',
	'20180414165846.jpg',
	'20180414165855.jpg',
	'20180414165909.jpg',
	'20180414165914.jpg',
	'20180414165920.jpg',
	'20180414165927.jpg',
	'20180414165936.jpg',
	'20180414165942.jpg',
	'20180414165947.jpg',
	'20180414165955.jpg'];
	list=list.map((item) => {
        return `${process.env.HOST}/static/img/avatar/${item}`;
      });
	  const len=list.length;
	  const index=parseInt(Math.random()*len);
	  return list[index];
}
// Join user to chat
function userJoin(id, username, room) {
  const user = { id, username, room ,avatarUrl:getFaceHtml()}

  users.push(user);

  return user;
}

// Get current user
function getCurrentUser(id) {
  return users.find(user => user.id === id);
}

// User leaves chat
function userLeave(id) {
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

// Get room users
function getRoomUsers(room) {
  return users.filter(user => user.room === room);
}

module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
};
