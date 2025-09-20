import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return <div className="text-center text-white p-8">&copy; {year} Atlas School</div>;
};

export default Footer;
