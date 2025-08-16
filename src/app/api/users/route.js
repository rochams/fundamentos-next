import { NextResponse } from "next/server";

const users = [{
    id: 'sdf354s-df1d35f1',
    user: 'John',
    email: 'john@email.com'
}]

export async function GET() {

    try {
        return NextResponse.json(users)
    }
    catch {
        return NextResponse.json({msg: "Users not found"}, {status: 404})
    }
    
}

export async function POST(req) {

    const body = await req.json();

    const newUser = {
        id: '3c1gh4f-3gh54gfh',
        user: body.name,
        email: body.email
    }

    users.push(newUser);

    return NextResponse.json(
        newUser,
        {status: 201}
    )
    
}

