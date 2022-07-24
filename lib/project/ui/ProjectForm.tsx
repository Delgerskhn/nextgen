import { uploadToS3 } from "@lib/file/data/uploadHooks";
import { FileUploader } from "@lib/file/ui/FileUploader";
import {
  Button,
  chakra,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  NavContentLayout,
  toaster,
} from "@ui/index";
import { useForm } from "react-hook-form";
import { useUpdateProject } from "../data/projectHooks";

type ProjectFileInput = {
  projectIntro: File[];
  teamIntro: File[];
  document: File[];
};

export const ProjectForm = () => {
  const updateProject = useUpdateProject();
  const onFileUpload = (f: File) => {
    uploadToS3(f).then((key) => {
      toaster.success("Амжилттай хадгаллаа.");
      updateProject.mutate({
        teamIntroFile: key,
      });
    });
  };

  return (
    <NavContentLayout
      actions={
        <Button
          variant={"control"}
          // isLoading={profileMutation.isLoading}
          type="submit"
          // onClick={onSubmit}
        >
          Хадгалах
        </Button>
      }
    >
      <chakra.form>
        <Heading size="md">Төслийн мэдээллээ оруулна уу.</Heading>

        <FormControl>
          <FormLabel>Багийн танилцуулга видео</FormLabel>
          <FileUploader onUpload={onFileUpload} />
        </FormControl>

        <FormControl>
          <FormLabel>Төслийн танилцуулга видео</FormLabel>
          <Input type="file" multiple={false} />
        </FormControl>

        <FormControl>
          <FormLabel>Төслийн бичиг баримт</FormLabel>
          <Input type="file" multiple={false} />
        </FormControl>
      </chakra.form>
    </NavContentLayout>
  );
};
