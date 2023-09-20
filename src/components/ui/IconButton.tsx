import React, {ReactElement} from 'react';
import classNames from "classnames";


export type IconButtonProps = {
    icon: string | ReactElement,
    link?: string,
    className?: string,
}

const IconButton = ({ icon, link, className }: IconButtonProps) => {

  function handleClick() {
    if (link) {
      window.open(link, "_blank");
    }
  }

  return (
    <>
      <div
        onClick={handleClick}
        className={classNames(
          "select-none cursor-pointer rounded-lg p-2 w-auto",
          className
          // "select-none cursor-pointer flex flex-col justify-center items-center h-10 w-10 border border-yellow-primary rounded-3xl",
          // "transition duration-300 ease-in-out hover:bg-yellow-primary-50"
        )}
      >
          {typeof icon === "string"?<img className="h-6 w-6" src={icon} alt=""/>:icon}
      </div>
    </>
  );
}

export default IconButton;
