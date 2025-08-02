'use client';

import { useState } from 'react';
import { QrCodeIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline';

interface PayNowPaymentProps {
  amount: number;
  payeeInfo: {
    name: string;
    phone?: string;
    nric?: string;
  };
  onPaymentComplete?: () => void;
}

export function PayNowPayment({ amount, payeeInfo, onPaymentComplete }: PayNowPaymentProps) {
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'completed' | 'expired'>('pending');
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds

  // Generate PayNow QR code data (simplified for demo)
  const generatePayNowQR = () => {
    const qrData = {
      amount: amount.toFixed(2),
      payee: payeeInfo.phone || payeeInfo.nric,
      reference: `TCG-${Date.now()}`,
    };
    return `paynow://pay?amount=${qrData.amount}&to=${qrData.payee}&ref=${qrData.reference}`;
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const formatSGD = (amount: number) => {
    return new Intl.NumberFormat('en-SG', {
      style: 'currency',
      currency: 'SGD',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  if (paymentStatus === 'completed') {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6 text-center">
        <CheckCircleIcon className="mx-auto h-16 w-16 text-green-500 mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Payment Confirmed!</h3>
        <p className="text-gray-600 mb-4">
          Your payment of {formatSGD(amount)} has been received.
        </p>
        <p className="text-sm text-gray-500">
          You will receive a confirmation SMS shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">PayNow Payment</h3>
        <div className="text-2xl font-bold text-red-600 mb-2">
          {formatSGD(amount)}
        </div>
        <p className="text-sm text-gray-600">
          Paying to: {payeeInfo.name}
        </p>
      </div>

      {/* QR Code Display */}
      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <div className="text-center">
          <div className="mx-auto w-48 h-48 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center mb-4">
            <div className="text-center">
              <QrCodeIcon className="mx-auto h-16 w-16 text-gray-400 mb-2" />
              <p className="text-sm text-gray-500">PayNow QR Code</p>
              <p className="text-xs text-gray-400 mt-1">
                Scan with your banking app
              </p>
            </div>
          </div>
          
          {/* Timer */}
          <div className="flex items-center justify-center text-orange-600 mb-4">
            <ClockIcon className="h-5 w-5 mr-2" />
            <span className="font-medium">{formatTime(timeLeft)} remaining</span>
          </div>
        </div>
      </div>

      {/* Payment Instructions */}
      <div className="space-y-4 mb-6">
        <h4 className="font-semibold text-gray-900">How to pay:</h4>
        <ol className="text-sm text-gray-600 space-y-2">
          <li className="flex items-start">
            <span className="bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">1</span>
            Open your mobile banking app (DBS, OCBC, UOB, etc.)
          </li>
          <li className="flex items-start">
            <span className="bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">2</span>
            Select &quot;PayNow&quot; or &quot;Scan QR&quot; option
          </li>
          <li className="flex items-start">
            <span className="bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">3</span>
            Scan the QR code above or enter: {payeeInfo.phone || payeeInfo.nric}
          </li>
          <li className="flex items-start">
            <span className="bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">4</span>
            Confirm payment amount: {formatSGD(amount)}
          </li>
        </ol>
      </div>

      {/* Alternative Payment Info */}
      <div className="bg-blue-50 rounded-lg p-4 mb-6">
        <h5 className="font-medium text-blue-900 mb-2">Manual PayNow Details:</h5>
        <div className="text-sm text-blue-800 space-y-1">
          <p><strong>PayNow ID:</strong> {payeeInfo.phone || payeeInfo.nric}</p>
          <p><strong>Amount:</strong> {formatSGD(amount)}</p>
          <p><strong>Reference:</strong> TCG-{Date.now().toString().slice(-6)}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3">
        <button
          onClick={() => setPaymentStatus('completed')}
          className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
        >
          Payment Made
        </button>
        <button className="flex-1 bg-gray-100 text-gray-900 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors">
          Cancel
        </button>
      </div>

      {/* Security Notice */}
      <div className="mt-4 text-xs text-gray-500 text-center">
        🔒 Secure payment powered by Singapore&apos;s PayNow system
      </div>
    </div>
  );
}