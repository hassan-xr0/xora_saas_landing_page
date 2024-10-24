import clsx from "clsx";
import React from "react";
import Marker from "./Marker";

const Button = ({
  icon,
  childern,
  href,
  onClick,
  cantainerClassName,
  markerFill,
}) => {
  const Inner = () => (
    <>
      <span className="relative flex items-center g4 min-h-[60px]  rounded-2xl px-4 inner-before group-hover:before:opacity-100 overflow-hidden">
        <span className="absolute -left-[1px]" >
          <Marker markerFill={markerFill} />
        </span>
        {icon && (
          <img
            src={icon}
            className="size-10 object-contain z-10 mr-5"
            alt="circle"
          />
        )}
        <span className="relative z-2 font-poppins text-p1 base-bold uppercase">{childern}</span>
      </span>
      <span className="glow-before glow-after" />
    </>
  );

  return href ? (
    <a
      href={href}
      className={clsx(
        "relative g2 group p-0.5 shadow-50 rounded-2xl",
        cantainerClassName
      )}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx(
        "relative g2 group p-0.5 shadow-500 rounded-2xl",
        cantainerClassName
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};

export default Button;
