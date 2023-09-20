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
    children: ReactElement | ReactElement[],
}

const Select = ({form, id, label, placeholder, prefixIcon, className, required, backgroundColor, children}: TextfieldProps) => {

    return (
        <>
            <div className="flex flex-col mb-6 w-full cursor-pointer">
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

                    <select
                        className={classNames(
                            " p-2 text-green-primary-900 w-full cursor-pointer",
                            "leading-tight focus:outline-none peer placeholder-gray-dark",
                            (prefixIcon)?"rounded-xl border-t border-b border-r border-l pl-10":"",
                            (!prefixIcon)?"rounded-xl border":"",
                            form.formState.errors[id]?"border-red-600 focus:border-red-600":"border-transparent before:bg-green-primary-100 focus:bg-green-primary-200 focus:shadow-md focus:border-green-primary-900",
                            className,
                            backgroundColor
                        )}
                        id={id}
                        placeholder={placeholder}
                        {...form.register(id, { required: required, maxLength: 300 })}
                    >
                        {children}
                    </select>


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
                </div>
            </div>

        </>
    );
}

export default Select;
