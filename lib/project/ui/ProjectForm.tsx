import { useAuth } from "@lib/auth/ui";
import { uploadToS3 } from "@lib/file/data/uploadHooks";
import { FileUploader } from "@lib/file/ui/FileUploader";
import {
  Button,
  chakra,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  NavContentLayout,
  toaster,
} from "@ui/index";
import { useForm } from "react-hook-form";
import { useProject, useUpdateProject } from "../data/projectHooks";

type ProjectFileInput = {
  projectIntro: File[];
  teamIntro: File[];
  document: File[];
};

export const ProjectForm = () => {
  const updateProject = useUpdateProject();
  const { data: user } = useAuth();
  const { data, refetch } = useProject(user?.id);
  const onTeamIntroUpload = (f: File) => {
    uploadToS3(f).then((key) => {
      toaster.success("Амжилттай хадгаллаа.");
      updateProject.mutate(
        {
          userId: user?.id,
          teamIntroFile: key,
        },
        { onSuccess: () => refetch() }
      );
    });
  };
  const onProjectIntroUpload = (f: File) => {
    uploadToS3(f).then((key) => {
      toaster.success("Амжилттай хадгаллаа.");
      updateProject.mutate(
        {
          userId: user?.id,
          teamIntroFile: key,
        },
        { onSuccess: () => refetch() }
      );
    });
  };
  const onProjectDocUpload = (f: File) => {
    uploadToS3(f).then((key) => {
      toaster.success("Амжилттай хадгаллаа.");
      updateProject.mutate(
        {
          userId: user?.id,
          teamIntroFile: key,
        },
        { onSuccess: () => refetch() }
      );
    });
  };
  return (
    <>
      <chakra.form>
        <Heading size="md">Төслийн мэдээллээ оруулна уу.</Heading>
        <Divider my="4" />
        <FormControl>
          <FormLabel>Багийн танилцуулга видео</FormLabel>
          <FileUploader
            onUpload={onTeamIntroUpload}
            defaultFileKey={data?.teamIntroFile || undefined}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Төслийн танилцуулга видео</FormLabel>
          <FileUploader
            onUpload={onProjectIntroUpload}
            defaultFileKey={data?.projectIntroFile || undefined}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Төслийн бичиг баримт</FormLabel>
          <FileUploader
            onUpload={onProjectDocUpload}
            defaultFileKey={data?.projectDocFile || undefined}
          />
        </FormControl>
      </chakra.form>
    </>
  );
};
