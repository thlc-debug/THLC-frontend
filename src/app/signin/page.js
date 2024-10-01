"use client";
import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { base_url } from "@/base_url";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Correct spelling
import ClipLoader from "react-spinners/ClipLoader";

// Removed unused imports
import { useSelector, useDispatch } from "react-redux";
import { login } from "@/store/features/auth/auth-slice";

import axios from "axios";

const SignInPage = () => {
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    console.log(auth);
  }, [auth]);

  const [isHiddenDivVisible, setIsHiddenDivVisible] = useState(false);
  const [isPasswordResetVisible, setIsPasswordResetVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [inputs, setInputs] = useState({ mail: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (auth.token) {
      router.push("/");
    }
  }, [auth.token, router]);

  useEffect(() => {
    // Check if token exists but user details are missing
    if (auth.token && !auth.data) {
      fetchUserDetails(auth.token); // Fetch user details using the token
    }
  }, [auth.token]);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${base_url}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      });

      const result = await response.json();

      if (result.token && result.data) {
        dispatch(
          login({
            token: result.token,
            data: result.data,
          })
        );

        fetchUserDetails(); // Optional: fetch additional user details

        router.push("/");
      } else {
        toast.error(result.message || "Failed to login. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const fetchUserDetails = async (token) => {
    try {
      const response = await axios.get(`${base_url}/user/details`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("response data in sign in", response);

      if (response.data) {
        dispatch(
          setUserData({
            _id: response.data._id,
            name: response.data.username,
            userType: response.data.accountType,
            wishlist: response.data.wishlist,
            lastLogin: response.data.lastLoggedIn,
            mail: response.data.email,
          })
        );
      }
    } catch (error) {
      toast.error("Failed to fetch user details. Please try again.");
    }
  };

  const handleForgotPassword = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${base_url}/api/auth/request-password-reset`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mail: forgotPasswordEmail }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setMessage("OTP sent to your email.");
        setIsPasswordResetVisible(true);
      } else {
        toast.error(
          result.message || "Failed to send OTP. Please check your email."
        );
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${base_url}/api/auth/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mail: forgotPasswordEmail, otp, newPassword }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Password has been reset successfully.");
        setIsHiddenDivVisible(false);
        setIsPasswordResetVisible(false);
      } else {
        toast.error(
          result.message || "Failed to reset password. Please try again."
        );
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const toggleHiddenDiv = () => {
    setIsHiddenDivVisible((prev) => !prev);
    if (!isHiddenDivVisible) setIsPasswordResetVisible(false);
  };

  const signInGoogle = () => {
    const messageListener = async (event) => {
      if (event.origin !== "https://thlc-backend.vercel.app") return;

      const messageListener = (event) => {
        if (event.data) {
          const { token } = event.data;

          if (token) {
            dispatch(login({ token })); // Store Google login token in Redux
          } else {
            router.push("/auth/failure");
          }
        }
      };
    };

    window.addEventListener("message", messageListener, { once: true });

    window.open(
      `${base_url}/api/auth/google`,
      "_blank",
      "width=500,height=600"
    );
  };
  return (
    <div className="font-f_3">
      <ToastContainer />
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <ClipLoader color="#FFFFFF" size={100} />
        </div>
      )}
      <div className="m-auto">
        {isHiddenDivVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div
              onClick={toggleHiddenDiv}
              className="absolute top-4 right-4 cursor-pointer text-white"
            >
              <RxCross2 size={24} />
            </div>
            <div className="relative bg-white rounded-3xl p-8 shadow-lg w-80 md:w-96">
              {!isPasswordResetVisible ? (
                <>
                  <input
                    type="email"
                    className="w-full p-2 border rounded-full mt-4"
                    placeholder="Enter your email"
                    value={forgotPasswordEmail}
                    onChange={(e) => setForgotPasswordEmail(e.target.value)}
                  />
                  <button
                    onClick={handleForgotPassword}
                    type="button"
                    className="w-full mt-5 text-white bg-gray-800 hover:bg-gray-900 rounded-full py-2"
                  >
                    Continue
                  </button>
                </>
              ) : (
                <>
                  <input
                    type="email"
                    className="w-full p-2 border rounded-full mt-4"
                    placeholder="Enter your email"
                    value={forgotPasswordEmail}
                    readOnly
                  />
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      className="w-full p-2 border rounded-full mt-4 pr-24"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                    <button
                      onClick={handleForgotPassword}
                      type="button"
                      className="absolute mt-2 p-1 right-2 top-1/2 transform -translate-y-1/2 text-white bg-gray-800 hover:bg-gray-900 rounded-full"
                    >
                      Send OTP
                    </button>
                  </div>
                  <input
                    type="password"
                    className="w-full p-2 border rounded-full mt-4"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <button
                    onClick={handlePasswordReset}
                    type="button"
                    className="w-full mt-5 text-white bg-gray-800 hover:bg-gray-900 rounded-full py-2"
                  >
                    Set Password
                  </button>
                </>
              )}
              <div className="ml-[8rem] md:ml-[9.5rem] text-center bottom-4 pt-2 left-1/2 transform -translate-x-1/2 text-gray-700">
                {message}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col md:flex-row h-screen w-screen">
        <div className="md:w-2/5 w-full h-full flex items-center justify-center p-4">
          <div className="max-w-md w-full">
            <div className="text-center text-3xl mb-3">
              LuxuryHotelConcierge
            </div>
            <div className="text-center text-gray-400 text-md">
              Discover the epitome of luxury and comfort at our world-renowned
              hotels.
            </div>
            <div className="text-center text-3xl my-5">Sign In</div>
            <div className="mx-4 md:mx-10">
              <div className="mb-4">
                <input
                  name="mail"
                  onChange={handleChange}
                  type="email"
                  className="w-full p-2 border rounded-full"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <input
                  name="password"
                  onChange={handleChange}
                  type="password"
                  className="w-full p-2 border rounded-full"
                  placeholder="Enter your password"
                />
              </div>
              <button
                onClick={handleClick}
                type="button"
                className="w-full text-white bg-gray-800 hover:bg-gray-900 rounded-full py-2 mt-2"
              >
                Continue
              </button>
              <div
                onClick={toggleHiddenDiv}
                className="text-gray-700 text-sm mb-2 text-center mt-4 cursor-pointer"
              >
                Forgot password?
              </div>
              <div className="relative flex py-2 items-center mx-4">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="flex-shrink mx-4 text-gray-400">or</span>
                <div className="flex-grow border-t border-gray-400"></div>
              </div>
              <div className="text-gray-700 text-sm text-center mb-2">
                Sign in with
              </div>
              <button
                type="button"
                className="w-full text-white bg-gray-800 hover:bg-gray-900 rounded-full py-2 mb-2"
                onClick={signInGoogle}
              >
                Google
              </button>
              <Link href="/signup">
                <div className="text-gray-700 text-sm text-center mb-2">
                  Don't have an account? Sign Up
                </div>
              </Link>
            </div>
          </div>
        </div>
        <img
          className="hidden md:block object-cover w-full md:w-3/5 h-full"
          src="/Cannes, France.jpg"
          alt="Signin Background"
        />
      </div>
    </div>
  );
};

export default SignInPage;
