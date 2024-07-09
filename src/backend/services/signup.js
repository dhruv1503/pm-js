import { ALL_USERS } from "../helpers/constants";
import { v4 as uuid } from "uuid";
import { getItemsFromLocalStorage, setObjectIntoLocalStorage } from "../helpers/localstorage";
import { SHA256 } from "crypto-js";

const signup = (user) => {
  console.log("params", user)
    return new Promise((resolve, reject) => {
      (async() => {
        
        const users =
        getItemsFromLocalStorage(ALL_USERS);
      if (users) {
        console.log(user.email)
        const userById = users.find(
          (existingUser) => existingUser.email === user.email
        );
        console.log(user);
        console.log(userById)
        if (userById) {
          reject("Email id already registered.");
        } else {
          const id = uuid();
          const hashedPassword = SHA256(user.password).toString();
          user.password = hashedPassword
          
          const projects = [{id : uuid(), name : "Unassigned", tasks : [], count : 0}]
          console.log({...user,password : hashedPassword, id, projects })
          users.push({ ...user, password : hashedPassword, id, projects });
          setObjectIntoLocalStorage(ALL_USERS, users);
          resolve("Registration is successful.");
        }
      } else {
        const id = uuid();
        const projects = [{id : uuid(), name : "Unassigned", tasks : [], count : 0}]
        const hashedPassword = SHA256(user.password).toString();
        user.password = hashedPassword

        const newUser = [{ ...user, id, projects }];
        console.log("newUser", newUser)
        setObjectIntoLocalStorage(ALL_USERS, newUser);
        resolve("Registration is successful.");
      }
      })()
      
    });
  };

  export {signup}