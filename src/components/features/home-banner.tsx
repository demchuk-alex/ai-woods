"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Container from "./container";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import config from "../../../next.config.js";

export function HomeBanner() {
  // Use client-side only rendering for the image to avoid hydration issues
  const [isMounted, setIsMounted] = useState(false);
  const basePath = config.basePath;
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  return (
    <div className="w-full mb-8 md:mb-12 relative">
      <Container>
        <Card className="overflow-hidden border-0 shadow-xl">
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
            <Image 
              src={`${basePath}/assets/blog/home-banner/banner.png`}
              alt="Engineer Diary Blog Banner"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              key={isMounted ? "client" : "server"}
              suppressHydrationWarning
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-shadow font-heading">
                  AI Woods - Engineering Diary
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto text-shadow">
                  A developer's journal exploring the dense, evolving forest of modern coding
                </p>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
} 