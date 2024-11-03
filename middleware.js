// import { NextResponse } from 'next/server'

// export function middleware(request) {
//     // Check if the path starts with /b
//     if (request.nextUrl.pathname.startsWith('/b/')) {
//         // Remove the /b/ prefix from the pathname
//         // Using substring(3) because '/b/' is 3 characters
//         const pathname = request.nextUrl.pathname.substring(3)
        
//         // Create a new URL with the remaining pathname
//         const newUrl = new URL(pathname, 'https://google.com')
        
//         // Copy over any query parameters
//         newUrl.search = request.nextUrl.search
        
//         // Use redirect instead of rewrite for external URLs
//         return NextResponse.redirect(newUrl)
//     }
// }

// export const config = {
//     matcher: ['/b/:path*']
// }