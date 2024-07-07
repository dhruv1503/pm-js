import { ALL_USERS } from "../server/constants";
import { v4 as uuid } from "uuid";
import { getItemsFromLocalStorage, setObjectIntoLocalStorage } from "../server/helpers/localstorage";

const signup = (user) => {
    return new Promise((resolve, reject) => {
      (async() => {
        
        const users =
        getItemsFromLocalStorage(ALL_USERS);
      if (users) {
        const userById = users.find(
          (existingUser) => existingUser.email === user.email
        );
        console.log(user);
        console.log(userById)
        if (userById) {
          reject("Email id alredy registered.");
        } else {
          const id = uuid();
          const projects = [{id : uuid(), name : "Unassigned", tasks : [], count : 0}]
          users.push({ ...user, id, projects });
          setObjectIntoLocalStorage(ALL_USERS, users);
          resolve("Registration is successful.");
        }
      } else {
        const id = uuid();
        const projects = [{id : uuid(), name : "Unassigned", tasks : [], count : 0}]
        const newUser = [{ ...user, id, projects }];
        setObjectIntoLocalStorage(ALL_USERS, newUser);
        resolve("Registration is successful.");
      }
      })()
      
    });
  };

  export {signup}