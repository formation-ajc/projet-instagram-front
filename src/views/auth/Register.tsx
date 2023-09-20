import React from 'react';
import Textfield from "../../components/ui/Textfield";
import Email from "@mui/icons-material/Email";
import LockIcon from '@mui/icons-material/Lock';
import Button from "../../components/ui/Button";
import Auth from "./Auth";
import { useForm } from 'react-hook-form'
import {AuthService} from "../../services/Auth";
import {UserRegister} from "../../models/UserModel";
import {toast} from "react-toastify";
import {Link, useNavigate} from "react-router-dom";

const Register = () => {
  const navigate  = useNavigate();
  const form = useForm<UserRegister>()
  const authService = new AuthService();

  const submit = (data: UserRegister) => {
    authService.register(data)
      ?.then((e) => {
        console.log(e.data)
        toast.success("Successfully registered");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response.data)
        toast.error(error.response.data.message);
      })
  };

  return (
    <Auth>
      <form
          onSubmit={form.handleSubmit(submit)}
          className="flex flex-col rounded-r-xl items-center justify-center h-full"
      >
        <div className="flex flex-row text-md font-semibold mb-5 text-gray-primary-700 justify-center items-center text-center">
          Sign up to see your friends' photos and videos.
        </div>
        <div className="flex flex-row justify-center gap-3 w-full">
          <Textfield
              form={form}
              id="firstname"
              placeholder="Firstname"
              type="text"
              required={true}
          />
          <Textfield
              form={form}
              id="lastname"
              placeholder="Lastname"
              type="text"
              required={true}
          />
        </div>
        <Textfield
            form={form}
            id="email"
            placeholder="Email"
            type="text"
            prefixIcon={<Email/>}
            required={true}
        />
        <Textfield
            form={form}
            id="password"
            placeholder="Password"
            type="password"
            prefixIcon={<LockIcon/>}
            required={true}
        />
        <Textfield
            form={form}
            id="confirmPassword"
            placeholder="Confirm password"
            type="password"
            prefixIcon={<LockIcon/>}
            required={true}
        />
        <div className="mb-6 flex flex-col gap-3 text-xs text-gray-primary-700 justify-center items-center text-center">
          <div>
            People who use our service may have imported your details on Instagram.
          </div>
          <div>
            By registering, you agree to our Terms and Conditions. Find out how we collect, use and share your data by reading our Privacy Policy and how we use cookies and similar technologies by consulting our Cookie Usage Policy.
          </div>
        </div>
        <Button
            label="Create"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold mb-2"
            type="submit"
        />
        <div className={"flex w-full flex-row gap-6 items-center my-2"}>
          <hr className={"flex-1 border-gray-primary-200"}/>
          <div className={"text-gray-primary-700"}>OR</div>
          <hr className={"flex-1 border-gray-primary-200"}/>
        </div>
        <div className={"flex w-full flex-row gap-2 items-center text-gray-primary-700 justify-center"}>
          <div className={"text-gray-primary-700"}>Do you have an account?</div>
          <Link to="/login">
            <div className={"text-blue-500"}>Login</div>
          </Link>
        </div>
      </form>
    </Auth>
  );
}

export default Register;
