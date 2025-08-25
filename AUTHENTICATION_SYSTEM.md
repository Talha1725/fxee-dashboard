# Authentication System Documentation

## Overview

The fxee dashboard implements a centralized authentication system that handles multiple login methods consistently:

1. **Simple Login** - Email/password authentication
2. **Google OAuth** - Google Sign-In integration
3. **LinkedIn OAuth** - LinkedIn authentication (placeholder)
4. **Apple OAuth** - Apple Sign-In (placeholder)

All authentication methods return the same response structure and are handled by a unified system.

## Architecture

### Core Components

#### 1. Centralized Authentication Handler (`src/lib/utils/authUtils.ts`)
- `handleSSOResponse()` - Processes authentication responses from all providers
- `handleAuthentication()` - Generic handler for any authentication method
- `extractAuthData()` - Extracts user data and token from various response formats
- `validateProviderConfig()` - Validates OAuth provider configurations
- `getProviderErrorMessage()` - Provider-specific error messages

#### 2. OAuth Configuration (`src/lib/config/oauth.ts`)
- Centralized configuration for all OAuth providers
- Environment variable validation
- OAuth URL generation
- Provider-specific settings

#### 3. API Endpoints (`src/lib/redux/features/auth/authApi.ts`)
- RTK Query mutations for all authentication methods
- Consistent response handling
- Error management

### Response Structure

All authentication methods return the same response format:

```typescript
interface AuthResponse {
  status?: string;
  success?: boolean;
  message?: string;
  error?: string;
  token?: string;
  data?: {
    userData?: User;
    token?: string;
  } | User;
}
```

The system handles multiple response structures:
1. `response.data.userData` + `response.token`
2. `response.token` + `response.data` (user object)
3. `response.data.token` + `response.data` (user object)

## Implementation

### 1. Simple Login (Email/Password)

**Component:** `src/components/features/sign/SignForm.tsx`

```typescript
const handleLogin = async () => {
  await handleAuthentication(
    login({
      email: formData.email,
      password: formData.password,
    }).unwrap(),
    dispatch,
    router,
    'simple'
  );
};
```

**API Endpoint:** `POST /api/auth/login`

### 2. Google OAuth

**Component:** `src/components/features/sign/SignSocialButtons.tsx`

```typescript
const googleOAuthLogin = useGoogleLogin({
  onSuccess: async (tokenResponse) => {
    if (!validateProviderConfig('google')) return;
    
    await handleAuthentication(
      googleLogin({ access_token: tokenResponse.access_token }).unwrap(),
      dispatch,
      router,
      'google'
    );
  },
  onError: () => {
    showToast.apiError(getProviderErrorMessage('google'));
  }
});
```

**API Endpoint:** `POST /api/auth/google`

**Configuration:** `NEXT_PUBLIC_GOOGLE_CLIENT_ID`

### 3. LinkedIn OAuth (Placeholder)

**Component:** `src/components/features/sign/SignSocialButtons.tsx`

```typescript
const handleLinkedinClick = async () => {
  if (!validateProviderConfig('linkedin')) return;
  
  // LinkedIn OAuth implementation
  showToast.success("LinkedIn login coming soon!");
  
  // Example implementation:
  // const linkedinAuthUrl = generateOAuthUrl('linkedin');
  // window.open(linkedinAuthUrl, '_blank', 'width=500,height=600');
};
```

**API Endpoint:** `POST /api/auth/linkedin`

**Configuration:** `NEXT_PUBLIC_LINKEDIN_CLIENT_ID`

### 4. Apple OAuth (Placeholder)

**Component:** `src/components/features/sign/SignSocialButtons.tsx`

```typescript
const handleAppleClick = async () => {
  if (!validateProviderConfig('apple')) return;
  
  // Apple OAuth implementation
  showToast.success("Apple login coming soon!");
  
  // Example implementation:
  // AppleID.auth.signIn().then(async (response) => {
  //   await handleAuthentication(
  //     appleLogin({ code: response.authorization.code }).unwrap(),
  //     dispatch,
  //     router,
  //     'apple'
  //   );
  // });
};
```

**API Endpoint:** `POST /api/auth/apple`

**Configuration:** `NEXT_PUBLIC_APPLE_CLIENT_ID`

## Environment Variables

Add these to your `.env.local` file:

```bash
# Google OAuth
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id

# LinkedIn OAuth
NEXT_PUBLIC_LINKEDIN_CLIENT_ID=your_linkedin_client_id

# Apple OAuth
NEXT_PUBLIC_APPLE_CLIENT_ID=your_apple_client_id
```

## Backend API Requirements

All authentication endpoints should return the same response structure:

```json
{
  "status": "success",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "data": {
    "userData": {
      "id": "1",
      "email": "user@example.com",
      "fullName": "John Doe",
      "userName": "johndoe",
      "role": "user",
      "avatar": "https://example.com/avatar.jpg",
      "emailVerified": true,
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z"
    }
  },
  "message": "Authentication successful"
}
```

### API Endpoints

1. **POST /api/auth/login**
   - Body: `{ email: string, password: string }`

2. **POST /api/auth/google**
   - Body: `{ access_token: string }`

3. **POST /api/auth/linkedin**
   - Body: `{ code: string }`

4. **POST /api/auth/apple**
   - Body: `{ code: string }`

## Error Handling

The system provides consistent error handling across all authentication methods:

- **Configuration Errors** - Missing OAuth client IDs
- **Network Errors** - API request failures
- **Authentication Errors** - Invalid credentials or tokens
- **Response Format Errors** - Unexpected response structures

## Security Features

1. **Token Storage** - JWT tokens stored in localStorage
2. **State Validation** - OAuth state parameter for CSRF protection
3. **Error Sanitization** - Safe error messages for users
4. **Configuration Validation** - Environment variable checks

## Usage Examples

### Adding a New OAuth Provider

1. Add configuration to `src/lib/config/oauth.ts`:
```typescript
FACEBOOK: {
  CLIENT_ID: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID || "",
  SCOPES: ['email', 'public_profile'].join(' '),
  AUTH_URL: 'https://www.facebook.com/dialog/oauth',
  // ... other settings
}
```

2. Add API endpoint to `src/lib/redux/features/auth/authApi.ts`:
```typescript
facebookLogin: builder.mutation<AuthResponse, { code: string }>({
  query: (data) => ({
    url: "/auth/facebook",
    method: "POST",
    body: data,
  }),
  invalidatesTags: ["User"],
}),
```

3. Add button handler in `SignSocialButtons.tsx`:
```typescript
const handleFacebookClick = async () => {
  if (!validateProviderConfig('facebook')) return;
  
  await handleAuthentication(
    facebookLogin({ code: facebookCode }).unwrap(),
    dispatch,
    router,
    'facebook'
  );
};
```

### Custom Authentication Flow

```typescript
import { handleAuthentication } from '@/lib/utils/authUtils';

const customAuthFlow = async () => {
  const success = await handleAuthentication(
    customAuthAPI().unwrap(),
    dispatch,
    router,
    'custom'
  );
  
  if (success) {
    // Additional post-authentication logic
  }
};
```

## Testing

### Unit Tests

Test the authentication utilities:

```typescript
import { extractAuthData, handleSSOResponse } from '@/lib/utils/authUtils';

describe('Authentication Utils', () => {
  test('extractAuthData handles different response structures', () => {
    const response1 = {
      token: 'token123',
      data: { userData: { id: '1', email: 'test@example.com' } }
    };
    
    const result = extractAuthData(response1);
    expect(result).toEqual({
      user: { id: '1', email: 'test@example.com' },
      token: 'token123'
    });
  });
});
```

### Integration Tests

Test the complete authentication flow:

```typescript
describe('Authentication Flow', () => {
  test('Google OAuth flow', async () => {
    // Mock Google OAuth response
    // Test complete flow from button click to dashboard redirect
  });
});
```

## Troubleshooting

### Common Issues

1. **"OAuth not configured" error**
   - Check environment variables are set correctly
   - Verify client IDs are valid

2. **"Invalid response format" error**
   - Ensure backend returns expected response structure
   - Check API endpoint implementation

3. **"Authentication failed" error**
   - Verify OAuth provider configuration
   - Check network connectivity
   - Validate API credentials

### Debug Mode

Enable debug logging by setting:

```typescript
// In development
localStorage.setItem('auth_debug', 'true');
```

This will log authentication flow details to the console.

## Future Enhancements

1. **Biometric Authentication** - Fingerprint/Face ID support
2. **Multi-Factor Authentication** - SMS/Email verification
3. **Social Login Expansion** - Twitter, GitHub, etc.
4. **Session Management** - Token refresh, logout everywhere
5. **Analytics Integration** - Login method tracking
