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
        "flex flex-1 bg-green-primary-50 items-center justify-center",
        "sm:p-16 md:p-28 lg:px-60 xl:px-80 2xl:px-96"
    )}>
      <div className={classNames(
          "flex flex-1 bg-gradient-to-br from-green-primary-900 to-green-primary-400 p-3 h-full",
          "sm:rounded-3xl"
      )}>
        <div className="flex flex-col flex-1 p-5 items-center">
          <div className="flex flex-row items-center justify-center h-min gap-3">
            {/*<img className="h-24 select-none" src={Logo} alt=""/>*/}
            <div className="text-4xl sm:text-5xl font-bold select-none">BUY<span className="text-green-primary-50">BACK</span></div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Auth;
