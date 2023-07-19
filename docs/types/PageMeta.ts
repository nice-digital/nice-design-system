export interface PageMeta {
	title: string;
	description?: string;
	npmUrl: string;
	gitHubUrl: string;
	component?: React.FC;
	menu?: React.FC;
}
