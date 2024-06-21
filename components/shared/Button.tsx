import React from "react";

const Button = (props: { onClick: () => void; children: React.ReactNode }) => {
  const { onClick, children } = props;

  return (
    <button
      className="
      bg-orange-500
      hover:bg-orange-700
      text-white
      font-bold
      py-2
      px-4
      max-w-max
      rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
