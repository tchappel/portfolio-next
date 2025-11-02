"use client";

import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <>
      <label htmlFor="mode">Choose Theme:</label>
      <select
        name="mode"
        id="mode"
        onChange={(e) => setTheme(e.currentTarget.value)}
      >
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="system">System</option>
      </select>
    </>
  );
}
