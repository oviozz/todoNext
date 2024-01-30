
"use client"

import {useFormStatus} from "react-dom"
import { FaSpinner } from "react-icons/fa";

const FormButton = ({title}) => {

    const { pending } = useFormStatus();

    return (
        <button disabled={pending} type={"submit"} className={"bg-green-500 text-white py-2 px-4 w-fit "}>
            {title}{pending && "..."}
        </button>
    )

}

export default FormButton;