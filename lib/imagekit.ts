import config from "./config";

const endpoint = config.env.imagekit.urlEndpoint;

export const imagekit = {
  image: (path: string, transformation?: string) =>
    transformation
      ? `${endpoint}/tr:${transformation}/${path}`
      : `${endpoint}/${path}`,

  video: (path: string) => `${endpoint}/${path}`,
};
