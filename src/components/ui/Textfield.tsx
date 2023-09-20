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
            <label className="ml-2 text-green-primary-900 font-semibold">
              {label}
            </label>
          </div>
          :
          <div/>
        }

          <div className="relative flex flex-row">

            <input
              className={classNames(
                " p-2 text-green-primary-900 w-full",
                "leading-tight focus:outline-none peer placeholder-gray-dark",
                (prefixIcon && type === "password")?"rounded-l-xl border-y border-r-0 border-l pl-10":"",
                (prefixIcon && type !== "password")?"rounded-xl border-t border-b border-r border-l pl-10":"",
                (!prefixIcon && type === "password")?"rounded-l-xl border-l border-t border-b border-r-0":"",
                (!prefixIcon && type !== "password")?"rounded-xl border":"",
                form.formState.errors[id]?"border-red-600 focus:border-red-600":"border-transparent before:bg-green-primary-100 focus:bg-green-primary-200 focus:shadow-md focus:border-green-primary-900",
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
                          "select-none absolute left-2 top-2 flex rounded-l-xl text-green-primary-700 justify-center items-center",
                          "",
                          form.formState.errors[id]?"":"peer-focus:bg-green-primary-200",
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
                    "flex rounded-r-xl p-2 justify-center items-center cursor-pointer text-green-primary-700",
                    "border-r border-t border-b",
                    form.formState.errors[id]?"border-red-600":"border-transparent peer-focus:bg-green-primary-200 peer-focus:border-green-primary-900",
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
