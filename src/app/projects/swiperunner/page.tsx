import Link from "next/link";
import Image from "next/image";
import {List, ListItem} from "@/app/components/List";
import {BbcBox} from "@/app/components/LayoutBoxes";
import MyCarousel from "@/app/components/MyCarousel";
import Form from "next/form";
import {Input} from "postcss";
import {SignUpForm} from "@/app/components/SignupForm";

export default function SwipeRunnerPage() {
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
                            SwipeRunner
                        </div>
                    </div>
                    <Image src="/mike-teletext.svg"  loading="eager" alt="Mike Congreve" className="bbc-hero-img" width={200} height={170} />
                </div>

                <BbcBox color="green" title={"Why"} pageNum="410" className="space-y-2">
                    <div className="overflow-hidden">
                        <BbcBox color="yellow" pageNum={"<IMG>"} title={"IMAGE"} className="md:float-right md:w-1/2 ml-4 mb-3">
                            <MyCarousel>
                                <div key={1}>
                                    <Image src="/img/projects/swiperunner/swiperunner-1.png" alt="Screenshot1" width={808} height={576} />
                                </div>
                                <div key={2}>
                                    <Image src="/img/projects/swiperunner/swiperunner-2.png" alt="Screenshot2" width={808} height={576} />
                                </div>
                            </MyCarousel>
                        </BbcBox>

                        <p>This daft experiment in the world of Vibe Coding came from the idea of "What if parkrun,
                            but also, what if Track and Field?".</p>
                        <p>I've uploaded some GPX files of Parkruns (plus a few other races like the Great North
                        Run) and made a daft little swiping racing game</p>
                        <p>User can play multi-player and recreate the exciting thrill of doing a parkrun in
                        35 seconds in this highly realistic Racing Simulator.</p>
                        <p>Why not <a href={"http://swiperunner.mikecongreve.com"}> have a go?</a></p>


                    </div>
                </BbcBox>


                <div className={"bbc-grid"}>
                    <BbcBox color="cyan" title="Features" pageNum="411">
                        <h2>Features include</h2>

                        <List>
                            <ListItem>
                                Multiplayer
                            </ListItem>
                            <ListItem>
                                Different themes and terrains
                            </ListItem>
                            <ListItem>
                                Energy bar
                            </ListItem>
                            <ListItem>
                                Terrible graphics
                            </ListItem>
                            <ListItem>
                                Worse sound effects
                            </ListItem>
                            <ListItem>
                                Fun
                            </ListItem>
                        </List>

                    </BbcBox>

                    <BbcBox color="magenta" title="Technology" pageNum="412">
                        <h2>Built using</h2>

                        <List>
                            <ListItem>
                                PHP with Workerman library
                            </ListItem>
                            <ListItem>
                                Websockets
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

                <p><small>Images processed by the <Link href={"https://atornblad.github.io/zx-spectrumizer/"}>ZX Spectrumizer</Link></small></p>
            </div>
        </>

    );
}