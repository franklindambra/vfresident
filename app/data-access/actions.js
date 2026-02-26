"use server";

import { client } from "@/sanity/lib/client";
import { POSTS_QUERY, GROUPS_QUERY, EVENTS_QUERY } from "@/sanity/lib/queries"; // Import both the queries

export const getEvents = async () => {
  try {
    const events = await client.fetch(EVENTS_QUERY);
    return events;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

export const retrieveBlogs = async () => {
  try {
    const blogs = await client.fetch(POSTS_QUERY);
    // console.log("Server Actions: Blogs:", blogs);
    return blogs;
  } catch (error) {
    console.error("Error fetching service menu items:", error);
    return [];
  }
};

export const retrieveCategories = async () => {
  try {
    const blogs = await client.fetch(CATEGORIES_QUERY);
    // console.log("Server Actions: CATEGORIES:", blogs);
    return blogs;
  } catch (error) {
    console.error("Error fetching service menu items:", error);
    return [];
  }
};

export const getgroups = async () => {
  try {
    const groups = await client.fetch(GROUPS_QUERY);
    return groups;
  } catch (error) {
    console.error("Error fetching groups:", error);
    return [];
  }
};
