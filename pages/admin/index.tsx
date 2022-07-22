import { AppLayout, Tabs, TabList, Tab, TabPanels, TabPanel } from "@ui/index";
import { withRequireLogin } from "@lib/auth/ui";
import { UsersTable } from "@lib/user/ui";

const AdminPage = () => {
  return (
    <AppLayout>
      <Tabs isLazy>
        <TabList>
          <Tab>Cases</Tab>
          <Tab>Users</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <></>
          </TabPanel>
          <TabPanel>
            <UsersTable />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </AppLayout>
  );
};

export default withRequireLogin(AdminPage);
