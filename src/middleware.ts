import createMiddleware from 'next-intl/middleware';
import {NextRequest} from 'next/server';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing, {
    localeDetection: false,
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(en|ro)/:path*']
};