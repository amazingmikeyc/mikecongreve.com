import { ReactNode } from "react";
import Link from "next/link";

export function LinkButton({ children, href }: { children: ReactNode; href: string }) {
  return (
    <Link href={href} className="ed-btn">
      {children}
    </Link>
  );
}
