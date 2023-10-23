import PageLayout from "@/components/PageLayout";
import { useRouter } from "next/router";
import { createClient } from "next-sanity";
import { Avatar, Typography } from "@mui/material";
import Blog from "@/components/Blog";
import SanityBlockContent from "@sanity/block-content-to-react";

const BlogDetails = ({ res }) => {
  console.log("data", res);
  const { query } = useRouter();
  console.log(query?.slug);
  return (
    <PageLayout>
      <Blog
        authorroundimage={res[0].authorref?.authorroundimage}
        authorname={res[0].authorref?.name}
        date={res[0].date}
        title={res[0].title}
        subtitle={res[0].subtitle}
        blogimage={res[0].coverimage}
        blogcontent={res[0].blogcontent}
      />
     
      {/* <h2>This is Blog details - {query?.slug}</h2>
      <Typography variant="h1"> {res[0].title}</Typography> */}
      {/* <div className="author-details">
        <div>
          <Avatar
            alt="Remy Sharp"
            src={res[0].authorref?.authorroundimage}
            sx={{ width: 40, height: 40 }}
          />
        </div>
        &nbsp;&nbsp;&nbsp;
        <div>
          <Typography variant="h6" component="div">
            {res[0].authorref?.name},&nbsp;{res[0].date}
          </Typography>
        </div>
      </div>
      <div className="blog-label">
        <div>
          <Typography variant="h3" component="div">
            {res[0].title}
          </Typography>
        </div>
        <div>
          <Typography variant="h6" component="div">
            {res[0].subtitle}
          </Typography>
        </div>
      </div>
      <div className="blog-image">
        <img src={res[0].coverimage} alt="" />
      </div>
      <div className="blog-content">
        <h5>
          ------------------BLOG CONTENT HERE----------------------
          <br />
          ------------------BLOG CONTENT HERE----------------------
          <br />
          ------------------BLOG CONTENT HERE----------------------
          <br />
          ------------------BLOG CONTENT HERE----------------------
          <br />
          ------------------BLOG CONTENT HERE----------------------
          <br />
          ------------------BLOG CONTENT HERE----------------------
          <br />
          ------------------BLOG CONTENT HERE----------------------
          <br />
          ------------------BLOG CONTENT HERE----------------------
          <br />
          ------------------BLOG CONTENT HERE----------------------
          <br />
          ------------------BLOG CONTENT HERE----------------------
          <br />
        </h5>
      </div> */}
    </PageLayout>
  );
};

export default BlogDetails;

export async function getServerSideProps({ params }) {
  console.log("params", params.slug);
  const client = createClient({
    projectId: "9vl22nzn",
    dataset: "production",
    useCdn: false,
  });
  const slugname = params.slug;

  const query3 = `*[_type == "blog" && slug.current == '${slugname}']{
    title,
    subtitle,
    date,
    "authorref": authorref->{name,'authorroundimage':authorroundimage.asset->url},
    "coverimage": coverimage.asset->url, 
    'slug': slug.current,
    blogcontent[]{..., "asset" : asset->}
  }`;
  const res = await client.fetch(query3);

  return {
    props: { res },
  };
}
