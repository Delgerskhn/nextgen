import { UserRole } from "@prisma/client";
import { PropsWithChildren } from "react";
import { useAuth } from "./AuthProvider";

export const AuthorizedContent = ({
  children,
  role,
}: PropsWithChildren<{ role: UserRole }>) => {
  const { data } = useAuth();

  if (data?.role != role) return null;

  return <>{children}</>;
};
