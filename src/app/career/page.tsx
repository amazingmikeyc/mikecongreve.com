import Link from "next/link";
import {List, ListItem} from "../components/List";

export default function Career()
{
    return (
        <>
            <div className="flex flex-wrap w-full ">
                <div className="sm:w-1/3 m:1/4 w-full h-full break-inside-avoid pr-6 order-2 sm:order-1">
                    <div className="bg-indigo-50 rounded-sm p-6">
                    <h2 className="text-xl">Skills &amp; Experience</h2>
                        <p></p>
                    <List>
                        <ListItem>PHP</ListItem>
                        <List>
                            <ListItem>Laravel</ListItem>
                            <ListItem>Symfony</ListItem>
                            <ListItem>Composer</ListItem>
                            <ListItem>PHPUnit</ListItem>
                            <ListItem>Wordpress</ListItem>
                            <ListItem>Composer</ListItem>
                        </List>
                        <ListItem>Databases</ListItem>
                        <List>
                            <ListItem>MySQL</ListItem>
                            <ListItem>MariaDB</ListItem>
                            <ListItem>MS SQL Server</ListItem>
                            <ListItem>MongoDb</ListItem>
                        </List>
                        <ListItem>Javascript</ListItem>
                        <List>
                            <ListItem>Typescript</ListItem>
                            <ListItem>jQuery</ListItem>
                            <ListItem>React</ListItem>
                            <ListItem>Vue</ListItem>
                            <ListItem>AngularJS</ListItem>
                        </List>
                        <ListItem>Server Management/DevOps</ListItem>
                        <List>
                            <ListItem>Linux</ListItem>
                            <ListItem>Bash scripting</ListItem>
                            <ListItem>AWS</ListItem>
                            <ListItem>Windows</ListItem>
                        </List>
                        <ListItem>Management &amp; Team tools</ListItem>
                        <List>
                            <ListItem>Agile</ListItem>
                            <ListItem>Azure DevOps</ListItem>
                            <ListItem>Jira</ListItem>
                        </List>
                    </List>
                    </div>
                </div>
                <div className="pt-6 w-full sm:w-2/3 m:2/4 p-4 order-1 sm:order-2">
                    <h2 className="text-2xl">About me</h2>
                    <p>My name is Mike and I'm an experienced software developer, team lead and manager based in Leicester.</p>
                    <p> I&#39;ve worked in a variety of different environments with a variety of management styles, philosophies
                        and methodologies. I&#39;ve really enjoyed taking the best things from those and am always thinking about
                        the most efficient way to work.
                    </p>
                    <p>Creating testable, clean code is really important to create maintainable systems and so ultimately keep
                        people in business. I like to try to find the line where the minimum needs to be done for maximum impact
                        - ie working smartly & efficiently.
                    </p>
                    <p>Why not take a look at my <Link className="underline" href="https://www.linkedin.com/in/michael-congreve-03ab151b/">LinkedIn profile </Link>
                        for a detailed breakdown of my skills</p>
                </div>
            </div>
        </>
    );

}