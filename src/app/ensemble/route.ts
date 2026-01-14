import { NextResponse } from 'next/server'

export async function GET() {
  return new NextResponse('This page has been permanently removed.', {
    status: 410,
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
