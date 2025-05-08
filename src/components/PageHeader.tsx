import React from "react";
import { Separator } from "./ui/separator";

interface PageHeaderProps {
  header: string;
  subtext: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ header, subtext }) => {
  return (
    <>
      <div className="text-left">
        <div className="space-y-1">
          <h1>{header}</h1>
          <p className="text-sm text-muted-foreground">{subtext}</p>
        </div>
      </div>
      <Separator className="my-4" />
    </>
  );
};

export default PageHeader;
