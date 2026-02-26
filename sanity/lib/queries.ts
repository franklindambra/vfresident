export const POSTS_QUERY = `*[_type == "post" && defined(slug.current)]{"image": mainImage.asset->url,
  _id, title, "slug": slug.current, publishedAt, "authors": authors[]->{
    name,
    "image": image.asset->url,

  }, "categories": categories[]->slug.current
}`;

export const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
title,
  body,
  "mainImage": mainImage.asset->url,
  publishedAt,
  "slug": slug.current ,
  "authors": authors[]->{
    name,
    "image": image.asset->url
  },
  categories[]->{
    title,
    description,
    "slug": slug.current
  },
  metaDescription
}`;

export const GROUPS_QUERY = `*[_type == "groups" && defined(slug.current)]{
  _id, name, slug, description, displayOrder
}`;

export const EVENTS_QUERY = `*[_type == "event" && defined(slug.current)] | order(date asc) [0...10]{
  _id,
  title,
  "slug": slug.current,
  date,
  location,
  "image": image.asset->url,
  description
}`;
