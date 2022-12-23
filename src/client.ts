import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// const projectId = import.meta.env.;
// const token = import.meta.env.;

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const token = import.meta.env.VITE_SANITY_TOKEN;

export const client = sanityClient({
  projectId: projectId,
  dataset: "production",
  apiVersion: "2022-10-28",
  useCdn: true,
  token: token,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);
