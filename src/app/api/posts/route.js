import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({hello: "world"}) 
}

export async function POST(){
  // form data
  //  Api json Post data
  return NextResponse.json({hello: "abc"})
}
