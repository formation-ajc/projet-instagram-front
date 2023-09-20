import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import HeaderButton from "./HeaderButton";
import { SwipeableDrawer } from '@mui/material';
import Button from "../../ui/Button";
import PersonIcon from "@mui/icons-material/Person";
import User from "../../../classes/User";
import {ConfirmationNumber, ManageAccounts} from "@mui/icons-material";

const SwipeableTemporaryDrawer = () => {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setOpen(open);
  };

  const list = () => (
    <div
      className="h-full flex flex-col w-72 bg-green-primary-700  py-5 justify-between"
      role="presentation"
      // onClick={toggleDrawer( false)}
      // onKeyDown={toggleDrawer(false)}
    >
      <div className="flex flex-1 flex-col gap-6">
        <HeaderButton onClick={toggleDrawer( false)} label="Home" to="/"/>
        <HeaderButton onClick={toggleDrawer( false)} label="Search Ticket" to="/tickets"/>
      </div>
      <div className="p-2">
        {(!User.getUser().accessToken)?
            <div className="w-full p-3 flex flex-col justify-center items-center gap-1" role="none">
              <Button
                  label="Sign in"
                  to="/login"
                  className="bg-green-primary-500 hover:bg-green-primary-600 text-green-primary-50 border border-transparent hover:shadow-sm"
              />
              <Button
                  label="Sign up"
                  to="/register"
                  className="bg-yellow-primary-500 text-yellow-primary-50 hover:bg-yellow-primary-600 border border-transparent hover:shadow-sm"
              />
            </div>
            :
            <div>
              <div className="w-full p-3 flex flex-col justify-center items-center gap-3" role="none">
                <Button
                    label="My profile"
                    to="/user/profile"
                    prefixIcon={<ManageAccounts/>}
                    className="bg-blue-primary-500 hover:bg-blue-primary-400 text-green-primary-50 border border-transparent hover:border-yellow-primary hover:shadow-sm"
                />
                <Button
                    label="My tickets"
                    to="/user/purchased"
                    prefixIcon={<ConfirmationNumber/>}
                    className="bg-blue-primary-500 hover:bg-blue-primary-400 text-green-primary-50 border border-transparent hover:border-yellow-primary hover:shadow-sm"
                />
              </div>
              <hr/>
              <div className="flex flex-col justify-center items-center gap-2" role="none">
                <div className="text-green-primary-50 block px-4 py-2 text-sm">{User.getUser().email}</div>
                <Button
                    label="Logout"
                    to="/"
                    onClick={User.disconnect}
                    className="bg-red-500 hover:bg-red-600 text-red-50 border border-transparent hover:shadow-sm"
                />
              </div>
            </div>
        }
      </div>

    </div>
  );

  return (
    <div>
      <React.Fragment key="right">
        <MenuIcon fontSize="large" className="cursor-pointer text-contrast" onClick={toggleDrawer(true)}/>
        <SwipeableDrawer
          anchor="right"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list()}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

export default SwipeableTemporaryDrawer;
