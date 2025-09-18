import React from "react";
import { Button } from "./ui/button";
import ThemeSwitcher from "./ThemeSwitcher";

const Main = () => {
  return (
    <main className="flex flex-col items-center justify-center py-20 gap-6 ">
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <ThemeSwitcher />
      <p className="max-w-lg text-center text-lg text-muted-foreground">
        This is a placeholder main section. Switch between themes above to see
        how the background, text, and font adapt.
      </p>
      <div className="flex gap-4">
        <Button variant={"default"}>Primary</Button>
        <Button variant={"secondary"}>Secondary</Button>
      </div>
    </main>
  );
};

export default Main;
