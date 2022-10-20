import React from "react";
import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
};

const PageTitle = ({ title }: Props) => {
  return (
    <Helmet>
      <title>{title} - Edward's Portfolio</title>
    </Helmet>
  );
};

export default PageTitle;
