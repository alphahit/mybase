"use client";
import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Avatar,
} from "@material-tailwind/react";
import { CardContainer, CardInside } from "../ui/ThreeDCard";
const PostCard = ({ post }) => {
  console.log("post=====>", post);
  const cardHeaderStyle = post.img
    ? {
        backgroundImage: `url('${post.img}')`,
      }
    : {};
  return (
    // <Card className="mt-6 w-100 ">
    //   <CardHeader color="blue-gray" className="relative h-56">
    // {post.img && (
    //   <Image src={post.img} alt="" fill className={styles.img} />
    // )}
    //   </CardHeader>
    //   <CardBody>
    //     <Typography variant="h5" color="blue-gray" className="mb-2">
    //       {post.title}
    //     </Typography>
    //     <Typography>{post.body}</Typography>
    //   </CardBody>
    //   <CardFooter className="pt-0">
    //     <Button>
    //       {" "}
    //       <Link href={`/blog/post`}>READ MORE</Link>
    //     </Button>
    //   </CardFooter>
    // </Card>

    // <Card
    //   shadow={false}
    //   className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
    // >
    //   <CardHeader
    //     floated={false}
    //     shadow={false}
    //     color="transparent"
    //     className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
    //     style={cardHeaderStyle} // Apply the dynamic style here
    //   >
    //     <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
    //   </CardHeader>
    //   <CardBody className="relative py-14 px-6 md:px-12">
    //     <Typography
    //       variant="h2"
    //       color="white"
    //       className="mb-6 font-medium leading-[1.5]"
    //     >
    //       {post.title}
    //     </Typography>
    //     <Typography variant="h5" className="mb-4 text-gray-400">
    //       {post.body}
    //     </Typography>
    //     <Button>
    //       <Link href={`/blog/post`}>READ MORE</Link>
    //     </Button>
    //   </CardBody>
    // </Card>
    <CardContainer>
      <CardInside />
    </CardContainer>
  );
};

export default PostCard;
