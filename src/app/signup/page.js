"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";
import { base_url } from "@/base_url";
import { fetchUserDetails } from "@/utils/fetchUserDetails";
import { setToken } from "@/utils/setToken";
import { login } from "@/store/features/auth/auth-slice";
import { useDispatch ,useSelector} from "react-redux";

const Page = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  

  const router = useRouter();
  const api = base_url;

  const dispatch = useDispatch(); // Redux dispatch hook
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    console.log(auth);
  }, [auth]);

  useEffect(() => {
    if (auth.token) {
      router.push("/");
    }
  }, [auth, router]);

  const generateOTP = async (e) => {
    e.preventDefault();

    if (email === "") {
      toast.error("Please enter an email");
      return;
    }

    if (password !== confirmPassword) {
      setErrors({ ...errors, confirmPassword: "Password and confirm password do not match" });
      return;
    } else {
      setErrors({ ...errors, confirmPassword: "" });
    }

    setLoading(true);
    try {
      const res = await fetch(`${api}/api/auth/send-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mail: email }),
      });

      const message = await res.json();
      toast.success("OTP sent to your email");
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while sending OTP");
      setLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (errors.password) {
      toast.error(errors.password);
      return;
    }

    if (password !== confirmPassword) {
      setErrors({ ...errors, confirmPassword: "Password and confirm password do not match" });
      return;
    } else {
      setErrors({ ...errors, confirmPassword: "" });
    }

    const username = `${firstName} ${lastName}`;
    const accountType = "guest";

    setLoading(true);
    try {
      const res = await fetch(`${api}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mail: email,
          username,
          password,
          otp,
          accountType,
          phone: "0000000000",
        }),
      });

      const result = await res.json();
      setResponseMessage(result.message);
      setLoading(false);

      if (result.token && result.data) {
        dispatch(login({
          token: result.token,
          data: result.data, 
        }));
        fetchUserDetails();
        router.push("/");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred during signup");
      setLoading(false);
    }
  };

  const handlePassword = (value) => {
    if (value.length < 6) {
      setErrors({
        ...errors,
        password: "Password must be at least 6 characters",
      });
    } else {
      setErrors({ ...errors, password: "" });
    }
    setPassword(value);
  };

  const signUpGoogle = () =>{
    window.open(`${base_url}/api/auth/google`, "_blank", "width=500,height=600");

    const messageListener = (event) => {
      if (event.data) {
        const { token } = event.data;
        if (token) {
          dispatch(login({ token })); // Dispatch login action with Google token
        } else {
          router.push("/auth/failure");
        }
      }
    };
    window.addEventListener("message", messageListener, { once: true });
  };

  return (
    <div className="font-f_3">
      <ToastContainer />
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <ClipLoader color={"#ffffff"} loading={loading} size={150} />
        </div>
      )}
      <div className="flex flex-col md:flex-row h-screen w-screen">
        <div className="md:w-2/5 w-full h-full flex items-center justify-center p-4">
          <div className="max-w-md w-full">
            <div className="text-center text-3xl mb-3">
              LuxuryHotelConcierge
            </div>
            <div className="text-center text-gray-400 text-md mb-5">
              Discover the epitome of luxury and comfort at our world-renowned
              hotels.
            </div>
            <div className="text-center text-3xl mb-5">Sign Up</div>
            <form onSubmit={handleSignup} className="space-y-4">
              <input
                type="text"
                id="email"
                className="w-full p-2 border rounded-full"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="flex space-x-2">
                <input
                  type="text"
                  id="firstName"
                  className="w-full p-2 border rounded-full"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  id="lastName"
                  className="w-full p-2 border rounded-full"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full p-2 border rounded-full"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => handlePassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <AiFillEyeInvisible size={24} /> : <AiFillEye size={24} />}
                </button>
              </div>
              {errors.password && (
                <div className="text-sm text-red-500">{errors.password}</div>
              )}
              <div className="relative flex items-center">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  className="w-full p-2 border rounded-full"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <AiFillEyeInvisible size={24} /> : <AiFillEye size={24} />}
                </button>
              </div>
              {errors.confirmPassword && (
                <div className="text-sm text-red-500">{errors.confirmPassword}</div>
              )}
              <div className="relative flex items-center">
                <input
                  type="text"
                  id="otp"
                  className="w-full p-2 border rounded-full pr-24"
                  placeholder="OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-gray-800 hover:bg-gray-900 text-white rounded-full"
                  onClick={generateOTP}
                  type="button"
                >
                  Send OTP
                </button>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-300"
              >
                Sign Up
              </button>
            </form>
            <div className="relative flex py-2 items-center mt-4">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="flex-shrink mx-4 text-gray-400">or</span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <button
              type="button"
              className="w-full py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-300 mb-2"
              onClick={signUpGoogle}
            >
              Sign Up with Google
            </button>
            <Link href="/signin">
              <div className="text-center text-sm text-gray-700 mt-2">
                Already have an account? Sign In
              </div>
            </Link>
          </div>
        </div>
        <div className="md:w-3/5 hidden md:block w-full h-full bg-cover bg-center relative">
          <img
            src="/Cannes, France.jpg"
            alt="Sign Up Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default Page;
