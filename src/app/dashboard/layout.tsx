import React from "react";

type Props = {};

export default function DashboardLayout({ children }: Props) {
  return (
    <div>
      <h1>Dashboard Layout</h1>
      <div>{children}</div>
    </div>
  );
}
