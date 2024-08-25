import WordRotate from "@/components/lib/magicui/word-rotate";

export function AboutMe() {
	return (
		<div className="flex flex-col mt-12 mx-auto justify-center text-center md:justify-normal md:text-start pb-6 sm:ml-16 lg:mt-20 lg:ml-24">
			<h1 className="text-3xl sm:text-4xl font-bold w-full leading-relaxed">
				hi, i&#39;m{" "}
				<a
					href="https://github.com/voloks1"
					className="text-blue-500 hover:underline">
					@voloks1
				</a>{" "}
				and a{" "}
				<span className="inline-block">
					<WordRotate
						className="flex text-3xl sm:text-4xl font-bold text-white dark:text-white"
						words={[
							"front end developer",
							"student",
							"learner",
							"music producer",
							"reseba",
						]}
						duration={2500}
					/>
				</span>
			</h1>

			<p className="mt-8 text-sm md:text-base">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
				vitae suscipit earum maiores, modi architecto veniam. Doloremque
				neque voluptatibus, perferendis beatae incidunt nam quos
				mollitia autem eius, animi consequuntur maiores?
			</p>
		</div>
	);
}
