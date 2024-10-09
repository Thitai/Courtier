import sanityClient from "@sanity/client";
export const client = sanityClient({
  projectId: "4z50jvqv",
  dataset: "production",
  apiVersion: "2023-01-10",
  useCdn: true,
});