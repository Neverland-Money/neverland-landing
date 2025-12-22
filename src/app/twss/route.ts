import { readFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import { join } from 'path';

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'public', 'twss.gif');
    const fileBuffer: Buffer = await readFile(filePath);

    return new NextResponse(new Uint8Array(fileBuffer), {
      headers: {
        'Content-Type': 'image/gif',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch {
    return new NextResponse('GIF not found', { status: 404 });
  }
}
