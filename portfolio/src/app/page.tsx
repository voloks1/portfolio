import { AboutMe } from "@/components/aboutme/aboutme";
import { AnotherContent } from "@/components/anothercontent/rightcontent";
import { Cards } from "@/components/cards/cards";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { Projects } from "@/components/projects/projects";
import { Skills } from "@/components/skills/skills";

export default function Home() {
	return (
		<div className="min-h-screen bg-dark">
			<Header />
			{/* <DotBackground /> */}
			<div className="flex flex-col sm:grid sm:grid-cols-main">
				<AboutMe />
				<div className="border-zinc-900 border-b-2 w-5/6 mx-auto mb-4 sm:hidden"></div>
				<AnotherContent />
				<div className="border-zinc-900 border-b-2 w-5/6 mx-auto mb-4 sm:hidden"></div>
				<Skills />
			</div>
			<div className="border-zinc-900 border-b-2 w-5/6 mx-auto"></div>
			<Projects />
			<Cards />
			<Footer />
		</div>
	);
}

