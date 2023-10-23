import client, { previewClient } from "./sanity";

const query1 = `*[_type == "blog"]{
    author,
    title,
    subtitle,
    date,
    "authorref": authorref->{name,'authorroundimage':authorroundimage.asset->url},
    "coverimage": coverimage.asset->url, 
    'slug': slug.current,
    blogcontent
  }`;

const query2 = `*[_type == "author"]{
    name,
    metadescription,
    'image' : image.asset->url,
    author,
    'authorroundimage': authorroundimage.asset->url
  }`;

const query3 = `*[_type == "blog" && slug.current == '${slugname}']{
    title,
    subtitle,
    date,
    "authorref": authorref->{name,'authorroundimage':authorroundimage.asset->url},
    "coverimage": coverimage.asset->url, 
    'slug': slug.current,
    blogcontent[]{..., "asset" : asset->}
  }`;

export async function getAuthor() {
  const result = await client.fetch(query2);
  return result;
}

export async function getAllBlogs() {
  const result = await client.fetch(query1);
  return result;
}

export async function getBlogBySlug(preview) {
  const currentClient = getClient(preview);

  const result = await currentClient
    .fetch(query3)
    .then((res) => (preview ? (res?.[1] ? res[1] : res[0]) : res?.[0]));
  return result;
}
