import Link from "next/link";
import Image from "next/image";
import {List, ListItem} from "@/app/components/List";
import {BbcBox} from "@/app/components/LayoutBoxes";
import MyCarousel from "@/app/components/MyCarousel";
import Form from "next/form";
import {Input} from "postcss";
import {SignUpForm} from "@/app/components/SignupForm";

export default function RunPlannerPage() {

    const items = [

    ]



    return (<>
            <div className="space-y-4">
            <div className="bbc-hero-container">
                <div className="bbc-hero">
                    <div className="bbc-prompt uppercase">
                        <span className="prompt-sym">&gt;&nbsp;</span>
                        Projects
                        <span className="bbc-cursor" />
                    </div>
                    <div className="bbc-hero-sub uppercase">
                        Run Planner
                    </div>
                </div>
                <Image src="/mike-teletext.svg"  loading="eager" alt="Mike Congreve" className="bbc-hero-img" width={200} height={170} />
            </div>

            <BbcBox color="green" title={"Why"} pageNum="410" className="space-y-2">
                <div className="overflow-hidden">
                <BbcBox color="yellow" pageNum={"<IMG>"} title={"IMAGE"} className="md:float-right md:w-1/2 ml-4 mb-3">
                    <MyCarousel>
                        <div key={1}>
                            <Image src="/img/projects/runplan/mike-running-spectrum.png" alt="Me, running" width={808} height={576} />
                        </div>
                        <div key={2}>
                            <Image src="/img/projects/runplan/screenshot2.png" alt="shot1" width={808} height={576} />
                        </div>
                        <div key={3}>
                            <Image src="/img/projects/runplan/screenshot3.png" alt="Me, running" width={808} height={576} />
                        </div>
                    </MyCarousel>
                </BbcBox>
                <p>As a keen runner I got fed up with forgetting what times I'd run what race and when. I started to create a
            spreadsheet, which was fun, but has the 2 main problems that 1. it's a spreadsheet and 2. it's a spreadsheet.
                </p>
                <p>Each running season, many clubs have a scheme of Standards, with age-handicapped targets to gain awards
                    such as Bronze, Silver etc. If you have run these times for 5 or more different-length races, you
                    win an award for the year.
                </p>
                <p>So, with that in mind, and the desire to increase my Laravel and React skills, I created the
                    imaginatively named <Link href={"https://runplan.mikecongreve.com"}>Run Planner</Link>.</p>
                <p>Users can import their races from Strava, compare previous attempts, and plan how to get
                their standards.</p>
                <p>There's still plenty to add but it's invitation only at the moment - fill in the form
                if you want a go. </p>
            </div>
            </BbcBox>


            <div className={"bbc-grid"}>
            <BbcBox color="cyan" title="Features" pageNum="411">
                <h2>Features include</h2>

                    <List>
                        <ListItem>
                            Logging of past races and times
                        </ListItem>
                        <ListItem>
                            Integration with Strava
                        </ListItem>
                        <ListItem>
                            Setting targets for future races
                        </ListItem>
                        <ListItem>
                            Basic comparison and analysis
                        </ListItem>
                        <ListItem>
                            CVV import and export
                        </ListItem>
                    </List>

            </BbcBox>

                <BbcBox color="magenta" title="Technology" pageNum="412">
                    <h2>Built using</h2>

                    <List>
                        <ListItem>
                            Tailwind CSS
                        </ListItem>
                        <ListItem>
                            Laravel 13
                        </ListItem>
                        <ListItem>
                            React
                        </ListItem>
                        <ListItem>
                            Lucide
                        </ListItem>
                        <ListItem>
                            AWS (hosting, on EC2 and S3)
                        </ListItem>
                        <ListItem>
                            Github Actions (for build & deployment)
                        </ListItem>

                    </List>

                </BbcBox>
            </div>
            <div className="space-y-1"></div>
            <BbcBox color="yellow" title="Find out more" pageNum="413">
                <SignUpForm consentOptions={['newsletter', 'runplanner-invitation']}/>
            </BbcBox>
            <p><small>Images processed by the <Link href={"https://atornblad.github.io/zx-spectrumizer/"}>ZX Spectrumizer</Link></small></p>
            </div>
            </>

    );
}