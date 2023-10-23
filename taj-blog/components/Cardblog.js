import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { LineShareButton, LineIcon } from "next-share";

import { Avatar, Button, CardActionArea, CardActions } from "@mui/material";
import Link from "next/link";

export default function Cardblog({
  title,
  subtitle,
  author,
  date,
  authorref,
  coverimage,
  link,
}) {
  console.log(link);
  return (
    <div className="card">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <div className="upper-div">
            <Avatar
              alt="Anish Mathew"
              src={authorref?.authorroundimage}
              sx={{ width: 35, height: 35 }}
            />
            <Typography variant="h6" component="div">
              {authorref?.name || "No Name"}
            </Typography>
          </div>
          <div className="date-div">
            <div>
              <p>Published </p>
            </div>
            <div>
              <Typography gutterBottom variant="body1" color="text.secondary">
                {date}
              </Typography>
            </div>
          </div>
          <CardMedia
            component="img"
            height="140"
            src={coverimage}
            sx={{ width: 315, height: 210 }}
            alt="green iguana"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {subtitle}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {link && (
            <Link {...link} style={{ textDecoration: "none" }}>
              <Button size="small" color="primary">
                Read More
              </Button>
            </Link>
          )}
          
        </CardActions>
      </Card>
    </div>
  );
}
