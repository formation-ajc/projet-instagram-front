import React, { ReactElement } from 'react';
// import Logo from "../../assets/svg/logo_circle.svg";
import classNames from "classnames";

export type AuthProps = {
  children?: ReactElement | ReactElement[]
  className?: string
  [key: string]: any
}

const Auth = ({ children }: AuthProps) => {
  return (
    <div className={classNames(
        "flex flex-1 bg-white items-center justify-center",
    )}>
      <div className={classNames(
          "flex border-gray-primary-200 border w-[348px]",
      )}>
        <div className="flex flex-col flex-1 p-5 items-center">
          <div className="flex flex-row items-center justify-center h-min gap-3 mb-10">
            {/*<img className="h-24 select-none" src={Logo} alt=""/>*/}
            <div className="text-5xl font-bold select-none font-instagram">Instagram</div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Auth;
