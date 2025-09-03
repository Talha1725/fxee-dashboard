import { useEffect } from 'react';
import { useGetTestConfigQuery } from '@/lib/redux/features/auth/authApi';
import { SMS_TEST_MODE } from '@/lib/utils/smsTestMode';

export const useSMSConfig = () => {
  const { data: testConfig, isLoading, error } = useGetTestConfigQuery();

  useEffect(() => {
    if (testConfig?.success && testConfig.data) {
      // Update SMS test mode configuration from backend
      SMS_TEST_MODE.updateConfig(testConfig.data);
    }
  }, [testConfig]);

  return {
    testConfig: testConfig?.data,
    isLoading,
    error,
    isTestModeEnabled: SMS_TEST_MODE.ENABLED,
    testCode: SMS_TEST_MODE.TEST_CODE,
    twilioNumber: SMS_TEST_MODE.TWILIO_NUMBER,
    smsMessage: SMS_TEST_MODE.SMS_MESSAGE,
  };
};
