export const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) [0...10]{
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  "image": mainImage.asset->url,
  "alt": mainImage.alt,
  body,
  "authors": authors[]->{
    name,
    "image": image.asset->url
  },
  "categories": categories[]->slug.current
}`;

export const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  body,
  "mainImage": mainImage.asset->url,
  "mainImageAlt": mainImage.alt,
  publishedAt,
  "slug": slug.current,
  "authors": authors[]->{
    name,
    "image": image.asset->url
  },
  categories[]->{
    title,
    description,
    "slug": slug.current
  },
  "gallery": gallery[]->{
    _id,
    title,
    "url": image.asset->url,
    altText,
    caption
  },
  metaDescription
}`;

export const GROUPS_QUERY = `*[_type == "groups" && defined(slug.current)]{
  _id,
  name,
  "slug": slug.current,
  description,
  displayOrder,
  "gallery": gallery[]->{
    _id,
    title,
    "url": image.asset->url,
    altText,
    caption
  }
}`;

export const GROUP_QUERY = `*[_type == "groups" && slug.current == $slug][0]{
  _id,
  name,
  "slug": slug.current,
  description,
  "gallery": gallery[]->{
    _id,
    title,
    "url": image.asset->url,
    altText,
    caption
  }
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

export const PROPERTIES_QUERY = `*[_type == "property"] | order(name asc){
  _id, name, title, phone, email, url, description
}`;

export const HOME_CARE_QUERY = `*[_type == "homeCare"] | order(title asc){
  _id, title, body, "image": image.asset->url
}`;

export const TRADESPEOPLE_QUERY = `*[_type == "tradesperson"] | order(name asc){
  _id, name, title, phone, email, url, description
}`;
