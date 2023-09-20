import React, {ReactElement} from 'react';
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

export type ButtonProps = {
  label: string,
  prefixIcon?: ReactElement,
  suffixIcon?: ReactElement,
  to?: string,
  link?: string,
  onClick?: Function,
  className?: string,
  type?: string,
}

const Button = ({label, prefixIcon, suffixIcon, to, link, className, type, onClick }: ButtonProps) => {
  const navigate  = useNavigate();

  function handleClick() {
    if (onClick) {
      onClick();
    }
    if (to) {
      navigate(to);
    }
    if (link) {
      window.open(link, "_blank");
    }
  }

  return (
    <>
      <div
        className={classNames(
          "relative select-none cursor-pointer flex flex-row justify-center items-center gap-2 w-full",
          "rounded-xl transition duration-300 ease-in-out",
          className
        )}
      >
        <div
          className={classNames(
            "absolute left-3 z-0"
          )}
        >
          {prefixIcon}
        </div>
        <input
          className={classNames(
            "cursor-pointer flex-1 py-2 px-3 z-10 ",
            (prefixIcon)?"pl-10 mr-1":"",
            (suffixIcon)?"pr-10 ml-1":"",
          )}
          onClick={handleClick}
          type={type?type:"button"}
          value={label}
        >
        </input>
        <div
            className={classNames(
                "absolute right-3 z-0"
            )}
        >
          {suffixIcon}
        </div>
      </div>
    </>
  );
}

export default Button;
