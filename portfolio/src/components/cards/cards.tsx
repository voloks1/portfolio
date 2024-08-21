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
		<div className="flex flex-row align-middle justify-around text-center pb-8 md:h-[400px] w-screen">
			{/* card 1 */}
			<Card className="w-1/4 h-full mx-auto">
				<CardHeader>
					<CardTitle>projeto de bagulho</CardTitle>
					<CardDescription>projeto 1</CardDescription>
				</CardHeader>
				<CardContent></CardContent>
				<CardFooter className="flex justify-between"></CardFooter>
			</Card>
			{/* card 2 */}
			<Card className="w-1/4 h-full mx-auto">
				<CardHeader>
					<CardTitle>projeto de coisa</CardTitle>
					<CardDescription>projeto 2</CardDescription>
				</CardHeader>
				<CardContent></CardContent>
				<CardFooter className="flex justify-between"></CardFooter>
			</Card>
			{/* card 3 */}
			<Card className="w-1/4 h-full mx-auto">
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
