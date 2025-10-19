import React, { useState } from "react";

const SignupContent = () => {
  const [role, setRole] = useState("buyer");

  return (
    <main className="min-h-screen flex flex-col lg:flex-row bg-white">
      {/* Left Side: White Panel with Role-Specific Content */}
      <section className="lg:flex lg:w-1/2 flex-col bg-gradient-to-tr from-blue-100 to-white px-5 relative overflow-hidden shadow-lg border my-14 mx-10 md:mx-20 lg:mx-0 lg:ml-20 rounded-xl">
        <a href="/" className="absolute top-8 left-10 z-20 cursor-pointer">
          <img
            src="/images/liquid-logo.svg"
            alt="Liquid Logo"
            className="w-32"
          />
        </a>
        <div className="relative p-12 z-10 text-center space-y-8 items-center mx-auto">
          {role === "buyer" ? (
            <>
              <img
                src="/images/illustration-01.png"
                alt="Buyer illustration"
                className="h-auto md:h-80 mx-auto"
              />
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-gray-900">
                  Start Investing Today
                </h2>
                <p className="text-lg text-gray-600">
                  Access Shariah-compliant, asset-backed receivables with transparent returns. Build your investment portfolio with confidence.
                </p>
              </div>

              <ul className="space-y-3 text-left mx-10 xl:px-10 2xl:px-20">
                <li className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">Secure & Regulated</p>
                    <p className="text-sm text-gray-600">Securities Commission Malaysia approved</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">Asset-Backed</p>
                    <p className="text-sm text-gray-600">Secured by gold and real valuables</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">Halal Returns</p>
                    <p className="text-sm text-gray-600">Shariah-compliant profit model</p>
                  </div>
                </li>
              </ul>
            </>
          ) : (
            <>
              <img
                src="/images/illustration-02.png"
                alt="Seller illustration"
                className="h-auto md:h-80 mx-auto"
              />
              <div className="space-y-4 text-center">
                <h2 className="text-4xl font-bold text-gray-900">
                  Unlock Your Liquidity
                </h2>
                <p className="text-lg text-gray-600">
                  Convert your receivables into immediate funding. Keep operating while we connect you with qualified buyers.
                </p>
              </div>

              <ul className="space-y-3 text-left px-20 mx-10">
                <li className="flex items-left gap-3">
                  <span className="text-2xl flex-shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">Fast Onboarding</p>
                    <p className="text-sm text-gray-600">Verified and listed within days</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">Transparent Pricing</p>
                    <p className="text-sm text-gray-600">Clear ujrah model with no hidden fees</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900">Secure Settlement</p>
                    <p className="text-sm text-gray-600">Trust escrow and verified transactions</p>
                  </div>
                </li>
              </ul>
            </>
          )}
        </div>
      </section>

      {/* Right Side: Signup Form */}
      <section className="w-full lg:w-1/2 items-center flex flex-col justify-center px-6 sm:px-10 md:px-20 py-10 lg:py-0">
        <div className="xl:w-3/4 w-full  mx-auto lg:mx-0">
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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Sign up</h1>
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

          {/* Google Sign Up Button */}
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition mb-6">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Sign up with Google
          </button>

          {/* Divider */}
          <div className="relative mb-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <span className="relative inline-block bg-white px-3 text-sm text-gray-500">
              Or sign up with email
            </span>
          </div>

          {/* Signup Form */}
          <form action="#" className="space-y-4 mb-8">
            {/* Full Name Field with Icon */}
            <div className="form-group relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <input
                type="text"
                id="name"
                className="form-control w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                placeholder="Full Name"
              />
            </div>

            {/* Email Field with Icon */}
            <div className="form-group relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <input
                type="email"
                id="email"
                className="form-control w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                placeholder="Email Address"
              />
            </div>

            {/* Mobile No Field with Icon */}
            <div className="form-group relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
              </div>
              <input
                type="tel"
                id="mobile"
                className="form-control w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                placeholder="Mobile No"
              />
            </div>

            {/* Terms & Privacy */}
            <p className="text-xs text-gray-600 mt-6">
              You are agreeing to the
              <a href="#" className="text-blue-600 font-semibold hover:underline">
                {" "}Terms of Services{" "}
              </a>
              and
              <a href="#" className="text-blue-600 font-semibold hover:underline">
                {" "}Privacy Policy
              </a>
            </p>

            {/* Get Started Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition mt-6"
            >
              Get Started
            </button>
          </form>

          {/* Sign In Link */}
          <p className="text-center text-sm text-gray-600">
            Already a member?
            <a href="/signin" className="text-blue-600 font-semibold hover:underline">
              {" "}Sign in
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default SignupContent;
