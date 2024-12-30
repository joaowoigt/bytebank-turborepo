"use client";
import React, { JSX } from "react";
import LoginForm from "./loginForm";

export default function Page(): JSX.Element {
  return (
    <div className="bg-gradient-to-b from-gradientStart to-gradientEnd w-auto h-screen flex flex-col p-big">
      <LoginForm></LoginForm>
    </div>
  );
}
