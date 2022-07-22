import fetch from "cross-fetch";
import { fetcher } from "@util/query";

const getSignedUrl = async (file: File) => {
  const { signedRequest, url } = await fetcher.get(
    `file/upload?fileName=${file.name}&fileType=${file.type}`
  );
  return { signedRequest, url };
};

const uploadFile = async (file: File, signedRequest: string) => {
  const options = {
    method: "PUT",
    body: file,
  };

  return fetch(signedRequest, options);
};

export const uploadToS3 = async (file: File) => {
  const { signedRequest, url } = await getSignedUrl(file);
  await uploadFile(file, signedRequest);
  return url;
};
