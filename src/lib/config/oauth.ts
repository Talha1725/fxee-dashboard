// OAuth Configuration for all providers
export const OAUTH_CONFIG = {
  // Google OAuth Configuration
  GOOGLE: {
    CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "",
    SCOPES: ['openid', 'profile', 'email'].join(' '),
    FLOW: 'implicit' as const,
  },
  
  // LinkedIn OAuth Configuration
  LINKEDIN: {
    CLIENT_ID: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID || "",
    SCOPES: ['r_liteprofile', 'r_emailaddress'].join(' '),
    REDIRECT_URI: typeof window !== 'undefined' ? window.location.origin : '',
    AUTH_URL: 'https://www.linkedin.com/oauth/v2/authorization',
    TOKEN_URL: 'https://www.linkedin.com/oauth/v2/accessToken',
  },
  
  // Apple OAuth Configuration
  APPLE: {
    CLIENT_ID: process.env.NEXT_PUBLIC_APPLE_CLIENT_ID || "",
    REDIRECT_URI: typeof window !== 'undefined' ? window.location.origin : '',
    AUTH_URL: 'https://appleid.apple.com/auth/authorize',
    TOKEN_URL: 'https://appleid.apple.com/auth/token',
    SCOPE: 'name email',
  },
};

// Validate OAuth configurations
export const validateOAuthConfig = () => {
  const errors: string[] = [];
  
  if (!OAUTH_CONFIG.GOOGLE.CLIENT_ID) {
    errors.push('Google OAuth CLIENT_ID is not configured');
  }
  
  if (!OAUTH_CONFIG.LINKEDIN.CLIENT_ID) {
    errors.push('LinkedIn OAuth CLIENT_ID is not configured');
  }
  
  if (!OAUTH_CONFIG.APPLE.CLIENT_ID) {
    errors.push('Apple OAuth CLIENT_ID is not configured');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Generate OAuth URLs
export const generateOAuthUrl = (provider: 'google' | 'linkedin' | 'apple') => {
  switch (provider) {
    case 'linkedin':
      return `${OAUTH_CONFIG.LINKEDIN.AUTH_URL}?response_type=code&client_id=${OAUTH_CONFIG.LINKEDIN.CLIENT_ID}&redirect_uri=${encodeURIComponent(OAUTH_CONFIG.LINKEDIN.REDIRECT_URI)}&scope=${encodeURIComponent(OAUTH_CONFIG.LINKEDIN.SCOPES)}&state=${generateRandomState()}`;
    
    case 'apple':
      return `${OAUTH_CONFIG.APPLE.AUTH_URL}?response_type=code&client_id=${OAUTH_CONFIG.APPLE.CLIENT_ID}&redirect_uri=${encodeURIComponent(OAUTH_CONFIG.APPLE.REDIRECT_URI)}&scope=${encodeURIComponent(OAUTH_CONFIG.APPLE.SCOPE)}&response_mode=form_post&state=${generateRandomState()}`;
    
    default:
      return '';
  }
};

// Generate random state for OAuth security
const generateRandomState = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

// OAuth provider names for display
export const OAUTH_PROVIDER_NAMES = {
  google: 'Google',
  linkedin: 'LinkedIn',
  apple: 'Apple',
} as const;

// OAuth provider colors for UI
export const OAUTH_PROVIDER_COLORS = {
  google: '#4285F4',
  linkedin: '#0077B5',
  apple: '#000000',
} as const;
