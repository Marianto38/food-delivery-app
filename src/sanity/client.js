import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "uv9s0tic", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
});