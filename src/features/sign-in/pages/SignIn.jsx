import { Link } from "react-router-dom";
import { Input } from "../../../components/sharedComponents/Input";
import { Navbar } from "../../../components/sharedComponents/Navbar";
import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { EMAIL_REGEX } from "../../../constants/regex";
import toast from "react-hot-toast";
import { SHA256 } from "crypto-js";
import { login } from "../../../backend/services/login";

// type LoginForm = {
//   email: string;
//   password: string;
// };
// type LoginErrors = {
//   email: boolean;
//   password: boolean;
// };
// type LoginErrorMessage = {
//   email: string;
//   password: string;
// };

export const SignIn = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [loginErrors, setLoginErrors] = useState({
    email: false,
    password: false,
  });
  const [loginErrorMessages, setLoginErrorMessages] =
    useState({ email: "", password: "" });
//   const usersDb = useSelector(
//     (state: { usersDatabase: any; user: any; project: any }) =>
//       state.usersDatabase
//   );
//   const dispatch = useDispatch()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prevState) => ({ ...prevState, [name]: value }));
    setLoginErrors((prevState) => ({ ...prevState, [name]: "" }));
    setLoginErrorMessages((prevState) => ({ ...prevState, [name]: false }));
  };

  const emailInputValidation = (emailInput) => {
    if (!emailInput) {
      return "Email is required.";
    }
    if (!EMAIL_REGEX.test(emailInput)) {
      return "Enter a valid email address.";
    }
    return null;
  };

  const errorHandler = () => {
    let errorMessages = {
      email: "",
      password: "",
    };
    const hasError  = {
      email: false,
      password: false,
    };
    const emailError = emailInputValidation(loginForm.email.trim());

    if (emailError) {
      errorMessages.email = emailError;
      hasError.email = true;
    }
    if (!loginForm.password) {
      errorMessages.password = "Password is required.";
      hasError.password = true;
    }

    setLoginErrorMessages(errorMessages);
    setLoginErrors(hasError);
    return hasError;
  };

  const submitButtonHandler = async(e) => {
    e.preventDefault();
//     const errors = errorHandler();
//     if (Object.values(errors).some((error) => error)) {
//       return;
//     }
//     // const accountWithMatchingEmail = existingUser(loginForm.email)
//     // if(!accountWithMatchingEmail){
//     //   toast.dismiss()
//     //   return toast.error("Email address not found.")
//     // }
//     // if(!isPasswordMatching(loginForm.password, accountWithMatchingEmail)){
//     //   toast.dismiss()
//     //  return toast.error("Incorrect password entered.")
//     // }
//     // login logic
//     // generate JWT
//     // dispatch({type : "LOGIN_USER" , payload : accountWithMatchingEmail.id})
//     // // add to localstorage
//     // // redirect user to overview page
//     // toast.dismiss()
//     // toast.success("Login successful")
try{
 const data =  await loginUser();
 console.log(data)
//  dispatch({type: "LOGIN_USER", payload : data.id})
 toast.success(data?.message)
}
catch(error){
  toast.error(error.message)
}
   
    
  };

  const loginUser = async() => {
    try{
      const data = await login(loginForm);
      return data
    }
    catch(error){
      throw error
    }
  }

  // const existingUser = (email: string) : any => {
  //   console.log(usersDb)
  //   const matchingAccount = usersDb.find((user : any) => (user.userDetails.emailId === email));
  //   console.log(matchingAccount)
  //   return matchingAccount
  // } 

  // const isPasswordMatching = (password : string, user: any) => {
  //    return user.userDetails.password === SHA256(password).toString()
  // }

  useEffect(() => {
    console.log(SHA256("123456").toString())
  }, [])

  return (
    <div className="">
      <Navbar />
      <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] h-full max-h-[calc(100vh-5rem)]">
        <div className="justify-center bg-white px-10 py-12 w-96 rounded shadow-xl">
          <div className="mb-2">
            <h1 className="text-2xl font-bold text-gray-900">Sign In</h1>
            <p className="text-md text-slate-400">
              {" "}
              to continue to Task Flo
            </p>
          </div>
          <form>
            <div className="flex flex-col gap-4">
              <Input
                type="email"
                className="rounded border-2 px-1 py-2 border-zinc-400"
                label="Email"
                placeholder="Enter email"
                name="email"
                onChange={handleInputChange}
                value={loginForm.email}
                errorMessage={loginErrorMessages.email}
                error={loginErrors.email}
              />
              <Input
                type="password"
                className="rounded border-2 px-1 py-2 border-zinc-400"
                label="Password"
                placeholder="Enter password"
                name="password"
                onChange={handleInputChange}
                value={loginForm.password}
                errorMessage={loginErrorMessages.password}
                error={loginErrors.password}
              />

              <button
                type="submit"
                className=" px-3 py-2 disabled:cursor-not-allowed disabled:opacity-10  bg-[#636bff] text-neutral-50 hover:bg-slate-200 hover:text-slate-900 rounded transition-colors ease-in-out delay-75 duration-300 active:bg-slate-400 active:scale-y-95 active:scale-x-95"
                onClick={submitButtonHandler}
                disabled={!(loginForm.email && loginForm.password)}
              >
                Submit
              </button>

              <p>
                Not Registered?{" "}
                <Link className="underline hover:no-underline" to="/sign-up">
                  {" "}
                  Click here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};



