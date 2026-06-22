import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  User,
  CircleDollarSign,
  Building2,
  LogIn,
  AlertCircle
} from 'lucide-react';

import { useAuth } from '../../context/AuthContext';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { UserRole } from '../../types';
import { OTPInput } from "../../components/security/OTPInput";

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('entrepreneur');

  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<1 | 2>(1);

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // STEP 1 → move to OTP
    if (step === 1) {
      setStep(2);
      return;
    }

    // STEP 2 → verify OTP + login
    setIsLoading(true);

    try {
      if (otp !== '123456') {
        throw new Error('Invalid OTP. Please try again.');
      }

      await login(email, password, role);

      navigate(
        role === 'entrepreneur'
          ? '/dashboard/entrepreneur'
          : '/dashboard/investor'
      );
    } catch (err) {
      setError((err as Error).message);
      setIsLoading(false);
    }
  };

  const fillDemoCredentials = (userRole: UserRole) => {
    if (userRole === 'entrepreneur') {
      setEmail('sarah@techwave.io');
      setPassword('password123');
    } else {
      setEmail('michael@vcinnovate.com');
      setPassword('password123');
    }
    setRole(userRole);
    setStep(1);
    setOtp('');
  };

  const goBackToLogin = () => {
    setStep(1);
    setOtp('');
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">

      {/* HEADER */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="w-12 h-12 bg-primary-600 rounded-md flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M16 21V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V21"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to Business Nexus
        </h2>

        <p className="mt-2 text-center text-sm text-gray-600">
          Connect with investors and entrepreneurs
        </p>
      </div>

      {/* FORM */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">

          {/* ERROR */}
          {error && (
            <div className="mb-4 bg-error-50 border border-error-500 text-error-700 px-4 py-3 rounded-md flex items-start">
              <AlertCircle size={18} className="mr-2 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>

            {/* ROLE SELECT ONLY ON STEP 1 */}
            {step === 1 && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  I am a
                </label>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className={`py-3 px-4 border rounded-md flex items-center justify-center transition-colors ${
                      role === 'entrepreneur'
                        ? 'border-primary-500 bg-primary-50 text-primary-700'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setRole('entrepreneur')}
                  >
                    <Building2 size={18} className="mr-2" />
                    Entrepreneur
                  </button>

                  <button
                    type="button"
                    className={`py-3 px-4 border rounded-md flex items-center justify-center transition-colors ${
                      role === 'investor'
                        ? 'border-primary-500 bg-primary-50 text-primary-700'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setRole('investor')}
                  >
                    <CircleDollarSign size={18} className="mr-2" />
                    Investor
                  </button>
                </div>
              </div>
            )}

            {/* STEP 1: EMAIL + PASSWORD */}
            {step === 1 ? (
              <>
                <Input
                  label="Email address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  fullWidth
                  startAdornment={<User size={18} />}
                />

                <Input
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  fullWidth
                />
              </>
            ) : (
              /* STEP 2: OTP */
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Enter OTP Verification Code
                </label>

                <OTPInput value={otp} onChange={setOtp} />

                <p className="mt-2 text-sm text-gray-500">
                  Demo OTP: 123456
                </p>

                <button
                  type="button"
                  onClick={goBackToLogin}
                  className="mt-3 text-primary-600 text-sm hover:underline"
                >
                  ← Back to login
                </button>
              </div>
            )}

            {/* REMEMBER ME ONLY STEP 1 */}
            {step === 1 && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
            )}

            {/* BUTTON */}
            <Button
              type="submit"
              fullWidth
              isLoading={isLoading}
              leftIcon={<LogIn size={18} />}
            >
              {step === 1 ? 'Continue' : 'Verify OTP'}
            </Button>
          </form>

          {/* DEMO ACCOUNTS */}
          {step === 1 && (
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>

                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Demo Accounts
                  </span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  onClick={() => fillDemoCredentials('entrepreneur')}
                  leftIcon={<Building2 size={16} />}
                >
                  Entrepreneur
                </Button>

                <Button
                  variant="outline"
                  onClick={() => fillDemoCredentials('investor')}
                  leftIcon={<CircleDollarSign size={16} />}
                >
                  Investor
                </Button>
              </div>
            </div>
          )}

          {/* REGISTER LINK */}
          {step === 1 && (
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link
                  to="/register"
                  className="font-medium text-primary-600 hover:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};