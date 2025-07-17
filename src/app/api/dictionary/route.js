import {prisma} from '@/lib/prisma'

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q') || '';

  
  if (q.length < 3) {
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  const results = await prisma.dictionary.findMany({
    where: {
      OR: [
        { word: { startsWith: q, mode: 'insensitive' } },
        { cyrillic: { startsWith: q, mode: 'insensitive' } },
      ],
    },
   
    take: 5,
  });
  
  return new Response(JSON.stringify(results), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
