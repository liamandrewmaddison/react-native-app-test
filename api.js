export function fetchProperties() {
	var url = 'https://api.nestoria.co.uk/api?pretty=1&country=uk&action=search_listings&place_name=soho&encoding=json&listing_type=buy';
	return fetch(url).then(response => {
		if (response.ok) {
			return new Promise((resolve) => {
				return resolve(response.json());
			});
		} else {
			return new Promise.reject();
		}
	});
}