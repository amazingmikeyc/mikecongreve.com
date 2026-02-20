import {ReactNode} from "react";
import Link from "next/link";
import Image from "next/image";
import {LinkButton} from "@/app/components/LinkButton";
import {List} from "@/app/components/List";

export default function Home() {
  return (
    <div className="flex min-h-screen font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col justify-between ">
        <div className="flex flex-col   sm:items-start sm:text-left">
          <div className="sm:flex w-full">
            <Block title="Career">
              <p>So, I have a career.</p>
              <p>I&apos;ve spent nearly 2 decades now working on mainly web-based systems for companies
                large and small, working hard to create and maintain reliable systems.
              </p>
              <p>
                I mainly work with PHP and Javascript with a focus on best practices and maintainability.
              </p>
              <LinkButton href="/career">Read more...</LinkButton>
            </Block>

            <Block title="Blog">
              <p>
                This blog is mainly a creative outlet for comedic writing and drawing
              </p>

              <p>
                From time to time, I might write something programming related. Or something I might find funny.
              </p>
              <LinkButton href="//blog.mikecongreve.com">Read more...</LinkButton>
            </Block>

          </div>
          <div className="sm:flex w-full">



          <Block title={"Contact Me"}>
              <List>
                <li>📧 mike.congreve@gmail.com</li>
                <li><Image alt="LinkedIn" className="inline" src="/linkedin.png" width={18} height={18}/> <Link href="https://uk.linkedin.com/pub/michael-congreve/1b/b15/3a">LinkedIn</Link></li>
                <li>📞 (send me an email first)</li>
              </List>
          </Block>
            <Block title="Projects">
              <p>More to come here!</p>
            </Block>

          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">

          </p>
        </div>
        </div>
      </main>
    </div>
  );

  function Block({children, title}: {children:ReactNode, title:string}) {
    return (
      <div className="w-full sm:w1/2 m-5 break-inside-avoid">
        <h2 className="text-2xl">{title}</h2>
        {children}

      </div>
  )
  }

}