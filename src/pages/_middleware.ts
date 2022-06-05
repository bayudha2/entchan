import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/omni/') {
    console.log("let's do something later here!!");
  }
}
