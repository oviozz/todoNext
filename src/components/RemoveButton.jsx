

import {HiOutlineTrash} from "react-icons/hi";
import {revalidatePath} from "next/cache";


const RemoveButton = ({id}) => {

    const removeTopic = async () => {
        "use server"

        const res = await fetch(`/api/topics/${id}`,{
            method: "DELETE",
        })
        if (!res.ok){
            throw new Error("Failed to delete topic");
        }
        revalidatePath("/")
    }

    return (
        <form action={removeTopic}>
            <button aria-label="Submit Form" type={"submit"} className={"text-red-400"}>
                <HiOutlineTrash size={24} />
            </button>
        </form>
    )


}

export default RemoveButton;
