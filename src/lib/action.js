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


// React Server Components (RSC) - New Way:

// Now, with RSC (supported in Next.js 13+ with the new /app directory), you can mark individual components as 
// server components by simply making them async or by using the 'use server' directive.

// Server Components are rendered only on the server: They can fetch data, run heavy server-only code, or use private APIs—and 
// the result is never sent as JavaScript to the browser, just the result (HTML or a special serialized format).

// Benefit: You can split your page into parts: some run on the server (heavy, secure, data-fetching logic), 
// others run on the client (interactivity).



// Heavy npm Packages Only on the Server
// If you import a large npm package (for example, for Markdown rendering or database access) in a server component, 
// that package will never be sent to the client. Only the result (the generated HTML or UI) is sent.

// This reduces your JavaScript bundle size, improves performance, and keeps server-only logic private.



// No Need to Decide at Page Level
// Before: You had to pick, for the entire page, whether it would be static, server-rendered, or client-rendered.

// Now: You can choose for each component whether it should be a server component (runs only on the server) or a client component'
// (runs in the browser, with interactivity).

// Example: Your page can have a big list fetched and rendered on the server (server component) 
// and a button or form for user interaction (client component).

// Summary

// React Server Components in Next.js let you decide per component (not just per page) what runs on the server.
// Heavy logic and large packages stay on the server; only results (HTML/UI) are sent to the client.
// This makes your site faster, more secure, and more SEO-friendly.

export const addPost = async (formData) => {
    let descs = [];
    const formDataObj = Object.fromEntries(formData);

    for (const key in formDataObj) {
        if (key.startsWith('desc')) {
            descs.push(formDataObj[key]);
        }
    }

    const { title, slug, userId, type, subDesc } = formDataObj;

    try {
        await connectToDb();
        const newPost = new Post({
            title: title,
            desc: descs.join('|>*<|'), 
            slug: slug,
            userId: userId,
            type: type,
            subDesc: subDesc
        });
        await newPost.save();
        revalidatePath("/blog");
    } catch (err) {
        console.log("err addPost", err);
        return { error: "Something Went Wrong" };
    }
};

export const deletePost = async (formData) => {
    const {id} = Object.fromEntries(formData);

    try {
        await connectToDb();
        await Post.findByIdAndDelete(id);
        revalidatePath("/blog");
    } catch (err) {
        console.log("err deletePost", err);
        return {error: "Something Went Wrong"};
    }
};

export const handleGithubLogin = async () => {
    await signIn("github");
};

export const handleGithubLogout = async () => {
    await signOut();
};