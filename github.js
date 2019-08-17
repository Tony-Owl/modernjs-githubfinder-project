class GitHub {
	constructor() {
		this.client_id = 'ab28f25ed1fbace361f8';
		this.client_secret = 'dcf75db90e3a69e0e3f77c8602bb599ec84db9d7';
		this.repos_count = 5;
		this.repos_sort = 'created: asc';
	}

	async getUser(user) {
		const profileResponse = await fetch(
			`https://api.github.com/users/${user}?client_id=${
				this.client_id
			}&client_secret=${this.client_secret}`
		);

		const repoResponse = await fetch(
			`https://api.github.com/users/${user}/repos?per_page=${
				this.repos_count
			}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${
				this.client_secret
			}`
		);

		const profile = await profileResponse.json();
		const repos = await repoResponse.json();

		return {
			profile,
			repos
		};
	}
}
