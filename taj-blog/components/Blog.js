import { Avatar, Typography } from "@mui/material";
import SanityBlockContent from "@sanity/block-content-to-react";
import React from "react";

export default function Blog({
  authorroundimage,
  authorname,
  date,
  title,
  subtitle,
  blogimage,
  blogcontent,
}) {
  const serializer = {
    types: {
      image: ({ node: { asset, alt } }) => {
        return (
          <div className="blog-content-image">
            <img src={asset.url} alt="" />
            <div className="alt">{alt}</div>
          </div>
        );
      },
    },
  };
  return (
    <div className="main">
      <div className="author-details">
        <div>
          <Avatar
            alt="Remy Sharp"
            src={authorroundimage}
            sx={{ width: 40, height: 40 }}
          />
        </div>
        &nbsp;&nbsp;&nbsp;
        <div>
          <Typography variant="h6" component="div">
            {authorname},&nbsp;{date}
          </Typography>
        </div>
      </div>
      <div className="blog-label">
        <div>
          <Typography variant="h3" component="div">
            {title}
          </Typography>
        </div>
        <div>
          <Typography variant="h6" component="div">
            {subtitle}
          </Typography>
        </div>
      </div>
      <div className="blog-image">
        <img src={blogimage} alt="" />
      </div>
      <div className="blog-content">
        <SanityBlockContent
          serializers={serializer}
          imageOptions={{ w: 900, h: 900, fit: "max" }}
          blocks={blogcontent}
        />
      </div>
    </div>
  );
}
