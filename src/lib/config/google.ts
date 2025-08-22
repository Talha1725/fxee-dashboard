// Google OAuth Configuration
export const GOOGLE_OAUTH_CONFIG = {
  // Google OAuth Client ID from environment variables
  // Must be set in .env.local file
  CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
  
  // Scopes for Google OAuth
  SCOPES: [
    'openid',
    'profile',
    'email'
  ].join(' '),
  
  // OAuth flow type
  FLOW: 'implicit' as const,
};

// Validate that the Google OAuth Client ID is set
if (!GOOGLE_OAUTH_CONFIG.CLIENT_ID) {
  console.error('❌ NEXT_PUBLIC_GOOGLE_CLIENT_ID is not set in environment variables');
  console.error('Please create a .env.local file with:');
  console.error('NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id_here');
}

// Validate that the API Base URL is set
if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
  console.error('❌ NEXT_PUBLIC_API_BASE_URL is not set in environment variables');
  console.error('Please create a .env.local file with:');
  console.error('NEXT_PUBLIC_API_BASE_URL=http://localhost:3000');
}

// Instructions to get Google OAuth Client ID:
// 1. Go to Google Cloud Console: https://console.cloud.google.com/
// 2. Create a new project or select existing one
// 3. Enable Google+ API and Google Identity Services
// 4. Go to Credentials > Create Credentials > OAuth 2.0 Client IDs
// 5. Set Application Type to "Web application"
// 6. Add Authorized JavaScript origins:
//    - http://localhost:3000 (for development)
//    - https://yourdomain.com (for production)
// 7. Add Authorized redirect URIs:
//    - http://localhost:3000 (for development)
//    - https://yourdomain.com (for production)
// 8. Copy the Client ID and set it in your .env.local file:
//    NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_client_id_here
