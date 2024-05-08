import Link from "next/link";
import React from "react";

export const InfoBox = ({
  heading,
  children,
  buttonInfo,
  textColor,
  backgroundColor,
}) => {
  console.log(buttonInfo);
  return (
    <div>
      <div className={`${backgroundColor}  p-6 rounded-lg shadow-md`}>
        <h2 className="text-2xl font-bold">{heading}</h2>
        <p className="mt-2 mb-4">{children}</p>
        <Link
          href="/properties"
          className={` ${buttonInfo.textColor} ${buttonInfo.bg} inline-block rounded-lg px-4 py-2 hover:${buttonInfo.color}`}
        >
          {buttonInfo.text}
        </Link>
      </div>
    </div>
  );
};
