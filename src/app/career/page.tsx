import Link from "next/link";

const skills = [
  { label: "PHP", tags: ["Laravel", "Symfony", "Composer", "PHPUnit", "WordPress"] },
  { label: "JavaScript", tags: ["TypeScript", "React", "Vue", "AngularJS", "jQuery"] },
  { label: "Databases", tags: ["MySQL", "MariaDB", "MSSQL", "MongoDB"] },
  { label: "DevOps", tags: ["Linux", "Bash", "AWS", "Windows"] },
  { label: "Management", tags: ["Agile", "Azure DevOps", "Jira"] },
];

export default function Career() {
  return (
    <div>
      <Link href="/" className="bbc-back">
        ← P100 HOME
      </Link>

      <div className="bbc-career-grid">
        <aside className="bbc-skills-panel order-2 sm:order-1">
          <div className="bbc-panel-title">SKILLS &amp; EXP</div>
          {skills.map((group) => (
            <div key={group.label} className="bbc-skill-group">
              <div className="bbc-skill-label">{group.label}</div>
              <div className="bbc-skill-tags">
                {group.tags.map((tag) => (
                  <span key={tag} className="bbc-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </aside>

        <div className="bbc-about-panel order-1 sm:order-2">
          <div className="bbc-about-title">ABOUT ME</div>
          <p>
            My name is Mike and I&apos;m an experienced software developer,
            team lead and manager based in Leicester.
          </p>
          <p>
            I&apos;ve worked in a variety of different environments with a
            variety of management styles, philosophies and methodologies.
            I&apos;ve really enjoyed taking the best things from those and am
            always thinking about the most efficient way to work.
          </p>
          <p>
            Creating testable, clean code is really important to create
            maintainable systems and so ultimately keep people in business.
            I like to try to find the line where the minimum needs to be done
            for maximum impact - ie working smartly &amp; efficiently.
          </p>
          <p>
            In more recent times I&apos;ve been upskilling myself with React, Laravel, and Vue.
            I&apos;ve been using Claude Code to build things and help me learn. I have some
            quite conflicting thoughts on this, but all the words on this site are mine.
          </p>
          <p>
            Why not take a look at my{" "}
            <Link href="https://www.linkedin.com/in/michael-congreve-03ab151b/">
              LinkedIn profile
            </Link>
            {" "}for a detailed breakdown of my skills.
          </p>
        </div>
      </div>
    </div>
  );
}
