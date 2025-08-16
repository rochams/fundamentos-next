import { NextResponse } from "next/server";

export async function GET(req, { params }) {

    const { id } = await params
    
    try {
        return NextResponse.json({
            "id": id,
            "name": `User Name ${id}`,
            "email": `user_${id}@email.com`
        })
    } 
    catch {
        return NextResponse.json(
            {msg: "An error ocurred on get user"},
            {status: 404})
    }

}

export async function POST(req) {

    return NextResponse.json({msg: "Method not allowed for this service"}, {status: 405})
    
}