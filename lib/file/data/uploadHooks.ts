import fetch from "cross-fetch";
import { fetcher } from "@util/query";

const getSignedUrl = async (file: File) => {
  const { signedRequest, url, key } = await fetcher.get(
    `file/upload?fileName=${file.name}&fileType=${file.type}`
  );
  return { signedRequest, url, key };
};

const uploadFile = async (file: File, signedRequest: string) => {
  const options = {
    method: "PUT",
    body: file,
  };

  return fetch(signedRequest, options);
};

export const uploadToS3 = async (file: File) => {
  const { signedRequest, url, key } = await getSignedUrl(file);
  await uploadFile(file, signedRequest);
  return key;
};
