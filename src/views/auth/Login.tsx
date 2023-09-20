import React from 'react';
import Textfield from "../../components/ui/Textfield";
import Email from "@mui/icons-material/Email";
import LockIcon from '@mui/icons-material/Lock';
import Button from "../../components/ui/Button";
import LoginIcon from '@mui/icons-material/Login';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import Auth from "./Auth";
import {useForm} from 'react-hook-form'
import classNames from "classnames";
import {UserAuth} from "../../models/UserModel";
import {AuthService} from "../../services/Auth";
import {toast} from 'react-toastify';
import {Link, useNavigate} from "react-router-dom";
import User from "../../classes/User";

const Login = () => {
    const navigate  = useNavigate();
    const form = useForm<UserAuth>()
    const authService = new AuthService();

    const submit = (data: UserAuth) => {

        authService.login(data)
        ?.then((e) => {
          console.log(e.data)
          const { accessToken, refreshToken, email, firstname, lastname } = e.data;
          User.setUser({accessToken, refreshToken, email, firstname, lastname})
          // localStorage.setItem('email', email);
          // localStorage.setItem('firstname', firstname);
          // localStorage.setItem('lastname', lastname);
          // localStorage.setItem('accessToken', accessToken);
          // localStorage.setItem('refreshToken', refreshToken);
          navigate("/");
        })
        .catch((error) => {
            console.log(error.response.data)
            toast.error(error.response.data.message);
        });
    }

  return (
    <Auth>
      <form
        onSubmit={form.handleSubmit(submit)}
        className="flex flex-col rounded-r-xl items-center justify-center h-full"
      >
        <Textfield
          form={form}
          id="email"
          placeholder="Email"
          type="text"
          prefixIcon={<Email/>}
        />
        <Textfield
          form={form}
          id="password"
          placeholder="Password"
          type="password"
          prefixIcon={<LockIcon/>}
        />
        <Button
          type="submit"
          label="Sign in"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold mb-2"
        />
          <div className={"flex w-full flex-row gap-6 items-center my-2"}>
              <hr className={"flex-1 border-gray-primary-200"}/>
              <div className={"text-gray-primary-700"}>OR</div>
              <hr className={"flex-1 border-gray-primary-200"}/>
          </div>
          <div className={"flex w-full flex-row gap-2 items-center text-gray-primary-700 justify-center"}>
              <div className={"text-gray-primary-700"}>Don't have an account?</div>
              <Link to="/register">
                  <div className={"text-blue-500"}>Subscribe</div>
              </Link>
          </div>
        {/*<Button*/}
        {/*  label="Create account"*/}
        {/*  to="/register"*/}
        {/*  prefixIcon={<AccessibilityNewIcon  />}*/}
        {/*  className={classNames(*/}
        {/*      "bg-yellow-primary-500 text-yellow-primary-50 font-bold",*/}
        {/*      "hover:bg-yellow-primary-600"*/}
        {/*  )}*/}
        {/*/>*/}
      </form>
    </Auth>
  );
}

export default Login;
