export const useValidateResourceSize = (maxSize: number) => {
  const isResourceSizeAcceptable = (file: globalThis.File, maxSize: number) => {
    if (file.size > maxSize) return false;
    return true;
  };
  return (file: File) => {
    return isResourceSizeAcceptable(file, maxSize);
  };
};
