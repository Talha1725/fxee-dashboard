# API Implementation Documentation

This document outlines the implementation of the comprehensive API system for the fxee Trading Platform Frontend, following the OpenAPI specification provided.

## Overview

The implementation includes:
- **Authentication APIs** - User registration, login, password reset, email verification
- **User Management APIs** - CRUD operations for users
- **Payment APIs** - Payment processing and management
- **Chatbot APIs** - AI-powered chat functionality
- **Recommendation APIs** - Custom trading analysis and recommendations

## Architecture

### Redux Store Structure
```
src/lib/redux/
├── store.ts                 # Main store configuration
├── services/
│   └── baseApi.ts          # Base API configuration with auth headers
├── features/
│   ├── auth/
│   │   ├── authSlice.ts    # Authentication state management
│   │   └── authApi.ts      # Authentication API endpoints
│   ├── users/
│   │   └── usersApi.ts     # User management API endpoints
│   ├── payments/
│   │   └── paymentsApi.ts  # Payment API endpoints
│   ├── chatbot/
│   │   └── chatbotApi.ts   # Chatbot API endpoints
│   └── recommendations/
│       └── recommendationsApi.ts # Recommendations API endpoints
```

### Type Definitions
All API types are defined in `src/types/redux.ts` including:
- Authentication types (User, AuthState, LoginRequest, etc.)
- Payment types (Payment, CreatePaymentRequest, etc.)
- Chatbot types (ChatMessage, ChatRequest, etc.)
- Recommendation types (CustomAnalysis, ActiveRecommendation, etc.)

## API Endpoints Implemented

### Authentication (`/api/auth/*`)
- `POST /auth/register` - User registration with email verification
- `POST /auth/login` - User login
- `POST /auth/google` - Google OAuth authentication
- `POST /auth/forgot-password` - Send password reset email
- `POST /auth/reset-password` - Reset password with token
- `POST /auth/verify-email` - Verify email address
- `POST /auth/resend-verification` - Resend verification email

### User Management (`/api/users/*`)
- `GET /users` - Get all users with pagination and search
- `POST /users` - Create new user
- `GET /users/{id}` - Get user by ID
- `PUT /users/{id}` - Update user
- `DELETE /users/{id}` - Delete user

### Payments (`/api/payments/*`)
- `POST /payments` - Create new payment
- `GET /payments` - Get all payments with filtering
- `GET /payments/{paymentId}` - Get payment status

### Chatbot (`/api/chatbot/*`)
- `POST /chatbot/chat` - Send message to AI assistant
- `GET /chatbot/history` - Get chat history
- `GET /chatbot/info` - Get chatbot information

### Recommendations (`/api/recommendations/*`)
- `POST /recommendations/custom` - Create custom trading analysis
- `GET /recommendations/custom/my-analyses` - Get user's custom analyses
- `GET /recommendations/custom/{id}` - Get specific custom analysis
- `GET /recommendations/custom/supported-symbols` - Get supported symbols
- `GET /recommendations/active` - Get active recommendations

## Authentication & Authorization

### Middleware
- **File**: `middleware.ts` (root level)
- **Purpose**: Route protection and authentication checks
- **Features**:
  - Redirects unauthenticated users to `/signin`
  - Redirects authenticated users away from auth pages
  - Supports token-based authentication

### Protected Routes
The following routes require authentication:
- `/dashboard`
- `/home`
- `/ai-engine`
- `/copy-trading`
- `/performance-history`
- `/trades`
- `/wallet`
- `/settings`
- `/support`
- `/tutorial`

### Token Management
- Tokens are stored in localStorage
- Automatic token inclusion in API requests via Redux baseApi
- Token validation on route changes

## Component Examples

### Chatbot Interface
**File**: `src/components/features/protected/ai-engine/ChatbotInterface.tsx`
- Real-time chat with AI assistant
- Message history display
- Quota tracking
- Error handling

### Custom Analysis Form
**File**: `src/components/features/protected/ai-engine/CustomAnalysisForm.tsx`
- Form for creating custom trading analysis
- Symbol selection from supported list
- Risk and profit target configuration
- Real-time validation

### Payment Form
**File**: `src/components/features/protected/wallet/PaymentForm.tsx`
- Payment creation form
- Multiple payment methods support
- Currency selection
- User authentication integration

## Error Handling

### API Error Utilities
**File**: `src/lib/utils/apiUtils.ts`
- Centralized error handling
- HTTP status code mapping
- User-friendly error messages
- Response validation helpers

### Error Handling Pattern
```typescript
try {
  const response = await apiCall().unwrap();
  // Handle success
} catch (error) {
  const errorMessage = handleApiError(error);
  // Display error to user
}
```

## State Management

### Redux Toolkit Query
- Automatic caching and invalidation
- Optimistic updates
- Background refetching
- Loading and error states

### Persistence
- Authentication state persisted across sessions
- Token storage in localStorage
- Automatic rehydration on app start

## Usage Examples

### Using Authentication APIs
```typescript
import { useLoginMutation, useRegisterMutation } from '@/lib/redux/features/auth/authApi';

const [login, { isLoading }] = useLoginMutation();

const handleLogin = async (credentials) => {
  try {
    const response = await login(credentials).unwrap();
    // Handle successful login
  } catch (error) {
    // Handle error
  }
};
```

### Using Chatbot APIs
```typescript
import { useSendChatMessageMutation } from '@/lib/redux/features/chatbot/chatbotApi';

const [sendMessage] = useSendChatMessageMutation();

const handleSendMessage = async (message) => {
  try {
    const response = await sendMessage({ message }).unwrap();
    // Handle response
  } catch (error) {
    // Handle error
  }
};
```

### Using Recommendation APIs
```typescript
import { useCreateCustomAnalysisMutation } from '@/lib/redux/features/recommendations/recommendationsApi';

const [createAnalysis] = useCreateCustomAnalysisMutation();

const handleCreateAnalysis = async (analysisData) => {
  try {
    const response = await createAnalysis(analysisData).unwrap();
    // Handle success
  } catch (error) {
    // Handle error
  }
};
```

## Environment Configuration

### Required Environment Variables
```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### API Base URL
The API base URL is configured in `src/lib/redux/services/baseApi.ts` and defaults to `http://localhost:3000/api/` if not specified.

## Security Considerations

1. **Token Storage**: Tokens are stored in localStorage (consider httpOnly cookies for production)
2. **CORS**: Configure CORS on the backend to allow frontend requests
3. **Rate Limiting**: Implement rate limiting on the backend
4. **Input Validation**: All user inputs are validated on both frontend and backend
5. **HTTPS**: Use HTTPS in production for secure communication

## Testing

### API Testing
- Use the provided OpenAPI specification for testing endpoints
- Test authentication flows
- Test error scenarios
- Test rate limiting

### Component Testing
- Test form validation
- Test API integration
- Test error handling
- Test loading states

## Deployment

### Build Process
1. Set environment variables
2. Build the Next.js application
3. Deploy to your hosting platform

### API Integration
1. Ensure backend API is running and accessible
2. Update `NEXT_PUBLIC_API_URL` to point to production API
3. Test all API endpoints in production environment

## Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure backend CORS configuration allows frontend domain
2. **Authentication Issues**: Check token storage and middleware configuration
3. **API Timeouts**: Configure appropriate timeout values in baseApi
4. **Type Errors**: Ensure all API responses match TypeScript interfaces

### Debug Tools
- Redux DevTools for state inspection
- Network tab for API request monitoring
- Console logs for error tracking

## Future Enhancements

1. **Real-time Updates**: Implement WebSocket connections for live data
2. **Offline Support**: Add service worker for offline functionality
3. **Advanced Caching**: Implement more sophisticated caching strategies
4. **Analytics**: Add API usage analytics and monitoring
5. **Performance**: Implement request batching and optimization

## Support

For issues or questions regarding the API implementation:
1. Check the OpenAPI specification
2. Review error logs
3. Test API endpoints directly
4. Consult the Redux Toolkit Query documentation
