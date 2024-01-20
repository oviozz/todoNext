
import RemoveButton from "@/components/RemoveButton";
import Link from "next/link";
import {HiPencilAlt} from "react-icons/hi"




const TopicList = ({topicData}) => {

    return (
        <div className={"p-4 my-3 border-2 flex justify-between items-start "}>
            <div className={""}>
                <h2 className={"font-bold text-2xl"}>{topicData.title}</h2>
                <p>{topicData.description}</p>
            </div>

            <div className={"flex items-center gap-2"}>
                <RemoveButton id={topicData._id}/>
                <Link href={`editTopic/${topicData._id}`}>
                    <HiPencilAlt size={24}/>
                </Link>
            </div>
        </div>
    )


}

export default TopicList;