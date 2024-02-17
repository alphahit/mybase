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
            "perspective[1000px] bg-transparent"
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
  // const cardHeaderStyle = post.img
  // ? {
  //     backgroundImage: `url('${post.img}')`,
  //   }
  // : {};
  // const cardHeaderStyle = {
  //   //backgroundImage: `url('${post.img}')`,
  //   backgroundImage: `url(' https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
  // };
  const cardHeaderStyle = {
    backgroundImage: `url('${post.img}')`,
  };
  return (
    <div
      className={cn(
        "[transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d] bg-transparent",
        className
      )}
    >
      {/* {children} */}
      <Card
        shadow={false}
        className="bg-black relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
          style={cardHeaderStyle} // Apply the dynamic style here
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-medium leading-[1.5]"
          >
            {post.title}
          </Typography>
          <Typography variant="h5" className="mb-4 text-gray-400">
            {post.body}
          </Typography>
          {/* <CardItem  /> */}
          <Button>
            <Link href={`/blog/${post.id}`}>READ MORE</Link>
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

// export const CardItem = ({
//   as: Tag = "div",
//   children,
//   className,
//   translateX = 0,
//   translateY = 0,
//   translateZ = 0,
//   rotateX = 0,
//   rotateY = 0,
//   rotateZ = 0,
//   ...rest
// }) => {
//   const ref = useRef(null);

//   const [isMouseEntered] = useMouseEnter();

//   useEffect(() => {
//     handleAnimations();
//   }, [isMouseEntered]);

//   const handleAnimations = () => {
//     if (!ref.current) return;
//     if (isMouseEntered) {
//       ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
//     } else {
//       ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
//     }
//   };

//   return (
//     <Tag
//       ref={ref}
//       className={cn("w-fit transition duration-200 ease-linear", className)}
//       {...rest}
//       style={{}}
//     >
//       {children}
//       <Button>
//         <Link href={`/blog/post`}>READ MORE</Link>
//       </Button>
//     </Tag>
//   );
// };

// Create a hook to use the context
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};
