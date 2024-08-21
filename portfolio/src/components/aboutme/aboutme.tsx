import WordRotate from "@/components/lib/magicui/word-rotate";

export function AboutMe() {
	return (
		<div className="flex flex-col sm:mt-20 sm:ml-12 lg:mt-20 lg:ml-24">
			<h1 className="text-4xl font-bold w-96 leading-relaxed">
				hi, i&#39;m{" "}
				<a
					href="https://github.com/voloks1"
					className="text-blue-500 hover:underline">
					@voloks1
				</a>{" "}
				and a{" "}
				<span className="inline-block">
					<WordRotate
						className="flex text-4xl font-bold text-white dark:text-white"
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

			<p className="mt-8 text-base">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
				vitae suscipit earum maiores, modi architecto veniam. Doloremque
				neque voluptatibus, perferendis beatae incidunt nam quos
				mollitia autem eius, animi consequuntur maiores?
			</p>
		</div>
	);
}
