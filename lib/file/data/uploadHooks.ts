import fetch from "cross-fetch";
import { fetcher } from "@util/query";
import { toaster } from "@ui/index";

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

  return fetch(signedRequest, options).catch((err) => {
    toaster.error("Алдаа гарлаа.");
  });
};

export const uploadToS3 = async (file: File) => {
  const { signedRequest, url, key } = await getSignedUrl(file);
  await uploadFile(file, signedRequest);
  return key;
};

export const removeFromS3 = async (key: string) => {
  return fetcher.delete(`file?fileKey=${key}`);
};
