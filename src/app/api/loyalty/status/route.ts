import { NextResponse } from 'next/server';

let totalPoints = 0;

export async function GET() {
  return NextResponse.json({ points: totalPoints });
}
