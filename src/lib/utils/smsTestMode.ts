// SMS Test Mode Utility with Console Logs
export const SMS_TEST_MODE = {
  ENABLED: process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_SMS_TEST_MODE === 'true',
  
  TEST_CODE: '123456',
  
  TEST_PHONE_NUMBERS: [
    '+1234567890',
    '+1987654321',
    '+1555123456',
    '1234567890',
    '9876543210',
    '+923019511251' 
  ],
  
  TWILIO_NUMBER: '+19862350580',
  SMS_MESSAGE: 'Your FXEE verification code is: {code}. This code will expire in 10 minutes.',
  
  log: {
    sendSMS: (phoneNumber: string, code: string) => {
      console.log('📱 SMS TEST MODE - Sending SMS:');
      console.log('┌─────────────────────────────────────┐');
      console.log(`│  FROM: ${SMS_TEST_MODE.TWILIO_NUMBER.padEnd(25)} │`);
      console.log(`│  TO: ${phoneNumber.padEnd(25)} │`);
      console.log('│  STATUS: queued (test mode)         │');
      console.log('│  PRICE: $0.00 (test mode)          │');
      console.log('└─────────────────────────────────────┘');
      console.log('📄 SMS MESSAGE:');
      console.log('┌─────────────────────────────────────┐');
      const message = SMS_TEST_MODE.SMS_MESSAGE.replace('{code}', code);
      const lines = message.match(/.{1,35}/g) || [message];
      lines.forEach(line => {
        console.log(`│ ${line.padEnd(35)} │`);
      });
      console.log('└─────────────────────────────────────┘');
      console.log('✅ SMS sent successfully (TEST MODE)');
    },
    
    verifySMS: (phoneNumber: string, code: string, success: boolean) => {
      console.log('🔐 SMS TEST MODE - Verifying SMS:');
      console.log('┌─────────────────────────────────────┐');
      console.log(`│  PHONE: ${phoneNumber.padEnd(25)} │`);
      console.log(`│  CODE: ${code.padEnd(25)} │`);
      console.log(`│  STATUS: ${success ? 'VERIFIED ✅' : 'INVALID ❌'}${success ? '' : ' (test mode)'} │`);
      console.log('└─────────────────────────────────────┘');
      if (success) {
        console.log('🎉 SMS verification successful (TEST MODE)');
      } else {
        console.log('❌ SMS verification failed (TEST MODE)');
        console.log(`💡 Test mode code is: ${SMS_TEST_MODE.TEST_CODE}`);
      }
    },
    
    updatePhone: (phoneNumber: string) => {
      console.log('📞 SMS TEST MODE - Updating Phone:');
      console.log('┌─────────────────────────────────────┐');
      console.log(`│  NEW PHONE: ${phoneNumber.padEnd(20)} │`);
      console.log('│  STATUS: updated (test mode)       │');
      console.log('└─────────────────────────────────────┘');
      console.log('✅ Phone number updated (TEST MODE)');
    },
    
    activate: () => {
      console.log('🧪 SMS TEST MODE ACTIVATED');
      console.log('┌─────────────────────────────────────┐');
      console.log('│  🚫 No real SMS will be sent       │');
      console.log('│  📱 All SMS operations logged       │');
      console.log(`│  🔑 Test code: ${SMS_TEST_MODE.TEST_CODE}              │`);
      console.log('│  📞 Test phones: +1234567890, etc   │');
      console.log('└─────────────────────────────────────┘');
    }
  },
  
  isTestPhoneNumber: (phone: string) => {
    const cleanPhone = phone.replace(/\D/g, '');
    return SMS_TEST_MODE.TEST_PHONE_NUMBERS.some(testNum => 
      testNum.replace(/\D/g, '') === cleanPhone
    );
  },
  
  simulateDelay: (ms: number = 1000) => new Promise(resolve => setTimeout(resolve, ms)),
  
  updateConfig: (config: {
    testMode: boolean;
    testSMSCode: string;
    testPhoneNumbers: string[];
    twilioNumber: string;
    smsMessage: string;
  }) => {
    SMS_TEST_MODE.ENABLED = config.testMode;
    SMS_TEST_MODE.TEST_CODE = config.testSMSCode;
    SMS_TEST_MODE.TEST_PHONE_NUMBERS = config.testPhoneNumbers;
    SMS_TEST_MODE.TWILIO_NUMBER = config.twilioNumber;
    SMS_TEST_MODE.SMS_MESSAGE = config.smsMessage;
    
    console.log('🔄 SMS TEST CONFIG UPDATED FROM BACKEND:');
    console.log('┌─────────────────────────────────────┐');
    console.log(`│  Test Mode: ${config.testMode ? 'ENABLED' : 'DISABLED'}${config.testMode ? '' : '     '} │`);
    console.log(`│  Test Code: ${config.testSMSCode}                    │`);
    console.log(`│  Twilio #: ${config.twilioNumber}           │`);
    console.log(`│  Test Phones: ${config.testPhoneNumbers.length} numbers        │`);
    console.log('└─────────────────────────────────────┘');
  },
  
  responses: {
    sendSMS: {
      success: true,
      message: "SMS sent successfully (TEST MODE)",
    },
    verifySMS: {
      success: true,
      message: "SMS verified successfully (TEST MODE)",
      data: {
        token: "test-jwt-token",
        userData: {
          id: "test-user-id",
          email: "test@example.com",
          phoneNumber: "+1234567890",
          twoFAMethod: "sms",
        },
      },
    },
    updatePhone: {
      success: true,
      message: "Phone number updated successfully (TEST MODE)",
    },
  }
};

if (SMS_TEST_MODE.ENABLED) {
  SMS_TEST_MODE.log.activate();
}
