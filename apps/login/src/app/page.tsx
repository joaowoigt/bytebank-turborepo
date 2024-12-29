"use client";
import React from "react";
import { Text } from "@repo/ui/texts";

export default function Page(): JSX.Element {
  return (
    <div className="bg-gradient-to-b from-gradientStart to-gradientEnd w-auto h-screen flex flex-col">
      <Text intent="Small" color="white" style="bold" text="Serviços"></Text>
    </div>
  );
}
