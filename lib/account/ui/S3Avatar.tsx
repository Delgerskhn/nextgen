import { Avatar } from "@chakra-ui/react";
import { useSignedUrl } from "@lib/file/data/uploadHooks";

export const S3Avatar = ({ src }: { src: string | undefined }) => {
  const { data } = useSignedUrl(src);

  return <Avatar src={data?.url} />;
};
