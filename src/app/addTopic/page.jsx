import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";


const addTopicByID = async (formData) => {

    console.log(formData)

    const res = await fetch(`http://localhost:3000/api/topics`,{
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
        "content-type": "application/json"
    });

    if (!res.ok){
        throw new Error("Failed to Update ticket")
    }
}


const Page = () => {

    const updateTopic = async (formData) => {
        "use server"

        await addTopicByID({
            title: formData.get("title"),
            description: formData.get("description")
        });

        revalidatePath("/")
        redirect("/")
    }

    return (
        <form action={updateTopic} className={"flex flex-col gap-3 "}>
            <input type={"text"} name={"title"} placeholder={"Topic Title"} className={"border px-4 py-2"} />

            <input type={"text"} name={"description"} placeholder={"Topic Description"} className={"border px-4 py-2"} />

            <button type={"submit"} className={"bg-green-500 text-white py-2 px-4 w-fit "}>
                Add topic
            </button>

        </form>
    )

}

export default Page;