import type { FC } from "react";

interface Props {
  title: string;
  color: string;
  bg: string;
  className: string;
  borderColor: string;
}

const ClipPatchTitle: FC<Props> = ({
  title,
  color,
  bg,
  borderColor,
  className,
}) => {
  return (
    <div className="general-title">
      <div
        style={{ clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)", borderColor }}
        className={`${className} border-[.5vw] text-nowrap opacity-0`}
      >
        <div
          style={{ backgroundColor: bg }}
          className="pb-5 md:px-14 px-3 md:pt-0 pt-3"
        >
          <h2 style={{ color }}>{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default ClipPatchTitle;
