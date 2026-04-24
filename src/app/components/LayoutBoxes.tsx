import Link from "next/link";
import {ReactNode} from "react";

export function BbcBox({
  title,
  pageNum,
  color,
  className = "",
  children
}: {
  title: string;
  pageNum: string;
  color: "cyan" | "yellow" | "green" | "magenta";
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`bbc-box bbc-${color} ${className}`.trim()}>
      <div className="bbc-box-header">
        <span>{title}</span>
        <span className="bbc-box-pagenum">P{pageNum}</span>
      </div>
      {children}
    </div>
  );
}

export function BbcBtn({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="bbc-btn">
      {children}
    </Link>
  );
}