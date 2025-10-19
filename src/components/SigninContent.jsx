import React, { useState, useEffect } from "react";

const SigninContent = () => {
  const [role, setRole] = useState("buyer");

  useEffect(() => {
    // Get role from URL query parameter
    const params = new URLSearchParams(window.location.search);
    const roleParam = params.get("role");
    if (roleParam === "seller" || roleParam === "buyer") {
      setRole(roleParam);
    }
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white">
      {/* Signin Form */}
      <section className="w-full px-6 sm:px-10 md:px-20">
        <div className="w-full max-w-sm mx-auto">
          {/* Logo and Text */}
          <a href="/" className="flex flex-col items-center mb-10 cursor-pointer hover:opacity-80 transition">
            <img
              src="/images/liquid-logo.svg"
              alt="Liquid Logo"
              className="h-14 mb-0"
            />
          </a>

          {/* Heading and Tabs Row */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Sign in</h1>
            {/* Role Tabs */}
            <div className="flex gap-2 border-b border-gray-300">
              <button
                className={`pb-3 px-4 font-semibold border-b-2 transition-colors ${
                  role === "buyer"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setRole("buyer")}
              >
                As Buyer
              </button>
              <button
                className={`pb-3 px-4 font-semibold border-b-2 transition-colors ${
                  role === "seller"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setRole("seller")}
              >
                As Seller
              </button>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-8">
            {role === "buyer"
              ? "Access your investment portfolio and browse receivables."
              : "Manage your receivables and track your listings."}
          </p>

          {/* Google Sign In Button */}
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition mb-6">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Sign in with Google
          </button>

          {/* Divider */}
          <div className="relative mb-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <span className="relative inline-block bg-white px-3 text-sm text-gray-500">
              Or sign in with email
            </span>
          </div>

          {/* Signin Form */}
          <form action="#" className="space-y-4 mb-8">
            {/* Email Field with Icon */}
            <div className="form-group relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <input
                type="email"
                id="email"
                className="form-control w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                placeholder="Email Address"
              />
            </div>

            {/* Password Field with Icon */}
            <div className="form-group relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <input
                type="password"
                id="password"
                className="form-control w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                placeholder="Password"
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 w-4 h-4 rounded border-gray-300" />
                <span className="text-gray-700">Remember me</span>
              </label>
              <a href="/auth/forgot" className="text-blue-600 font-semibold hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition mt-6"
            >
              Sign In
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600">
            Don't have an account?
            <a href="/signup" className="text-blue-600 font-semibold hover:underline">
              {" "}Sign up now
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default SigninContent;
