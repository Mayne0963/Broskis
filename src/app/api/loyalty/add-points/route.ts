import { NextResponse } from 'next/server';

let totalPoints = 0;

export async function POST(request: Request) {
  const { points } = await request.json();
  totalPoints += points;
  return NextResponse.json({ points: totalPoints });
}
