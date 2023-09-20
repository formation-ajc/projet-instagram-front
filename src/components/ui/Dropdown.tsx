import React, {ReactElement, useState} from 'react';
import classNames from "classnames";
import Button from "./Button";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonIcon from "@mui/icons-material/Person";


export type ButtonProps = {
    label: string,
    icon?: ReactElement,
    className?: string,
    children: ReactElement | ReactElement[],
}

const Dropdown = ({label, icon, children, className }: ButtonProps) => {

    const [deploy, setDeploy] = useState(false);
    const [opacity, setOpacity] = useState("opacity-0 hidden");

    const toogle = () => {
        if(deploy) {
            setOpacity("animate-leaving opacity-0 hidden")
        }
        else {
            setOpacity("animate-entering opacity-100 visible")
        }
        setDeploy(!deploy);
    }

    return (
        <>
            <div className={classNames("relative inline-block text-left", className)}>
                <div>
                    {/*<button onClick={toogle} type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">*/}
                    {/*    {label}*/}
                    {/*    <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">*/}
                    {/*        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />*/}
                    {/*    </svg>*/}
                    {/*</button>*/}

                    <Button
                        label={label}
                        onClick={toogle}
                        className={"bg-green-primary-700 hover:bg-green-primary-600 text-green-primary-50 p"}
                        prefixIcon={<PersonIcon/>}
                        suffixIcon={<KeyboardArrowDownIcon/>}
                    />
                </div>

                <div
                    className={classNames(
                        "bg-green-primary-50 absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-green-primary-700 ring-opacity-5 focus:outline-none",
                            opacity,
                        )}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex={-1}
                >
                        {children}
                </div>
            </div>
        </>
    );
}

export default Dropdown;
