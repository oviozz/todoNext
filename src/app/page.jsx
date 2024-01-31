
import TopicList from "@/components/TopicList";

const getTopics = async () => {
    try{

        const res = await fetch("http://localhost:3000/api/topics",{
            cache: "no-store"
        })

        return res.json();

    }catch (error){
        console.log('error', error)
    }
}

async function Home() {

    const { topics } = await getTopics();

    return (
        <>
            {
                topics?.map((topic) => (
                    <TopicList key={topic._id} topicData={topic}/>
                ))
            }
        </>
    );
}

export default Home;
