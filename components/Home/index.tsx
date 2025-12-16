"use client";

import { useSignIn } from "@/hooks/use-sign-in";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const { signIn, isLoading, isSignedIn, user } = useSignIn({
    autoSignIn: true,
  });
  const [testResult, setTestResult] = useState<string>("");

  const testAuth = async () => {
    try {
      const res = await fetch("/api/test", {
        credentials: "include",
      });
      const data = await res.json();

      if (!res.ok) {
        setTestResult(`Auth test failed: ${data.error}`);
        return;
      }

      setTestResult(`Auth test succeeded! Server response: ${data.message}`);
    } catch (error) {
      setTestResult(
        "Auth test failed: " +
          (error instanceof Error ? error.message : "Unknown error")
      );
    }
  };

 return (
  <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-b from-blue-50 to-white text-center">
    <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-8">
      Base Gratitude Hub 🚀
    </h1>
    <p className="text-xl md:text-2xl text-gray-800 mb-6 max-w-3xl">
      Deepest gratitude to <strong>Brian Armstrong</strong>, <strong>Jesse Pollak</strong>, the entire Coinbase & Base teams, and the passionate community relentlessly promoting the onchain vision.
    </p>
    <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl">
      As a learning builder (ukml), this mini app and my repo are my heartfelt thanks on System Update Day – December 17, 2025. Thank you for making the onchain future accessible to beginners like me! 🫡💙
    </p>
    <a
      href="https://github.com/ukml/OnchainForever-GratitudeToBase-Chain-and-Coinbase-2025-"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-blue-600 text-white font-bold text-lg px-10 py-5 rounded-xl hover:bg-blue-700 transition shadow-lg"
    >
      View Full Gratitude Repo on GitHub
    </a>
    <p className="mt-12 text-sm text-gray-500">
      Built with ❤️ using Base MiniKit
    </p>
  </main>
); 
