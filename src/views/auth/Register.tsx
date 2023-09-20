import React from 'react';
import Textfield from "../../components/ui/Textfield";
import Email from "@mui/icons-material/Email";
import LockIcon from '@mui/icons-material/Lock';
import Button from "../../components/ui/Button";
import LoginIcon from '@mui/icons-material/Login';
import Auth from "./Auth";
import { useForm } from 'react-hook-form'
import {AuthService} from "../../services/Auth";
import {UserRegister} from "../../models/UserModel";
import classNames from "classnames";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const Register = () => {
  const navigate  = useNavigate();
  const form = useForm<UserRegister>()
  const authService = new AuthService();

  const submit = (data: UserRegister) => {
    authService.register(data)
      ?.then((e) => {
        console.log(e.data)
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
          className="flex flex-col p-5 rounded-r-xl items-center justify-center h-full sm:w-2/3"
      >
        <div className="flex flex-row text-3xl font-bold mb-5 text-green-primary-50">
          Register
        </div>
        <div className="flex flex-row justify-center gap-3 w-full">
          <Textfield
              form={form}
              id="firstname"
              placeholder="Firstname"
              type="text"
              required={true}
              backgroundColor={"bg-green-primary-50"}
          />
          <Textfield
              form={form}
              id="lastname"
              placeholder="Lastname"
              type="text"
              required={true}
              backgroundColor={"bg-green-primary-50"}
          />
        </div>
        <Textfield
            form={form}
            id="email"
            placeholder="Email"
            type="text"
            prefixIcon={<Email/>}
            required={true}
            backgroundColor={"bg-green-primary-50"}
        />
        <Textfield
            form={form}
            id="password"
            placeholder="Password"
            type="password"
            prefixIcon={<LockIcon/>}
            required={true}
            backgroundColor={"bg-green-primary-50"}
        />
        <Textfield
            form={form}
            id="confirmPassword"
            placeholder="Confirm password"
            type="password"
            prefixIcon={<LockIcon/>}
            required={true}
            backgroundColor={"bg-green-primary-50"}
        />
        <Button
            label="Sign up"
            // to="/"
            prefixIcon={<LoginIcon/>}
            className="bg-green-primary-700 hover:bg-green-primary-600 text-green-primary-50 font-bold mb-2"
            type="submit"
        />
        <Button
            label="Cancel"
            to="/login"
            // icon={<AccessibilityNewIcon  />}
            className={classNames(
                "bg-yellow-primary-500 text-yellow-primary-50 font-bold",
                "hover:bg-yellow-primary-600"
            )}
        />
      </form>
    </Auth>
  );
}

export default Register;
