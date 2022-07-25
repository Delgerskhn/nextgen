import { useAuth } from "@lib/auth/ui";
import { removeFromS3, uploadToS3 } from "@lib/file/data/uploadHooks";
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

type ProjectFileField = "teamIntroFile" | "projectIntroFile" | "projectDocFile";

export const ProjectForm = () => {
  const updateProject = useUpdateProject();
  const { data: user } = useAuth();
  const { data, refetch } = useProject(user?.id);
  const onUploadFile = (field: ProjectFileField) => (f: File) => {
    uploadToS3(f).then((key) => {
      toaster.success("Амжилттай хадгаллаа.");
      updateProject.mutate(
        {
          userId: user?.id,
          [field]: key,
        },
        { onSuccess: () => refetch() }
      );
    });
  };
  const onDeleteFile = (field: ProjectFileField) => (key: string) => {
    removeFromS3(key)
      .then((key) => {
        updateProject.mutate(
          {
            userId: user?.id,
            [field]: null,
          },
          { onSuccess: () => refetch() }
        );
      })
      .catch((e) => toaster.error("Алдаа гарлаа."));
  };
  return (
    <>
      <chakra.form>
        <Heading size="md">Төслийн мэдээллээ оруулна уу.</Heading>
        <Divider my="4" />
        <FormControl>
          <FormLabel>Багийн танилцуулга видео</FormLabel>
          <FileUploader
            onDelete={onDeleteFile("teamIntroFile")}
            onUpload={onUploadFile("teamIntroFile")}
            defaultFileKey={data?.teamIntroFile || undefined}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Төслийн танилцуулга видео</FormLabel>
          <FileUploader
            onDelete={onDeleteFile("projectIntroFile")}
            onUpload={onUploadFile("projectIntroFile")}
            defaultFileKey={data?.projectIntroFile || undefined}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Төслийн бичиг баримт</FormLabel>
          <FileUploader
            onDelete={onDeleteFile("projectDocFile")}
            onUpload={onUploadFile("projectDocFile")}
            defaultFileKey={data?.projectDocFile || undefined}
          />
        </FormControl>
      </chakra.form>
    </>
  );
};
