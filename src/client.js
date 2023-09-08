// import "dotenv/config";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId : process.env.REACT_APP_PROJECTID,
    dataset:"production",
    apiVersion:"2023-09-03",
    useCdn:true,
    token:process.env.REACT_APP_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)