import createMiddleware from 'next-intl/middleware';
import {NextRequest} from 'next/server';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing, {
    localeDetection: false,
});

export const config = {
    // Match only internationalized pathnames
    // matcher: ['/', , '/(en|ro)/:path*']

    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};