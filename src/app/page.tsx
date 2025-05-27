import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <div>
      <div className="grid w-full maz-w-sm items-cventer gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" placeholder="Email" />
      </div>
      <div className="grid w-full maz-w-sm items-cventer gap-1.5">
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" placeholder="Password" />
      </div>
      <Button>Login</Button>
    </div>
  );
}
