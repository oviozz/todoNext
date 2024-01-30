

import connectMongoDB from "@/lib/mongodb";
import {NextResponse} from "next/server";
import Topic from "@/models/Topic";



    export async function PUT(request, {params}){

    try {
        const { id } = params;
        const {title, description} = await request.json();


        await connectMongoDB();
        await Topic.findByIdAndUpdate(id, {title, description})

        return NextResponse.json({message: "Topic updated"}, {status: 200})
    } catch (error){
        return NextResponse.json({message: error}, {status: 500})

    }

}


export async function GET(request, {params}){

    try {
        const { id } = params;

        await connectMongoDB();
        const topic = await Topic.findOne({_id: id});

        return NextResponse.json({topic}, {status: 200})
    } catch (error){
        return NextResponse.json({message: error}, {status: 500})

    }

}


export async function DELETE(_,{params}) {

    const { id } = params;

    try {

        await connectMongoDB();
        await Topic.findByIdAndDelete(id);

        return NextResponse.json({message: "Topic deleted"}, {status: 200})

    } catch (error) {
        return NextResponse.json({messsage: "Error", error}, {status: 500})
    }
}