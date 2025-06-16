import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";

type Props = {};

export default function Register({}: Props) {
  return (
    <div className="container w-1/2">
      <h1 className="title">Register</h1>
      <form action="" className="space-y-4">
        <div className="grid w-full maz-w-sm items-cventer gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" placeholder="Email" />
        </div>
        <div className="grid w-full maz-w-sm items-cventer gap-1.5">
          <Label htmlFor="password">Password</Label>
          <Input type="password" name="password" placeholder="Password" />
        </div>
        <div className="grid w-full maz-w-sm items-cventer gap-1.5">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Please re-enter Password"
          />
        </div>
        <div className="flex items-end gap-4">
          <Button>Register</Button>
          <Link href="/" className="text">
            or Login here
          </Link>
        </div>
      </form>
    </div>
  );
}
