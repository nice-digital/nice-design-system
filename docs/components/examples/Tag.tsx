import { Tag } from "@nice-digital/nds-tag";

export const DemoTags = () => (
	<>
		<Tag>I am a tag!</Tag> <Tag success>I am also a tag!</Tag>
	</>
);

export const StandardTag = () => <Tag>Tag</Tag>;

export const PhaseTags = () => (
	<>
		<Tag alpha>Alpha</Tag> <Tag beta>Beta</Tag> <Tag live>Live</Tag>
	</>
);

export const GuidanceTags = () => (
	<>
		<Tag new>New</Tag> <Tag updated>Updated</Tag>{" "}
		<Tag consultation>Consultation</Tag>
	</>
);

export const ImpactTag = () => <Tag impact>Tag</Tag>;

export const FlushTag = () => <Tag flush>Tag</Tag>;

export const OutlineTag = () => <Tag outline>Tag</Tag>;
