import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../lib/ui/card";

export function Cards() {
	return (
		<div className="flex flex-col mx-auto w-10/12 sm:flex-row align-middle justify-around text-center pb-8 md:h-[400px] sm:w-full">
			{/* card 1 */}
			<Card className="sm:w-1/4 w-3/4 h-full mx-auto mb-4">
				<CardHeader>
					<CardTitle>GameCritic</CardTitle>
					<CardDescription>
						Projeto em colaboração de uma rede social de jogos e
						reviews
						<div className="grid grid-cols-3 text-sm mx-auto mt-2 text-white gap-x-8 w-full">
							<div className="bg-zinc-950 border border-zinc-800 h-6 items-center rounded-full">
								<p>social</p>
							</div>
							<div className="bg-zinc-950 border border-zinc-800 h-6 items-center rounded-full">
								<p>review</p>
							</div>
							<div className="bg-zinc-950 border border-zinc-800 h-6 items-center rounded-full">
								<p>jogos</p>
							</div>
						</div>
					</CardDescription>
				</CardHeader>
				<CardContent>
					<img
						className="object-fill h-[160px]"
						src="https://cdn.discordapp.com/attachments/663895377916985374/1299568685735739484/uJtkfEeXWjgH.png?ex=671dad27&is=671c5ba7&hm=0b394971f208cac380722c6df1a647af4deaf0e7c068cf8f6e285ba15eb71659&"
						alt=""
					/>
				</CardContent>
				<CardFooter className="flex justify-between"></CardFooter>
			</Card>
			{/* card 2 */}
			<Card className="sm:w-1/4 w-3/4 h-full mx-auto mb-4">
				<CardHeader>
					<CardTitle>Ecológica Verde</CardTitle>
					<CardDescription>
						Página de introdução sobre um projeto/página do X
						<div className="grid grid-cols-3 text-sm mx-auto mt-2 text-white gap-x-8 w-full">
							<div className="bg-zinc-950 border border-zinc-800 h-6 items-center rounded-full">
								<p>landing</p>
							</div>
							<div className="bg-zinc-950 border border-zinc-800 h-6 items-center rounded-full">
								<p>jogos</p>
							</div>
							<div className="bg-zinc-950 border border-zinc-800 h-6 items-center rounded-full">
								<p>social</p>
							</div>
						</div>
					</CardDescription>
				</CardHeader>
				<CardContent>
					<img
						className="object-fill h-[160px]"
						src="https://cdn.discordapp.com/attachments/663895377916985374/1299568950711160904/vypMGXbtOBGW.png?ex=671dad66&is=671c5be6&hm=87f68a1a6df2496913b85d4214622af6ae94cfa252bfb22d30d11240827c4c8b&"
						alt=""
					/>
				</CardContent>
				<CardFooter className="flex justify-between"></CardFooter>
			</Card>
			{/* card 3 */}
			<Card className="sm:w-1/4 w-3/4 h-full mx-auto">
				<CardHeader>
					<CardTitle>projeto de seila</CardTitle>
					<CardDescription>projeto 3</CardDescription>
				</CardHeader>
				<CardContent></CardContent>
				<CardFooter className="flex justify-between"></CardFooter>
			</Card>
		</div>
	);
}
