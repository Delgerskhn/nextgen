import { withRequireLogin } from "@lib/auth/ui";
import { PersonnelDetail } from "@lib/auth/ui/PersonnelDetail";

export default withRequireLogin(PersonnelDetail);
