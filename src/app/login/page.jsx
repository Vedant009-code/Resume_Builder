"use client";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-8">
        
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-600 text-white mb-3">
            📄
          </div>
          <h2 className="text-lg font-semibold">ResumeAI</h2>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-center mb-1">
          Welcome Back
        </h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Sign in to continue to your account
        </p>

        {/* Form */}
        <div className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="you@example.com"
                className="input pl-10"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                ✉️
              </span>
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="••••••••"
                className="input pl-10"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                🔒
              </span>
            </div>
          </div>

          {/* Remember / Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="rounded" />
              Remember me
            </label>
            <button className="text-indigo-600 hover:underline">
              Forgot password?
            </button>
          </div>

          {/* Sign In */}
          <button className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition">
            Sign In
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="px-3 text-sm text-gray-500">
            Or continue with
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Google Sign In */}
        <button className="w-full border rounded-lg py-2.5 flex items-center justify-center gap-2 text-sm hover:bg-gray-50">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Sign in with Google
        </button>

        {/* Footer */}
        <p className="text-sm text-center text-gray-600 mt-6">
          Don&apos;t have an account?{" "}
          <span className="text-indigo-600 hover:underline cursor-pointer">
            Create account
          </span>
        </p>
      </div>
    </div>
  );
}
