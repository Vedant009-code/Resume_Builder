"use client";

export default function SignupPage() {
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
          Create Account
        </h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          Start building your professional resume today
        </p>

        {/* Form */}
        <div className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="input"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="input"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input"
            />
          </div>

          {/* Terms */}
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" className="rounded" />
            I agree to the{" "}
            <span className="text-indigo-600 cursor-pointer">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-indigo-600 cursor-pointer">
              Privacy Policy
            </span>
          </label>

          {/* Create Account */}
          <button className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition">
            Create Account
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

        {/* Google Signup */}
        <button className="w-full border rounded-lg py-2.5 flex items-center justify-center gap-2 text-sm hover:bg-gray-50">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Sign up with Google
        </button>

        {/* Footer */}
        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-600 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
