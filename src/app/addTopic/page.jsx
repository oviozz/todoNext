
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import FormButton from "@/components/FormButton";


const addTopicByID = async (formData) => {

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

    const addTopic = async (formData) => {
        "use server"

        await addTopicByID({
            title: formData.get("title"),
            description: formData.get("description")
        });

        revalidatePath("/")
        redirect("/")
    }

    return (
        <form action={addTopic} className={"flex flex-col gap-3 "}>
            <input type={"text"} name={"title"} placeholder={"Topic Title"} className={"border px-4 py-2"} />

            <input type={"text"} name={"description"} placeholder={"Topic Description"} className={"border px-4 py-2"} />

            <FormButton title={"Add Topic"} />

        </form>
    )

}

export default Page;
