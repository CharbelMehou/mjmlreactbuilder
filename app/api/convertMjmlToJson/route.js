// app/api/convertMjmlToJson/route.js
import { NextResponse } from 'next/server';
import mjml2json  from 'mjml';

export async function POST(request) {
  try {
    const { mjml } = await request.json();

    if (!mjml) {
      return NextResponse.json({ error: 'Le champ MJML est requis.' }, { status: 400 });
    }

    const result = mjml2json(mjml);

    return NextResponse.json({ json: result.json });
  } catch (error) {
    console.error('Erreur lors de la conversion MJML en JSON :', error);
    return NextResponse.json({ error: 'Erreur lors de la conversion MJML en JSON.' }, { status: 500 });
  }
}