import React from "react";

type Props = {
  // 相当于props
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return (
    // basis 设置flex里面元素的size
    <h1 className="basis-3/5 font-montserrat text-3xl font-bold">{children}</h1>
  );
};

export default HText;