"use client";
// import Image from "next/image";
// import styles from "./postCard.module.css";
// import Link from "next/link";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Button,
//   Avatar,
// } from "@material-tailwind/react";
import { CardContainer, CardInside } from "../ui/ThreeDCard";
const PostCard = ({ post }) => {
  console.log("post=====>", post);
  const cardHeaderStyle = post.img
    ? {
        backgroundImage: `url('${post.img}')`,
      }
    : {};
  return (
    <CardContainer>
      <CardInside post={post} />
    </CardContainer>
  );
};

export default PostCard;
