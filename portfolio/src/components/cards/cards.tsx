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
		<div className="flex flex-col mx-auto w-10/12 sm:flex-row align-middle justify-around text-center pb-8 md:h-[400px] sm:w-screen">
			{/* card 1 */}
			<Card className="sm:w-1/4 w-3/4 h-full mx-auto mb-4">
				<CardHeader>
					<CardTitle>projeto de bagulho</CardTitle>
					<CardDescription>projeto 1</CardDescription>
				</CardHeader>
				<CardContent></CardContent>
				<CardFooter className="flex justify-between"></CardFooter>
			</Card>
			{/* card 2 */}
			<Card className="sm:w-1/4 w-3/4 h-full mx-auto mb-4">
				<CardHeader>
					<CardTitle>projeto de coisa</CardTitle>
					<CardDescription>projeto 2</CardDescription>
				</CardHeader>
				<CardContent></CardContent>
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
