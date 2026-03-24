import { NextResponse } from 'next/server';

export const revalidate = 86400;

const AWS_DOC_URL =
  'https://docs.aws.amazon.com/partner-central/latest/getting-started/registration-process.html';
const AWS_DOC_BASE = 'https://docs.aws.amazon.com/partner-central/latest/getting-started/';
const AWS_ROOT = 'https://docs.aws.amazon.com';

function absolutizeAssets(html: string) {
  return html
    .replace(/(href|src|action)="\//g, `$1="${AWS_ROOT}/`)
    .replace(
      /(href|src|action)="(?!https?:|mailto:|#|\/|data:)([^"]+)"/g,
      (_, attr: string, value: string) => `${attr}="${new URL(value, AWS_DOC_BASE).toString()}"`
    );
}

function injectBaseAndStyle(html: string) {
  const injection = `
    <base href="${AWS_DOC_BASE}" />
    <style>
      html, body {
        background: #ffffff;
      }
      body {
        margin: 0;
      }
    </style>
  `;

  return html.replace('</head>', `${injection}</head>`);
}

export async function GET() {
  const response = await fetch(AWS_DOC_URL, {
    next: { revalidate },
  });

  if (!response.ok) {
    return new NextResponse('Unable to load AWS guide.', { status: 502 });
  }

  const html = await response.text();
  const transformed = injectBaseAndStyle(absolutizeAssets(html));

  return new NextResponse(transformed, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
    },
  });
}
