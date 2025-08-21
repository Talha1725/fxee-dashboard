# Google OAuth Setup Guide

## Prerequisites
- Google Cloud Console account
- Next.js project with @react-oauth/google package installed

## Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the following APIs:
   - Google+ API
   - Google Identity Services

## Step 2: Configure OAuth Consent Screen

1. Go to "APIs & Services" > "OAuth consent screen"
2. Choose "External" user type
3. Fill in the required information:
   - App name: "Fxee.ai"
   - User support email: Your email
   - Developer contact information: Your email
4. Add scopes:
   - `openid`
   - `profile`
   - `email`
5. Add test users (your email) if in testing mode

## Step 3: Create OAuth 2.0 Client ID

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth 2.0 Client IDs"
3. Set Application Type to "Web application"
4. Add Authorized JavaScript origins:
   ```
   http://localhost:3000
   https://yourdomain.com (for production)
   ```
5. Add Authorized redirect URIs:
   ```
   http://localhost:3000
   https://yourdomain.com (for production)
   ```
6. Click "Create"
7. Copy the Client ID

## Step 4: Configure Environment Variables

1. Create a `.env.local` file in your project root
2. Add your Google OAuth Client ID:
   ```
   NEXT_PUBLIC_GOOGLE_CLIENT_ID=939591516739-18cc9pplu7cr8i18r4q94og702vbdkci.apps.googleusercontent.com
   ```

**Note**: Your Google OAuth credentials are already configured in the code as fallback, but it's recommended to use environment variables for better security.

## Step 5: Test the Integration

1. Start your development server: `yarn dev`
2. Go to the signin/signup page
3. Click the Google button
4. Complete the OAuth flow
5. Verify that you're redirected to the dashboard

## Troubleshooting

### Common Issues:

1. **"Invalid Client ID" error**
   - Make sure the Client ID is correct
   - Verify the domain is added to Authorized JavaScript origins

2. **"Redirect URI mismatch" error**
   - Add your domain to Authorized redirect URIs
   - Make sure the protocol (http/https) matches

3. **"OAuth consent screen not configured" error**
   - Complete the OAuth consent screen setup
   - Add your email as a test user if in testing mode

4. **"API not enabled" error**
   - Enable Google+ API and Google Identity Services

## Security Notes

- Never commit your `.env.local` file to version control
- Use different Client IDs for development and production
- Regularly rotate your OAuth credentials
- Monitor OAuth usage in Google Cloud Console

## Production Deployment

1. Create a separate OAuth 2.0 Client ID for production
2. Add your production domain to Authorized origins
3. Set the production Client ID in your deployment environment
4. Test the OAuth flow in production

## API Integration

The Google OAuth integration sends the access token to your backend API at:
```
POST /api/auth/google
{
  "access_token": "google_access_token_here"
}
```

Your backend should:
1. Verify the access token with Google
2. Extract user information (email, name, profile picture)
3. Create or update user in your database
4. Return JWT token for your application
