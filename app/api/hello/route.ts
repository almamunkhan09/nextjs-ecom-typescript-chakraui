import { NextResponse } from 'next/server';

export function GET() {
  // const { searchParams } = new URL(request.url);

  return NextResponse.json({ hello: 'Hello World' });
}
