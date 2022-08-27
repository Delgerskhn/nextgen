import { AppLayout, Tabs, TabList, Tab, TabPanels, TabPanel } from "@ui/index";
import { withRequireLogin } from "@lib/auth/ui";
import { UsersTable } from "@lib/user/ui";
import { AuthorizedContent } from "@lib/auth/ui/RequireCredential";
import { ProjectPanel } from "@lib/project/ui/ProjectPanel";

const AdminPage = () => {
  return (
    <AppLayout>
      <AuthorizedContent role="ADMIN">
        <Tabs isLazy>
          <TabList>
            <Tab>Хэрэглэгчид</Tab>
            <Tab>Төслүүд</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <UsersTable />
            </TabPanel>
            <TabPanel>
              <ProjectPanel />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </AuthorizedContent>
    </AppLayout>
  );
};

export default AdminPage;
