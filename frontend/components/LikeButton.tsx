"use client";
import React from "react";
import { Button } from "./ui/button";
import { ThumbsUp } from "lucide-react";
import { cn } from "../lib/utils";

export interface LikebuttonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  subclass?: boolean
}

const LikeButton = React.forwardRef<HTMLButtonElement, LikebuttonProps>(
  (props, ref) => {
    return (
      <Button
        size="icon"
        variant={"outline"}
        className={cn(props.className, "absolute z-20 top-2 right-2")}
        ref={ref}
        {...props}
      >
        <ThumbsUp className="w-4 " />
      </Button>
    );
  },
)
LikeButton.displayName = "LikeButton"
export default LikeButton
