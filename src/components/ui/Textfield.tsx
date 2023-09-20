import React, {ReactElement, useState} from 'react';
import classNames from "classnames";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { UseFormReturn } from 'react-hook-form'


export type TextfieldProps = {
  form: UseFormReturn<any>
  id: string,
  required?: boolean,
  label?: string,
  placeholder?: string,
  prefixIcon?: ReactElement,
  type?: "text" | "password" | "date"
  className?: string,
  backgroundColor?: string,
}

const Textfield = ({form, id, label, placeholder, prefixIcon, type, className, required, backgroundColor}: TextfieldProps) => {

  const [visibility, setVisibility] = useState(false);
  const [textVisibility, setTextVisibility] = useState(type);

  function visibilityToggle() {
    setVisibility(!visibility);
    setTextVisibility(visibility?"password":"text");
  }

  return (
    <>
      <div className="flex flex-col mb-6 w-full">
        {
          label?
          <div className="mb-0.5">
            <label className="ml-2 text-black-primary font-semibold">
              {label}
            </label>
          </div>
          :
          <div/>
        }

          <div className="relative flex flex-row">

            <input
              className={classNames(
                "p-2 text-black-primary w-full",
                "leading-tight focus:outline-none peer placeholder-gray-dark border border-gray-primary-200",
                (prefixIcon && type === "password")?"rounded-l-sm border-y border-r-0 border-l pl-10":"",
                (prefixIcon && type !== "password")?"rounded-sm border-t border-b border-r border-l pl-10":"",
                (!prefixIcon && type === "password")?"rounded-l-sm border-l border-t border-b border-r-0":"",
                (!prefixIcon && type !== "password")?"rounded-sm border":"",
                form.formState.errors[id]?
                    "border-red-600 focus:border-red-600":
                    "before:bg-green-primary-100 focus:border-gray-primary-500",
                className,
                backgroundColor
              )}
              id={id}
              placeholder={placeholder}
              type={textVisibility}
              maxLength={300}
              {...form.register(id, { required: required, maxLength: 300 })}
            />

            {
              prefixIcon?
                  <div
                      tabIndex={-1}
                      className={classNames(
                          "select-none absolute left-2 top-2 flex rounded-l-sm text-gray-primary-700 justify-center items-center",
                          "",
                          form.formState.errors[id]?"":"",
                          backgroundColor
                      )}
                  >
                    {prefixIcon}
                  </div>
                  :
                  <div/>
            }

            {
              type === "password" ?
                <div
                    tabIndex={-1}
                  onClick={visibilityToggle}
                  className={classNames(
                    "flex rounded-r-sm p-2 justify-center items-center cursor-pointer text-gray-primary-700",
                    "border-r border-t border-b border-gray-primary-200",
                    form.formState.errors[id]?"border-red-600":"peer-focus:border-gray-primary-500",
                    backgroundColor
                  )}
                >
                  { visibility?<VisibilityIcon/>:<VisibilityOffIcon/> }
                </div>
                :
                <div/>
            }
          </div>
        </div>

    </>
  );
}

export default Textfield;
