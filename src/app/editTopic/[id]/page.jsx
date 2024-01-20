
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";


const getTopicById = async (id) => {

    const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        cache: "no-store"
    })
    if (!res.ok){
        throw new Error('Failed to get ticket')
    }

    return res.json();
}

const updateTopicByID = async (id, formData) => {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
        cache: "no-cache",
        method: 'PUT',
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

const Page = async ({params}) => {

    const {id} = params;
    const {topic} = await getTopicById(id);

    const updateTopic = async (formData) => {
        "use server"

        await updateTopicByID(id, {
            title: formData.get("title"),
            description: formData.get("description")
        })

        revalidatePath("/")
        redirect("/")
    }

    return (
        <form action={updateTopic} className={"flex flex-col gap-3 "}>
            <input defaultValue={topic.title} name={"title"} type={"text"} placeholder={"Topic Title"} className={"border px-4 py-2"} />

            <input defaultValue={topic.description} name={"description"} type={"text"} placeholder={"Topic Description"} className={"border px-4 py-2"} />

            <button type={"submit"} className={"bg-green-500 text-white py-2 px-4 w-fit "}>
                Edit topic
            </button>

        </form>
    )


}

export default Page;