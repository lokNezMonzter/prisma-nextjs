import React from "react";

export interface PostPageProps {
  params: {
    slug: string;
  };
}

export interface SubmitButtonProps {
  children: React.ReactNode;
}

export interface LinkButtonProps {
  link: string;
  content: string;
}
