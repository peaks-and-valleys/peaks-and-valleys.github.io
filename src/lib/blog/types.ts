export interface PostMetadata {
	title: string;
	description: string;
	date: string;
	draft: string;
}

export interface Post {
	slug: string;
	title: string;
	date: string;
	description: string;
	draft: boolean;
}

export interface PostModule {
	default: any; // Svelteコンポーネント
	metadata: PostMetadata;
}
