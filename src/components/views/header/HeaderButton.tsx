import React, {MouseEventHandler} from 'react';
import {Link, useLocation } from "react-router-dom";
import classNames from "classnames";

export type HeaderButtonProps = {
  label: string,
  to: string,
  onClick?: MouseEventHandler<HTMLAnchorElement>,
}

const HeaderButton = ({label, to, onClick}: HeaderButtonProps) => {
  const location = useLocation();

  return (
    <Link onClick={onClick} to={to} className="group h-full flex flex-col items-center justify-between">
      <div/>
      <div className="text-xl text-green-primary-50 font-semibold">{label}</div>
      <div className={classNames(
        "transition duration-200 ease-in-out group-hover:opacity-100 w-full border-2 border-yellow-primary",
          ("/"+location.pathname.split("/")[1] !== to)?"opacity-0":""
        )}
      />
    </Link>
  );
}

export default HeaderButton;
