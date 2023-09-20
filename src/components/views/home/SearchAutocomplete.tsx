import React, {Fragment, ReactElement, useEffect, useState} from 'react';
import {UseFormReturn} from 'react-hook-form'
import {Autocomplete} from "@mui/material";
import { CircularProgress } from '@mui/material';
import {Search} from "@mui/icons-material";
import classNames from "classnames";


export type SearchAutocompleteProps = {
    form: UseFormReturn<any>
    id: string,
    required?: boolean,
    label?: string,
    placeholder?: string,
    prefixIcon?: ReactElement,
    type?: "text" | "password"
    className?: string,
}

const SearchAutocomplete = () => {
    const [open, setOpen] = useState(false);
    const result : { title: string; year: number; }[] = [];
    const [options, setOptions] = useState(result);
    const loading = open && options.length === 0;

    useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        const delay = (ms: number | undefined) => new Promise(
            resolve => setTimeout(resolve, ms)
        );

        (async () => {
            await delay(1e3); // For demo purposes.

            if (active) {
                setOptions([...topFilms]);
            }
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <>
            <Autocomplete
                id="asynchronous-demo"
                sx={{ width: "100%" }}
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                isOptionEqualToValue={(option, value) => option.title === value.title}
                getOptionLabel={(option) => option.title}
                options={options}
                loading={loading}
                renderInput={(params) => (
                    <div ref={params.InputProps.ref} className="relative flex flex-row">
                        <input
                            type="text"
                            {...params.inputProps}
                            className={classNames(
                                "bg-green-primary-50 p-2 text-green-primary-900 w-full",
                                "leading-tight focus:outline-none peer placeholder-gray-dark border-2",
                                "rounded-l-xl border-y border-r-0 border-l pl-10",
                                "border-transparent before:bg-green-primary-100 focus:bg-green-primary-200 focus:shadow-md focus:border-green-primary-900"
                            )}
                            placeholder={"Search ticket"}
                        />
                        <div
                            tabIndex={-1}
                            className={classNames(
                                "select-none absolute left-2 top-2 flex bg-green-primary-50 rounded-l-xl text-green-primary-700 justify-center items-center",
                                "",
                                "peer-focus:bg-green-primary-200",
                            )}
                        >
                            <Search/>
                        </div>
                        <div
                            tabIndex={-1}
                            className={classNames(
                                "flex bg-green-primary-50 rounded-r-xl p-2 justify-center items-center cursor-pointer text-green-primary-700",
                                "border-r border-t border-b",
                                "border-transparent peer-focus:bg-green-primary-200 peer-focus:border-green-primary-900"
                            )}
                        >
                            <Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                            </Fragment>
                        </div>
                    </div>
                )}
            />
        </>
    );
}

export default SearchAutocomplete;

const topFilms = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
        title: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
        title: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
];
