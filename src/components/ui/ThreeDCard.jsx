"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Typography,
  Button,
  Avatar,
} from "@material-tailwind/react";
import { WavyBackground } from "./WavyBackground";
const MouseEnterContext = createContext(undefined);

export const CardContainer = ({ children, className, containerClassName }) => {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = (e) => {
    setIsMouseEntered(true);
    if (!containerRef.current) return;
  };

  const handleMouseLeave = (e) => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };
  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className="relative group cursor-pointer"
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div
          className={cn(
            "relative p-2 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-center justify-center space-x-6",
            containerClassName,
            "perspective[1000px] bg-black"
          )}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardInside = ({ children, className, post }) => {
  const cardHeaderStyle = {
    //backgroundImage: `url('${post.img}')`,
    backgroundImage: `url(' https://images.pexels.com/photos/925743/pexels-photo-925743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
  };
  // const cardHeaderStyle = {
  //   backgroundImage: `url('${post.img}')`,
  // };
  return (
    <div
      className={cn(
        "w-full [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d] bg-transparent",
        className
      )}
    >
      {/* {children} */}
      <Card
        shadow={false}
        className="bg-black relative grid h-[25rem] w-full max-w-[28rem] items-center justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
          style={cardHeaderStyle} // Apply the dynamic style here
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50">
            {/* ADD logo HERE */}
          </div>
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12 items-center justify-center">
          {/* <Typography variant="h5" className="mb-4 text-gray-400">
            {post.desc}
          </Typography> */}
          <Typography
            variant="h4"
            color="white"
            className="mb-6 font-medium leading-[1.5]"
          >
            {post.title}
          </Typography>
        </CardBody>
        <CardItem post={post} />
      </Card>
    </div>
  );
};

export const CardItem = ({
  post,
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  scale = 1.2,
  rotateZ = 0,
  ...rest
}) => {
  const ref = useRef(null);

  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    handleAnimations();
  }, [isMouseEntered]);

  const handleAnimations = () => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `scale(${scale}) translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform = `scale(1) translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  };

  return (
    <Tag
      ref={ref}
      className={cn("w-full transition duration-200 ease-linear ", className)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      {...rest}
    >
      {/* {children} */}

      {/* <Button>
       
       
      </Button> */}
      <div
        type="button"
        style={{
          backgroundColor: "rgb(28, 4, 36)",
          color: "white",
          padding: "10px",
          textAlign: "center",
          alignSelf: "center",
          width: "31px",
          borderLeft: "1px solid rgb(28, 4, 36)",
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
        }}
      >
        <Link href={`/blog/${post.slug}`} style={{ width: "80px" }}>
          READ MORE
        </Link>
      </div>
    </Tag>
  );
};

// Create a hook to use the context
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};
