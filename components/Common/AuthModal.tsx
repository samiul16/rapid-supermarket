"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Lock, User, Phone, Eye, EyeOff } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "login" | "signup";
}

const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = "login",
}) => {
  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Update mode when initialMode prop changes
  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", loginData);
    // Add your login logic here
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup:", signupData);
    // Add your signup logic here
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999]"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 flex items-center justify-center z-[10000] p-4"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex">
              {/* Left Side - Red Background */}
              <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-red-600 to-red-700 p-8 flex-col justify-center items-center text-white relative">
                {/* Decorative Elements */}
                <div className="absolute top-8 left-8 w-16 h-16 bg-white/10 rounded-full"></div>
                <div className="absolute bottom-12 right-12 w-12 h-12 bg-white/10 rounded-lg"></div>
                <div className="absolute top-1/2 right-8 w-8 h-8 bg-white/10 rounded-full"></div>

                <div className="text-center z-10">
                  <h2 className="text-4xl font-bold mb-4">Welcome</h2>
                  <p className="text-red-100 mb-8 leading-relaxed max-w-sm">
                    QuickCart is a rapidly expanding global grocery delivery
                    platform, serving customers and food enthusiasts worldwide.
                  </p>

                  <button
                    onClick={() =>
                      setMode(mode === "login" ? "signup" : "login")
                    }
                    className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-red-600 transition-all duration-300 font-semibold cursor-pointer shadow"
                  >
                    {mode === "login" ? "Sign Up" : "Log In"}
                  </button>
                </div>
              </div>

              {/* Right Side - White Background with Form */}
              <div className="w-full md:w-1/2 p-8 relative">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 bg-red-100 hover:bg-red-200 rounded-full flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5 text-red-600" />
                </button>

                {/* Form Content */}
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-red-600 mb-6">
                    {mode === "login" ? "Log in" : "Sign in"}
                  </h3>

                  {mode === "login" ? (
                    /* Login Form */
                    <form onSubmit={handleLoginSubmit} className="space-y-4">
                      {/* Email Field */}
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={loginData.email}
                          onChange={handleLoginChange}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          placeholder=" "
                          required
                          className="w-full h-12 px-4 pl-12 bg-gray-50 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all peer placeholder-transparent"
                        />
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <label
                          className={`absolute left-12 bg-gray-50 px-2 transition-all duration-200 pointer-events-none ${
                            loginData.email || focusedField === "email"
                              ? "-top-2.5 text-xs text-red-600"
                              : "top-3 text-base text-gray-500"
                          }`}
                        >
                          Email Address
                        </label>
                      </div>

                      {/* Password Field */}
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={loginData.password}
                          onChange={handleLoginChange}
                          onFocus={() => setFocusedField("password")}
                          onBlur={() => setFocusedField(null)}
                          placeholder=" "
                          required
                          className="w-full h-12 px-4 pl-12 pr-12 bg-gray-50 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all peer placeholder-transparent"
                        />
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <label
                          className={`absolute left-12 bg-gray-50 px-2 transition-all duration-200 pointer-events-none ${
                            loginData.password || focusedField === "password"
                              ? "-top-2.5 text-xs text-red-600"
                              : "top-3 text-base text-gray-500"
                          }`}
                        >
                          Password
                        </label>
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-600 transition-colors"
                        >
                          {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>

                      {/* Remember Me & Forgot Password */}
                      <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                          />
                          <span className="text-gray-600">Remember me</span>
                        </label>
                        <button
                          type="button"
                          className="text-red-600 hover:text-red-700 font-medium"
                        >
                          Forget your password?
                        </button>
                      </div>

                      {/* Login Button */}
                      <button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-full font-semibold transition-colors cursor-pointer shadow"
                      >
                        Log In
                      </button>
                    </form>
                  ) : (
                    /* Signup Form */
                    <form onSubmit={handleSignupSubmit} className="space-y-4">
                      {/* First Name */}
                      <div className="relative">
                        <input
                          type="text"
                          name="firstName"
                          value={signupData.firstName}
                          onChange={handleSignupChange}
                          onFocus={() => setFocusedField("firstName")}
                          onBlur={() => setFocusedField(null)}
                          placeholder=" "
                          required
                          className="w-full h-12 px-4 pl-12 bg-gray-50 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all peer placeholder-transparent"
                        />
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <label
                          className={`absolute left-12 bg-gray-50 px-2 transition-all duration-200 pointer-events-none ${
                            signupData.firstName || focusedField === "firstName"
                              ? "-top-2.5 text-xs text-red-600"
                              : "top-3 text-base text-gray-500"
                          }`}
                        >
                          First Name
                        </label>
                      </div>

                      {/* Last Name */}
                      <div className="relative">
                        <input
                          type="text"
                          name="lastName"
                          value={signupData.lastName}
                          onChange={handleSignupChange}
                          onFocus={() => setFocusedField("lastName")}
                          onBlur={() => setFocusedField(null)}
                          placeholder=" "
                          required
                          className="w-full h-12 px-4 pl-12 bg-gray-50 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all peer placeholder-transparent"
                        />
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <label
                          className={`absolute left-12 bg-gray-50 px-2 transition-all duration-200 pointer-events-none ${
                            signupData.lastName || focusedField === "lastName"
                              ? "-top-2.5 text-xs text-red-600"
                              : "top-3 text-base text-gray-500"
                          }`}
                        >
                          Last Name
                        </label>
                      </div>

                      {/* Phone */}
                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          value={signupData.phone}
                          onChange={handleSignupChange}
                          onFocus={() => setFocusedField("phone")}
                          onBlur={() => setFocusedField(null)}
                          placeholder=" "
                          required
                          className="w-full h-12 px-4 pl-12 bg-gray-50 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all peer placeholder-transparent"
                        />
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <label
                          className={`absolute left-12 bg-gray-50 px-2 transition-all duration-200 pointer-events-none ${
                            signupData.phone || focusedField === "phone"
                              ? "-top-2.5 text-xs text-red-600"
                              : "top-3 text-base text-gray-500"
                          }`}
                        >
                          Phone
                        </label>
                      </div>

                      {/* Email */}
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={signupData.email}
                          onChange={handleSignupChange}
                          onFocus={() => setFocusedField("signupEmail")}
                          onBlur={() => setFocusedField(null)}
                          placeholder=" "
                          required
                          className="w-full h-12 px-4 pl-12 bg-gray-50 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all peer placeholder-transparent"
                        />
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <label
                          className={`absolute left-12 bg-gray-50 px-2 transition-all duration-200 pointer-events-none ${
                            signupData.email || focusedField === "signupEmail"
                              ? "-top-2.5 text-xs text-red-600"
                              : "top-3 text-base text-gray-500"
                          }`}
                        >
                          Email Address
                        </label>
                      </div>

                      {/* Password */}
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={signupData.password}
                          onChange={handleSignupChange}
                          onFocus={() => setFocusedField("signupPassword")}
                          onBlur={() => setFocusedField(null)}
                          placeholder=" "
                          required
                          className="w-full h-12 px-4 pl-12 pr-12 bg-gray-50 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all peer placeholder-transparent"
                        />
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <label
                          className={`absolute left-12 bg-gray-50 px-2 transition-all duration-200 pointer-events-none ${
                            signupData.password ||
                            focusedField === "signupPassword"
                              ? "-top-2.5 text-xs text-red-600"
                              : "top-3 text-base text-gray-500"
                          }`}
                        >
                          Password
                        </label>
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-600 transition-colors"
                        >
                          {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>

                      {/* Confirm Password */}
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          name="confirmPassword"
                          value={signupData.confirmPassword}
                          onChange={handleSignupChange}
                          onFocus={() => setFocusedField("confirmPassword")}
                          onBlur={() => setFocusedField(null)}
                          placeholder=" "
                          required
                          className="w-full h-12 px-4 pl-12 pr-12 bg-gray-50 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-red-200 transition-all peer placeholder-transparent"
                        />
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <label
                          className={`absolute left-12 bg-gray-50 px-2 transition-all duration-200 pointer-events-none ${
                            signupData.confirmPassword ||
                            focusedField === "confirmPassword"
                              ? "-top-2.5 text-xs text-red-600"
                              : "top-3 text-base text-gray-500"
                          }`}
                        >
                          Password
                        </label>
                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-600 transition-colors"
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>

                      {/* Signup Button */}
                      <button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-full font-semibold transition-colors mt-6 cursor-pointer shadow"
                      >
                        Sign Up
                      </button>
                    </form>
                  )}

                  {/* Mobile Toggle Buttons */}
                  <div className="md:hidden mt-6 flex gap-2">
                    <button
                      onClick={() => setMode("login")}
                      className={`flex-1 py-2 px-4 rounded-full font-semibold transition-colors cursor-pointer shadow ${
                        mode === "login"
                          ? "bg-red-600 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      Log In
                    </button>
                    <button
                      onClick={() => setMode("signup")}
                      className={`flex-1 py-2 px-4 rounded-full font-semibold transition-colors cursor-pointer shadow ${
                        mode === "signup"
                          ? "bg-red-600 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
