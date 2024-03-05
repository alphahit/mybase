    // "Server actions" refer to operations or tasks performed on a server-side environment in the context of web and software development.
// Unlike client-side actions, which happen in the user's browser or device, server actions are processed on a web server.
// These actions can encompass a wide range of activities, including but not limited to:
"use server"
import { signIn, signOut } from "./auth"
import { Post } from "./models"
import { connectToDb } from "./utils"
import { revalidatePath } from "next/cache";
// Data Processing: Manipulating or performing calculations on data before sending it to the client or storing it in a database.
// Database Operations: Creating, reading, updating, and deleting data in a database (often abbreviated as CRUD operations).
// Authentication and Authorization: Verifying user identities (authentication) and determining their access rights (authorization) to various resources or actions.
// API Requests Handling: Receiving requests from clients, processing them, and sending back responses. This can involve calling other APIs,
// accessing databases, or performing server-side logic.
// File Management: Uploading, downloading, storing, or modifying files on the server.
// Email Sending: Automating the process of sending emails, whether for user registration confirmations, password resets, or notifications.
// Background Tasks: Performing tasks that are scheduled or triggered by specific events, which might run independently of user actions, such as data backups, report generation, or batch processing.
// Server actions are crucial for the security, efficiency, and functionality of web applications and services. They allow for the centralization of logic and data management,
// which helps in maintaining consistent data integrity and implementing complex business rules.

export const addPost = async (formData) => {
    // Initialize an empty array to hold the descriptions
    let descs = [];

    // Convert formData to an object to easily work with the data
    const formDataObj = Object.fromEntries(formData);

    // Iterate over formDataObj to find and collect all `desc` fields
    for (const key in formDataObj) {
        if (key.startsWith('desc')) { // Check if the key starts with 'desc'
            descs.push(formDataObj[key]); // Add the value to the descs array
        }
    }

    // Extract other fields directly
    const { title, slug, userId, type, subDesc } = formDataObj;

    // console.log("formData===>", formData);
    console.log("Type of descs:", typeof descs);
    console.log("Content of descs:", JSON.stringify(descs, null, 2));
    try {
        connectToDb();
        const newPost = new Post({
            title: title,
            desc: descs.join('|>*<|'), 
            slug: slug,
            userId: userId,
            type: type,
            subDesc: subDesc
        });
        await newPost.save();
        console.log("Saved To DB");
        revalidatePath("/blog");
    } catch (err) {
        console.log("err addPost", err);
        return { error: "Something Went Wrong" };
    }
};


export const deletePost = async (formData) => {
    "use server"

    const {id} = Object.fromEntries(formData) 

    console.log(formData)

    try{
        connectToDb()
        await Post.findByIdAndDelete(id);
        console.log("Delete From DB")
        revalidatePath("/blog")
    }catch(err){
        console.log("err addPost", err)
        return {error : "Something Went Wrong"}
    }
}


export const handleGithubLogin = async () => {
    "use server";
    await signIn("github"); 
    //let signInResult = 
    // console.log("signIn===>",signInResult)
  
  };

  export const handleGithubLogout = async () => {
    "use server";

    await signOut(); 
  };