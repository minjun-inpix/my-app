import { toast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button";

const testPage = () => {
  return (
    <Button
    onClick={() => {
      toast({
        title: "Scheduled: Catch up",
        description: "Friday, February 10, 2023 at 5:57 PM",
      })
    }}
  >
    Show Toast
  </Button>
  );
};

export default testPage;
