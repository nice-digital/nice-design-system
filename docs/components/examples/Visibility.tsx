export const Orientation = () => (
	<>
		<p className="show-landscape">
			This is visible only on landscape orientations
		</p>
		<p className="show-portrait">
			This is visible only on portrait orientations
		</p>
	</>
);

export const HideByScreenWidth = () => (
	<>
		<p className="hide-until-md">
			This is hidden until the md breakpoint and up
		</p>
		<p className="hide-from-md">This is hidden from the md breakpoint and up</p>
		<p className="hide-only-md">This is hidden only in the md breakpoint</p>
	</>
);

export const ShowByScreenWidth = () => (
	<>
		<p className="show-until-md">This is visible until the md breakpoint</p>
		<p className="show-from-md">
			This is visible from the md breakpoint and up
		</p>
		<p className="show-only-md">This is visible only in the md breakpoint</p>
	</>
);
