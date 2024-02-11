import React from 'react';

function SignupSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-6">CinePulse</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign Up Successful!</h2>
        <p className="text-lg text-gray-700 mb-6">A verification email has been sent to your email address. Please check your inbox and follow the instructions to verify your account.</p>
        <a href="/login" className="block w-full bg-blue-500 text-white py-2 px-4 rounded-md font-semibold text-center hover:bg-blue-600 transition duration-300">Continue to Login</a>
      </div>
    </div>
  );
}

export default SignupSuccessPage;
