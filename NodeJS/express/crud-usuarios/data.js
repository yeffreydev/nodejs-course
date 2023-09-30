const data = {
  id: 0,
  users: [],
  addUser: function (user) {
    const newUser = { ...user, id: data.id };
    data.users.push(newUser);
    data.id++;
    return newUser;
  },
  findUserById(id) {
    const foundUser = data.users.find((user) => user.id == id);
    if (!foundUser) return null;
    return foundUser;
  },
  findUsers() {
    return data.users;
  },
  updateUser(newUser) {
    data.users = data.users.map((user) => {
      if (user.id == newUser.id) {
        user = newUser;
      }
      return user;
    });
  },
  deleteUserById(id) {
    data.users = data.users.filter((user) => user.id != id);
  },
};

module.exports = data;
