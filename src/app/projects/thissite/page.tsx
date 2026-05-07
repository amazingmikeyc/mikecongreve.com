import Image from "next/image";
import {BbcBox} from "@/app/components/LayoutBoxes";
import {List, ListItem} from "@/app/components/List";

export default function ThisSitePage() {
    return (
        <>
        <div className="space-y-4">
            <div className="bbc-hero-container">
                <div className="bbc-hero">
                    <div className="bbc-prompt uppercase">
                        <span className="prompt-sym">&gt;&nbsp;</span>
                        Projects
                        <span className="bbc-cursor" />
                    </div>
                    <div className="bbc-hero-sub uppercase">
                        mikecongreve.com
                    </div>
                </div>
                <Image src="/mike-teletext.svg"  loading="eager" alt="Mike Congreve" className="bbc-hero-img" width={200} height={170} />

            </div>
            <BbcBox color="green" title={"Where is it"} pageNum="410" className="space-y-2">
                <p>Er, this is it...?</p>
                <p>I last majorly refreshed my website in around 2015; at the time it was mainly just a homepage,
                and a page with a bit of background about me. I used Bootstrap, and that was about it.</p>
                <p>This site is still a (mostly) static site but it is built using a fairly modern stack -
                mainly React with Next.JS. It&#39;s been a great experience to get myself up-to-speed with the
                current generation of site building tech.</p>
                <p>As always with these things, it's a work in progress. I&#39;m not a designer, for one. Or a writer.</p>
            </BbcBox>
            <BbcBox color="cyan" title="Challenges" pageNum="412">
                <p>This site is very simple, but I wanted to make it as easy to update as I can without getting too
                    bogged down with fancy tools and technologies, while also using it as an excuse to learn new
                    things.</p>
                <p>I&#39;ve been familiar with AWS, Route 53 and Cloudflare before but some parts I&#39;ve not directly
                    set up from scratch before</p>
                <List>
                    <ListItem>Use Github actions to compile the NextJS into a static site and copy it to S3</ListItem>
                    <ListItem>Using AWS Cloudfront &amp; Certificate Manager for https</ListItem>
                    <ListItem>Understanding how Cloudfront caches are cleared</ListItem>
                    <ListItem>Understanding AWS&#39;s users and API permissions</ListItem>
                </List>
            </BbcBox>
            <BbcBox color="magenta" title="Technology" pageNum="412">
            <h2>Built using</h2>

            <List>
                <ListItem>
                    Tailwind CSS
                </ListItem>
                <ListItem>
                    Next.JS
                </ListItem>
                <ListItem>
                    React
                </ListItem>
                <ListItem>
                    AWS (hosting on S3)
                </ListItem>
                <ListItem>
                    Github Actions (for build & deployment)
                </ListItem>
                <ListItem>
                    Typescript
                </ListItem>
            </List>
        </BbcBox>
        </div>
        </>
    );
}