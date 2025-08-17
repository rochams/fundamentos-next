import { NextResponse } from "next/server";

export async function GET(req) {


    try {
        return NextResponse.json({message: `Message URI is running`}, {status: 200})
    }
    catch {

    }
    
}

export async function POST() {

    return NextResponse.json({
        message: "Method not allowed"
    }, {status: 405})

}