import { ALL_USERS } from "../helpers/constants";
import {
  getItemsFromLocalStorage,
  setObjectIntoLocalStorage,
} from "../helpers/localstorage";

const getUsers = () => {
  return new Promise((resolve, reject) => {
    const users = getItemsFromLocalStorage(ALL_USERS);
    if (!users) {
      reject("No users found.");
    } else {
      resolve(users);
    }
  });
};

const getUserById = (id) => {
  return new Promise((resolve, reject) => {
    const users = getItemsFromLocalStorage(ALL_USERS);
    const userById = users.find((user) => user.id === id);
    if (userById) {
      resolve(userById);
    } else {
      reject("No matching user not found.");
    }
  });
};

const getUserByByEmailId = (emailId) => {
  return new Promise((resolve, reject) => {
    const users = getItemsFromLocalStorage(ALL_USERS);
    const userById = users.find((user) => user.email === emailId);
    if (userById) {
      resolve(userById);
    } else {
      reject(userById);
    }
  });
};

const updateUser = (userId, updateUserDetails) => {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          let allUsers = getItemsFromLocalStorage(ALL_USERS);
          const userToBeEdited = await getUserById(userId);
          
          if (userToBeEdited) {
            const newUserDetails = { ...userToBeEdited, ...updateUserDetails };
            const indexToBeEdited = allUsers.findIndex(
              (user) => user.id === userId
            );
            if (indexToBeEdited === -1) {
              reject({ message: "Requested User not found" });
            } else {
              allUsers[indexToBeEdited] = newUserDetails;
              setObjectIntoLocalStorage(ALL_USERS, allUsers);
              resolve({ data: newUserDetails, message: "User details updated" });
            }
          } else {
            reject({ message: "Requested User not found" });
          }
        } catch (error) {
          reject(error);
        }
      })();
    });
  };
  

export default { getUsers, getUserById, getUserByByEmailId, updateUser };
