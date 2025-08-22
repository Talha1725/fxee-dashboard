# Backend API Requirements for fxee Trading Platform

This document outlines the backend API requirements to match the frontend implementation. The frontend is designed to be flexible and handle different response structures, but the backend should implement consistent APIs.

## ⚠️ CRITICAL FIXES REQUIRED

### 1. Login API Response Structure
**ISSUE:** OpenAPI spec shows `data` as an array, but frontend expects `data.userData` object.

**CORRECTED Login Response:**
```json
{
  "status": "success",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "data": {
    "userData": {
      "id": "1",
      "email": "talhanoor1001@gmail.com",
      "fullName": "talha Noor",
      "userName": "talhanoor1001",
      "role": "user",
      "avatar": "https://example.com/avatar.jpg",
      "emailVerified": true,
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z"
    }
  },
  "message": "Login successful"
}
```

### 2. User ID Type Consistency
**ISSUE:** OpenAPI spec uses `integer` for user IDs, but frontend expects `string`.

**CORRECTED:** All user IDs should be `string` type to match frontend expectations.

### 3. Google OAuth Response
**ISSUE:** OpenAPI spec doesn't define response structure for Google OAuth.

**CORRECTED:** Google OAuth should return the same structure as login.

## Authentication APIs

### POST /api/auth/register
**Request Body:**
```json
{
  "email": "talhanoor1001@gmail.com",
  "password": "talhanoor1001@gmail.com",
  "userName": "talhanoor1001",
  "fullName": "talha Noor"
}
```

**Expected Response Structure:**
```json
{
  "status": "success",
  "message": "Registration successful! Please check your email to verify your account before logging in.",
  "data": {
    "email": "talhanoor1001@gmail.com",
    "emailVerified": false
  }
}
```

### POST /api/auth/login
**Request Body:**
```json
{
  "email": "talhanoor1001@gmail.com",
  "password": "talhanoor1001@gmail.com"
}
```

**Expected Response Structure:**
```json
{
  "status": "success",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "data": {
    "userData": {
      "id": "1",
      "email": "talhanoor1001@gmail.com",
      "fullName": "talha Noor",
      "userName": "talhanoor1001",
      "role": "user",
      "avatar": "https://example.com/avatar.jpg",
      "emailVerified": true,
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z"
    }
  },
  "message": "Login successful"
}
```

### POST /api/auth/google
**Request Body:**
```json
{
  "access_token": "ya29.a0AfH6SMB..."
}
```

**Expected Response Structure:**
```json
{
  "status": "success",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "data": {
    "userData": {
      "id": "1",
      "email": "user@gmail.com",
      "fullName": "John Doe",
      "userName": "johndoe",
      "role": "user",
      "avatar": "https://example.com/avatar.jpg",
      "emailVerified": true,
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z"
    }
  },
  "message": "Google authentication successful"
}
```

### POST /api/auth/forgot-password
**Request Body:**
```json
{
  "email": "talhanoor1001@gmail.com"
}
```

**Expected Response Structure:**
```json
{
  "status": "success",
  "message": "Password reset email sent successfully"
}
```

### POST /api/auth/reset-password
**Request Body:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "password": "newtalhanoor1001@gmail.com"
}
```

**Expected Response Structure:**
```json
{
  "status": "success",
  "message": "Password reset successfully"
}
```

### POST /api/auth/verify-email
**Request Body:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Expected Response Structure:**
```json
{
  "status": "success",
  "message": "Email verified successfully! You can now log in to your account.",
  "data": {
    "email": "talhanoor1001@gmail.com",
    "emailVerified": true
  }
}
```

### POST /api/auth/resend-verification
**Request Body:**
```json
{
  "email": "talhanoor1001@gmail.com"
}
```

**Expected Response Structure:**
```json
{
  "status": "success",
  "message": "Verification email sent successfully. Please check your inbox."
}
```

## User Management APIs

### GET /api/users
**Expected Response Structure:**
```json
{
  "success": true,
  "data": [
    {
      "id": "1",
      "email": "user@example.com",
      "fullName": "John Doe",
      "userName": "johndoe",
      "emailVerified": true,
      "picture": "https://example.com/avatar.jpg",
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z"
    }
  ]
}
```

### POST /api/users
**Request Body:**
```json
{
  "email": "newuser@example.com",
  "fullName": "John Doe",
  "password": "securePassword123"
}
```

**Expected Response Structure:**
```json
{
  "success": true,
  "data": {
    "id": "1",
    "email": "newuser@example.com",
    "fullName": "John Doe",
    "userName": "johndoe"
  }
}
```

### GET /api/users/{id}
**Expected Response Structure:**
```json
{
  "success": true,
  "data": {
    "id": "1",
    "email": "user@example.com",
    "fullName": "John Doe",
    "userName": "johndoe",
    "emailVerified": true,
    "picture": "https://example.com/avatar.jpg"
  }
}
```

### PUT /api/users/{id}
**Request Body:**
```json
{
  "email": "updated@example.com",
  "fullName": "Updated Name",
  "userName": "updateduser",
  "picture": "https://example.com/new-avatar.jpg",
  "emailVerified": true
}
```

**Expected Response Structure:**
```json
{
  "success": true,
  "data": {
    "id": "1",
    "email": "updated@example.com",
    "fullName": "Updated Name",
    "userName": "updateduser"
  }
}
```

### DELETE /api/users/{id}
**Expected Response Structure:**
```json
{
  "success": true,
  "message": "User deleted successfully"
}
```

## Payment APIs

### POST /api/payments
**Request Body:**
```json
{
  "userId": 1,
  "amount": 99.99,
  "currency": "USD",
  "paymentMethod": "credit_card",
  "description": "Payment for premium subscription",
  "paymentProcessor": "stripe",
  "metadata": {}
}
```

**Expected Response Structure:**
```json
{
  "success": true,
  "message": "Payment created successfully",
  "data": {
    "payment": {
      "id": 1,
      "transactionId": "txn_1234567890_abc123",
      "userId": 1,
      "amount": "99.99",
      "currency": "USD",
      "status": "pending",
      "paymentMethod": "credit_card",
      "description": "Payment for premium subscription",
      "paymentProcessor": "stripe",
      "metadata": {},
      "createdAt": "2024-01-15T10:30:00.000Z"
    }
  }
}
```

### GET /api/payments
**Expected Response Structure:**
```json
{
  "success": true,
  "message": "Payments retrieved successfully",
  "data": {
    "payments": [
      {
        "id": 1,
        "transactionId": "txn_1234567890_abc123",
        "userId": 1,
        "amount": "99.99",
        "currency": "USD",
        "status": "completed",
        "paymentMethod": "credit_card",
        "createdAt": "2024-01-15T10:30:00.000Z"
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalPayments": 50,
      "limit": 10,
      "hasNextPage": true,
      "hasPrevPage": false
    }
  }
}
```

### GET /api/payments/{paymentId}
**Expected Response Structure:**
```json
{
  "success": true,
  "message": "Payment status retrieved successfully",
  "data": {
    "payment": {
      "id": 1,
      "transactionId": "txn_1234567890_abc123",
      "status": "completed",
      "amount": "99.99",
      "currency": "USD",
      "paymentMethod": "credit_card",
      "description": "Payment for premium subscription",
      "createdAt": "2024-01-15T10:30:00.000Z",
      "paidAt": "2024-01-15T10:35:00.000Z"
    }
  }
}
```

## Chatbot APIs

### POST /api/chatbot/chat
**Request Body:**
```json
{
  "message": "What are some good trading strategies for beginners?",
  "conversationHistory": [
    {
      "role": "user",
      "content": "Hello"
    }
  ]
}
```

**Expected Response Structure:**
```json
{
  "success": true,
  "message": "Response generated successfully",
  "data": {
    "response": "For beginners, I recommend starting with fundamental analysis and risk management. Focus on understanding market trends, set stop-losses, and never invest more than you can afford to lose.",
    "timestamp": "2024-01-15T10:30:00.000Z",
    "quota": {
      "used": 3,
      "limit": 10,
      "remaining": 7
    }
  }
}
```

### GET /api/chatbot/history
**Expected Response Structure:**
```json
{
  "success": true,
  "message": "Chat history retrieved successfully",
  "data": {
    "chatHistory": [
      {
        "id": 1,
        "userMessage": "What are some good trading strategies?",
        "botResponse": "For beginners, I recommend starting with fundamental analysis...",
        "model": "gpt-3.5-turbo",
        "responseTime": 2500,
        "chatDate": "2024-01-15T10:30:00.000Z",
        "createdAt": "2024-01-15T10:30:00.000Z"
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 3,
      "totalChats": 25,
      "limit": 10,
      "hasNextPage": true,
      "hasPrevPage": false
    },
    "quota": {
      "used": 7,
      "limit": 10,
      "remaining": 3
    }
  }
}
```

### GET /api/chatbot/info
**Expected Response Structure:**
```json
{
  "success": true,
  "message": "Chatbot information retrieved successfully",
  "data": {
    "name": "fxee.ai Assistant",
    "description": "AI-powered assistant for trading and financial guidance",
    "model": "gpt-3.5-turbo",
    "capabilities": [
      "Trading advice and education",
      "Financial market insights",
      "General question answering",
      "Platform assistance"
    ],
    "version": "1.0.0",
    "status": "active"
  }
}
```

## Recommendation APIs

### POST /api/recommendations/custom
**Request Body:**
```json
{
  "profitTarget": 5000,
  "maxRisk": 2000,
  "riskLevel": "mid",
  "tradingType": "swing_trade",
  "tradingVersion": "pro",
  "symbol": "EURUSD",
  "timeFrame": "2 Days",
  "customGoals": "Focus on support levels"
}
```

**Expected Response Structure:**
```json
{
  "success": true,
  "message": "Custom analysis generated successfully",
  "data": {
    "id": 123,
    "symbol": "BTCUSD",
    "entryPrice": "65432.50",
    "targetPrice": "68950.00",
    "stopLoss": "63900.00",
    "confidence": 75,
    "riskLevel": "mid",
    "timeframe": "1D",
    "strategy": "swing_trade_pro_breakout",
    "riskRewardRatio": "1:2.5",
    "additionalTargets": ["69500.00", "70000.00"],
    "detailedAnalysis": "Based on current market conditions...",
    "validUntil": "2024-01-16T10:30:00.000Z",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

### GET /api/recommendations/custom/my-analyses
**Expected Response Structure:**
```json
{
  "success": true,
  "data": [
    {
      "id": 123,
      "userId": 5,
      "type": "custom_analysis",
      "symbol": "BTCUSD",
      "entryPrice": "65432.50",
      "targetPrice": "68950.00",
      "stopLoss": "63900.00",
      "confidence": 75,
      "validUntil": "2024-01-16T10:30:00.000Z",
      "createdAt": "2024-01-15T10:30:00.000Z"
    }
  ],
  "count": 10
}
```

### GET /api/recommendations/custom/{id}
**Expected Response Structure:**
```json
{
  "success": true,
  "data": {
    "id": 123,
    "userId": 5,
    "type": "custom_analysis",
    "title": "Custom swing_trade Analysis - BTCUSD",
    "description": "Detailed analysis based on user parameters...",
    "symbol": "BTCUSD",
    "entryPrice": "65432.50",
    "targetPrice": "68950.00",
    "stopLoss": "63900.00",
    "confidence": 75,
    "riskLevel": "mid",
    "timeframe": "1D",
    "strategy": "swing_trade_pro_breakout",
    "riskRewardRatio": "1:2.5",
    "profitPercentage": "5.42",
    "riskPercentage": "2.17",
    "metadata": "{\"userRequest\":{...},\"additionalTargets\":[...]}",
    "validUntil": "2024-01-16T10:30:00.000Z",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

### GET /api/recommendations/custom/supported-symbols
**Expected Response Structure:**
```json
{
  "success": true,
  "data": {
    "total": 20,
    "symbols": [
      {
        "id": 19,
        "symbol": "EURUSD",
        "type": "Forex"
      }
    ],
    "byType": {
      "Forex": [
        {"id": 19, "symbol": "EURUSD", "type": "Forex"},
        {"id": 26, "symbol": "GBPUSD", "type": "Forex"}
      ],
      "Crypto": [
        {"id": 52, "symbol": "BITCOIN", "type": "Crypto"},
        {"id": 59, "symbol": "ETHEREUM", "type": "Crypto"}
      ],
      "Commodities": [
        {"id": 107, "symbol": "XAUUSD", "type": "Commodities"},
        {"id": 101, "symbol": "XAGUSD", "type": "Commodities"}
      ]
    }
  },
  "message": "These symbols are supported for custom analysis"
}
```

### GET /api/recommendations/active
**Expected Response Structure:**
```json
{
  "success": true,
  "data": [
    {
      "id": 123,
      "type": "standard_hourly",
      "title": "EURUSD Tier 1 - Great Profit Signal",
      "description": "Aggressive high-profit analysis based on market data",
      "symbol": "EURUSD",
      "entryPrice": "1.0850",
      "targetPrice": "1.0950",
      "stopLoss": "1.0800",
      "confidence": 85,
      "riskLevel": "high",
      "profitTier": "GREAT_PROFIT",
      "validUntil": "2024-01-15T14:30:00.000Z",
      "createdAt": "2024-01-15T10:30:00.000Z"
    }
  ],
  "count": 25
}
```

## Error Response Format

All APIs should return consistent error responses:

```json
{
  "success": false,
  "error": "Error message",
  "details": {
    "field": "specific error details"
  }
}
```

Or for authentication errors:

```json
{
  "status": "failed",
  "message": "Error message"
}
```

## Authentication Headers

All protected endpoints should expect:
```
Authorization: Bearer <token>
```

## CORS Configuration

The backend should allow CORS from the frontend domain:
```
Access-Control-Allow-Origin: http://localhost:3000 (development)
Access-Control-Allow-Origin: https://yourdomain.com (production)
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
```

## Rate Limiting

Implement rate limiting for:
- Authentication endpoints (login, register)
- Chatbot endpoints
- API endpoints in general

## Security Requirements

1. **JWT Tokens**: Use secure JWT tokens with appropriate expiration
2. **Password Hashing**: Use bcrypt or similar for password hashing
3. **Input Validation**: Validate all inputs on the backend
4. **SQL Injection Protection**: Use parameterized queries
5. **XSS Protection**: Sanitize user inputs
6. **HTTPS**: Use HTTPS in production

## Database Schema Requirements

### Users Table
```sql
CREATE TABLE users (
  id VARCHAR(255) PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  fullName VARCHAR(255) NOT NULL,
  userName VARCHAR(255) UNIQUE NOT NULL,
  role ENUM('user', 'admin', 'trader') DEFAULT 'user',
  avatar VARCHAR(500),
  emailVerified BOOLEAN DEFAULT FALSE,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Payments Table
```sql
CREATE TABLE payments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  transactionId VARCHAR(255) UNIQUE NOT NULL,
  userId INT NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'USD',
  status ENUM('pending', 'processing', 'completed', 'failed', 'cancelled', 'refunded') DEFAULT 'pending',
  paymentMethod VARCHAR(50) NOT NULL,
  description TEXT,
  paymentProcessor VARCHAR(50),
  metadata JSON,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  paidAt TIMESTAMP NULL,
  failedAt TIMESTAMP NULL,
  FOREIGN KEY (userId) REFERENCES users(id)
);
```

### Chat History Table
```sql
CREATE TABLE chat_history (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT NOT NULL,
  userMessage TEXT NOT NULL,
  botResponse TEXT NOT NULL,
  model VARCHAR(50) DEFAULT 'gpt-3.5-turbo',
  responseTime INT,
  chatDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users(id)
);
```

### Custom Analyses Table
```sql
CREATE TABLE custom_analyses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId INT NOT NULL,
  type VARCHAR(50) DEFAULT 'custom_analysis',
  title VARCHAR(255),
  description TEXT,
  symbol VARCHAR(20) NOT NULL,
  entryPrice DECIMAL(15,5) NOT NULL,
  targetPrice DECIMAL(15,5) NOT NULL,
  stopLoss DECIMAL(15,5) NOT NULL,
  confidence INT NOT NULL,
  riskLevel ENUM('low', 'mid', 'high') DEFAULT 'mid',
  timeframe VARCHAR(20),
  strategy VARCHAR(100),
  riskRewardRatio VARCHAR(20),
  profitPercentage DECIMAL(5,2),
  riskPercentage DECIMAL(5,2),
  additionalTargets JSON,
  detailedAnalysis TEXT,
  metadata JSON,
  validUntil TIMESTAMP NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users(id)
);
```

## Implementation Notes

1. **Flexible Response Handling**: The frontend is designed to handle multiple response structures, but the backend should be consistent
2. **Error Handling**: Always return proper HTTP status codes and error messages
3. **Validation**: Validate all inputs and return appropriate error messages
4. **Security**: Implement proper authentication and authorization
5. **Performance**: Use appropriate indexes and optimize database queries
6. **Logging**: Implement comprehensive logging for debugging and monitoring

## 🔧 REQUIRED OPENAPI SPECIFICATION CHANGES

### 1. Fix Login Response Structure
Change `/api/auth/login` response from:
```json
"data": {
  "type": "array",
  "items": {
    "type": "object"
  }
}
```
To:
```json
"data": {
  "type": "object",
  "properties": {
    "userData": {
      "type": "object",
      "properties": {
        "id": { "type": "string" },
        "email": { "type": "string" },
        "fullName": { "type": "string" },
        "userName": { "type": "string" },
        "role": { "type": "string" },
        "avatar": { "type": "string" },
        "emailVerified": { "type": "boolean" },
        "createdAt": { "type": "string", "format": "date-time" },
        "updatedAt": { "type": "string", "format": "date-time" }
      }
    }
  }
}
```

### 2. Fix User ID Types
Change all user IDs from `"type": "integer"` to `"type": "string"` throughout the specification.

### 3. Add Google OAuth Response
Add proper response structure for `/api/auth/google` endpoint.

### 4. Ensure Consistency
Make sure all endpoints follow the same response pattern with `success`, `message`, and `data` fields where appropriate.
