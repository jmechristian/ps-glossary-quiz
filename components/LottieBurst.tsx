"use client";

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

type LottieBurstProps = {
  animationData: unknown;
  className?: string;
};

export function LottieBurst({ animationData, className = "" }: LottieBurstProps) {
  if (!animationData) return null;

  return (
    <Lottie
      animationData={animationData}
      loop={false}
      className={className}
    />
  );
}
