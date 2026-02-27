"use server";

import { client } from "@/sanity/lib/client";
import {
  POST_QUERY,
  POSTS_QUERY,
  GROUPS_QUERY,
  EVENTS_QUERY,
  PROPERTIES_QUERY,
  HOME_CARE_QUERY,
  TRADESPEOPLE_QUERY,
  GROUP_QUERY,
} from "@/sanity/lib/queries"; // Import both the queries

export const getProperties = async () => {
  try {
    const props = await client.fetch(PROPERTIES_QUERY);
    return props;
  } catch (error) {
    console.error("Error fetching properties:", error);
    return [];
  }
};

export const getHomeCare = async () => {
  try {
    const homeCare = await client.fetch(HOME_CARE_QUERY);
    return homeCare;
  } catch (error) {
    console.error("Error fetching home care:", error);
    return [];
  }
};

export const getTradespeople = async () => {
  try {
    const trades = await client.fetch(TRADESPEOPLE_QUERY);
    return trades;
  } catch (error) {
    console.error("Error fetching tradespeople:", error);
    return [];
  }
};

export const getEvents = async () => {
  try {
    const events = await client.fetch(EVENTS_QUERY);
    return events;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

export const getRecentPosts = async () => {
  try {
    const blogs = await client.fetch(POSTS_QUERY);
    return blogs;
  } catch (error) {
    console.error("Error fetching recent posts:", error);
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

export const getPost = async (slug) => {
  try {
    const post = await client.fetch(POST_QUERY, { slug });
    return post;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
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

export const getGroup = async (slug) => {
  try {
    const group = await client.fetch(GROUP_QUERY, { slug });
    return group;
  } catch (error) {
    console.error("Error fetching group:", error);
    return null;
  }
};
