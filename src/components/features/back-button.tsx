"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full bg-background/80 backdrop-blur-sm"
      asChild
    >
      <Link href="/" aria-label="Back to home">
        <ArrowLeft className="h-4 w-4" />
      </Link>
    </Button>
  );
} 