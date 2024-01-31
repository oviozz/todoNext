

import TopicList from "@/components/TopicList";


const getTopics = async () => {
    try{

        const res = await fetch("https://todo-next-seven-iota.vercel.app/api/topics",{
            cache: "no-store"
        })

        return res.json();

    }catch (error){
        console.log('error', error)
    }
}

async function Home() {

    const topicData = await getTopics();

    return (
        <>
            {
                topicData?.topics.map((topic) => (
                    <TopicList key={topic._id} topicData={topic}/>
                ))
            }
        </>
    );
}

export default Home;
