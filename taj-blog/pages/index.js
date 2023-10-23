import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { createClient } from "next-sanity";
import PortableText from "react-portable-text";
import * as React from "react";
import Navbar from "@/components/Navbar";
import { Avatar } from "@mui/material";
import Banner from "@/components/Banner";
import Authordetail from "@/components/Authordetail";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Cardblog from "../components/Cardblog";
import PageLayout from "@/components/PageLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ blog, authors }) {
  console.log("authors", authors);
  console.log("blogs", blog);

  return (
    <PageLayout>
      <div className="home">
        <div className="banner">
          <Banner />
        </div>

        <div className="author">
          {authors.map((author) => (
            <Authordetail
              name={author.name}
              desc={author.metadescription}
              image={author.image}
              roundimage={author.authorroundimage}
            />
          ))}
        </div>

        <div className="blogs-list">
          {blog.map((blogs) => (
            <Cardblog
              authorref={blogs.authorref}
              title={blogs.title}
              subtitle={blogs.subtitle}
              date={blogs.date}
              coverimage={blogs.coverimage}
              link={{
                href: "/blogs/[slug]",
                as: `/blogs/${blogs.slug}`,
              }}
            />
          ))}
          {console.log("blogs.slug", blog)}
        </div>
        {/* 
      <div className="banner">
        <h1 className="title-name">{blog[0].title}</h1>
      </div>
      <div className="title">
        <div className="profile">
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmUiaozqpRYv9yTLYOXEMdJnKWhOLbSAWkZw&usqp=CAU"
            sx={{ width: 56, height: 56 }}
          />
        </div>
        <div className="profile-detail">
          <p>{blog[0].profile}</p>
        </div>
  </div>*/}
      </div>
    </PageLayout>
  );
}

export async function getServerSideProps() {
  const client = createClient({
    projectId: "9vl22nzn",
    dataset: "production",
    useCdn: false,
  });
  const query = `*[_type == "blog"]{
    author,
    title,
    subtitle,
    date,
    "authorref": authorref->{name,'authorroundimage':authorroundimage.asset->url},
    "coverimage": coverimage.asset->url, 
    'slug': slug.current,
    blogcontent
  }`;
  const blog = await client.fetch(query);
  console.log("blog", blog);

  const query1 = `*[_type == "author"]{
    name,
    metadescription,
    'image' : image.asset->url,
    author,
    'authorroundimage': authorroundimage.asset->url
  }`;
  const authors = await client.fetch(query1);

  // const query3 = `*[_type == "blog" && slug.current ==$slug]{
  //   author,
  //   title,
  //   subtitle,
  //   date,
  //   "authorref": authorref->{name,'authorroundimage':authorroundimage.asset->url},
  //   "coverimage": coverimage.asset->url,
  //   'slug': slug.current,
  // }`;
  // const results = await client.fetch(query3);

  console.log("blog", blog);
  console.log("authors", authors);

  return {
    props: {
      blog,
      authors,
    },
  };
}
