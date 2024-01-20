
import connectMongoDB from "@/lib/mongodb";
import Topic from "@/models/Topic";
import {NextResponse} from "next/server";


export async function POST(request) {

    try{
        const {title, description} = await request.json()

        await connectMongoDB();
        await Topic.create({title, description})

        return NextResponse.json({message: 'Topic Created'}, {status: 201})

    }catch (error){
        return NextResponse.json({messsage: "Error", error}, {status: 500})
    }
}

export async function GET() {

    try {
        await connectMongoDB();
        const topics = await Topic.find();

        return NextResponse.json({topics}, {status: 200})

    } catch (error) {
        return NextResponse.json({messsage: "Error", error}, {status: 500})
    }
}