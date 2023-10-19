import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const tabsPage = () => {
	return (
		<>
        <Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account" className="text-orange-600">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>

        </>
	);
};
export default tabsPage;
