import { SHA256 } from "crypto-js";
import { ALL_USERS } from "../helpers/constants";
import { getItemsFromLocalStorage } from "../helpers/localstorage";

const login = (loginCredentials) => {
    return new Promise((resolve, reject) => {
        const users =
        getItemsFromLocalStorage(ALL_USERS);

        if(!users){
           return  reject("No users exist");
        }
         const userById = users.find((user) => user.email === loginCredentials.email);
         console.log(userById.password);
         console.log(loginCredentials.password)

         if(!userById){
            return reject({message: "User with email id not found"})
         }

         if(userById.password !== SHA256(loginCredentials.password).toString()){
            return reject({message: "Wrong password entered"})
         }

         return resolve({id : userById.id, message : "User loggen in successfully."})

        
        
    })

}


export {login}