import createIntlMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

export default async function middleware(request: NextRequest) {
  // Step 1: Use the incoming request
  const defaultLocale = request.headers.get('x-default-locale') || 'no';

  // Step 2: Create and call the next-intl middleware
  const handleI18nRouting = createIntlMiddleware({
    locales: ['no', 'en'],
    defaultLocale,
  });
  const response = handleI18nRouting(request);

  // Step 3: Alter the response
  response.headers.set('x-default-locale', defaultLocale);

  return response;
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
