import Link from "next/link";
import { ReactNode } from "react";

export default function Home() {
  return (
    <div>
      <div className="bbc-hero">
        <div className="bbc-prompt">
          <span className="prompt-sym">&gt;&nbsp;</span>
          MIKE CONGREVE
          <span className="bbc-cursor" />
        </div>
        <div className="bbc-hero-sub">
          SOFTWARE DEVELOPMENT &amp; ENGINEERING<br />
          LEICESTER, UK &nbsp;·&nbsp; NEARLY 2 DECADES EXPERIENCE
        </div>
      </div>

      <div className="bbc-grid">
        <BbcBox title="CAREER" pageNum="201" color="cyan">
          <p>
            So, I have a career. I&apos;ve spent nearly 2 decades now working
            on mainly web-based systems for companies large and small, working
            hard to create and maintain reliable systems.
          </p>
          <p>
            I mainly work with PHP and Javascript with a focus on best
            practices and maintainability.
          </p>
          <BbcBtn href="/career">READ MORE</BbcBtn>
        </BbcBox>

        <BbcBox title="BLOG" pageNum="301" color="yellow">
          <p>
            This blog is mainly a creative outlet for comedic writing
            and drawing.
          </p>
          <p>
            From time to time, I might write something programming related.
            Or something I might find funny.
          </p>
          <BbcBtn href="//blog.mikecongreve.com">READ MORE</BbcBtn>
        </BbcBox>

        <BbcBox title="CONTACT ME" pageNum="401" color="green">
          <ul className="bbc-contact-list">
            <li>
              <a href="mailto:mike.congreve@gmail.com">mike.congreve@gmail.com</a>
            </li>
            <li>
              <a href="https://uk.linkedin.com/pub/michael-congreve/1b/b15/3a">
                linkedin.com/in/michael-congreve
              </a>
            </li>
            <li style={{ color: "#444466", fontSize: "0.82rem" }}>
              TELEPHONE: EMAIL FIRST
            </li>
          </ul>
        </BbcBox>

        <BbcBox title="PROJECTS" pageNum="501" color="magenta">
          <p>More to come here!</p>
          <p style={{ color: "#444466", fontSize: "0.82rem" }}>
            LOADING...
          </p>
        </BbcBox>
      </div>
    </div>
  );
}

function BbcBox({
  title,
  pageNum,
  color,
  children,
}: {
  title: string;
  pageNum: string;
  color: "cyan" | "yellow" | "green" | "magenta";
  children: ReactNode;
}) {
  return (
    <div className={`bbc-box bbc-${color}`}>
      <div className="bbc-box-header">
        <span>{title}</span>
        <span className="bbc-box-pagenum">P{pageNum}</span>
      </div>
      {children}
    </div>
  );
}

function BbcBtn({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="bbc-btn">
      {children}
    </Link>
  );
}
