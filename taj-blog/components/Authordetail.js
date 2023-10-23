import { Avatar, Box, Paper } from "@mui/material";
import React from "react";

export default function Authordetail({ name, desc, image, roundimage }) {
  //   console.log(name, desc, image, roundimage);
  return (
    <div className="author-details">
      <div className="author-image">
        <Avatar
          alt="Anish Mathew"
          src={roundimage}
          sx={{ width: 56, height: 56 }}
        />
      </div>
      <div className="author-desc">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 850,
              height: 128,
            },
          }}
        >
        
          <Paper elevation={3} 
          sx={{
            padding: 2
          }}>
            <h5>Hello Folks,</h5>
            <p>{desc}</p>
          </Paper>
        </Box>
      </div>
      {/* <div className="meta-desc">
        {desc}
      </div> */}
    </div>
  );
}
