import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <main>
        <div>
          <ModeToggle />
        </div>
        <Button>Test Button</Button>
      </main>
    </div>
  );
}
