import React, {Fragment, ReactElement, useRef, useState} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import classNames from "classnames";
import {AddCircleOutline} from "@mui/icons-material";
import Button from "./Button";

export type ModalProps = {
    label: string,
    prefixIcon?: ReactElement,
    suffixIcon?: ReactElement,
    className?: string,
    children?: ReactElement | ReactElement[]
}

type ChildWithSetOpenProps = {
    openModal: () => void;
    closeModal: () => void; // Include closeModal in the type
};
const Modal = ({label, prefixIcon, suffixIcon, className, children }:ModalProps) => {
    const [open, setOpen] = useState(false)

    const cancelButtonRef = useRef(null)

    const closeModal = () => {
        setOpen(false);
    };

    const openModal = () => {
        setOpen(true);
    };

    // Pass setOpen and closeModal as props to children
    const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            const childProps: ChildWithSetOpenProps = { openModal, closeModal };
            return React.cloneElement(child, childProps);
        }
        return child;
    });

    return (
        <>
            <Button
                label={label}
                prefixIcon={prefixIcon}
                suffixIcon={suffixIcon}
                className={className}
                onClick={()=>setOpen(true)}
            />
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-primary-950 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-gray-primary-950">
                                        {childrenWithProps}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}

export default Modal;