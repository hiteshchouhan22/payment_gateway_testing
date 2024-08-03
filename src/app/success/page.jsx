"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useEffect,useState } from "react";
const Page = () => {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(4); // Initial timer set to 4 seconds

  useEffect(() => {
    // Set an interval to decrement the timer every second
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Set a timeout to redirect after 4 seconds
    const timer = setTimeout(() => {
      router.push("http://localhost:3000");
    }, 4000);

    // Cleanup the interval and timeout on component unmount
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [router]);

  return (
    <div className="flex flex-col justify-center items-center text-center h-screen">
      <br/>
      <div>Your payment has been done successfully</div>
      <br/>
      <div>Redirecting in {timeLeft} seconds...</div>
    </div>
  );
};

export default Page;
