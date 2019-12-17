var companyInfo = {
	title: 'PRIME STEAK RESTAURANT',
	phone: '(718) 219 - 8652',
	location: 'Los Angeles, California'
};

var specialMenuData = [
	{
		img:
			'https://media-cdn.tripadvisor.com/media/photo-s/08/8f/a1/bc/the-depot.jpg',
		title: 'Super BBQ Grill No Smoke',
		description:
			'Fried eggs, Steak, baked potato or french fries, side of vegetables',
		price: '$25'
	},
	{
		img:
			'https://image.businessinsider.com/5d3b51e02516e96c45429834?width=1100&format=jpeg&auto=webp',
		title: 'Queen Of Autumn',
		description:
			'Warm chicken wings, portobello mushrooms, fresh mozzarella, coffee or tea',
		price: '$42'
	},
	{
		img:
			'https://img1.southernliving.timeinc.net/sites/default/files/styles/story_card_hero/public/image/2017/06/main/steak_3.jpg?itok=R_ZQfX-H',
		title: 'Royal Liver Fried',
		description:
			'Grilled Beef Steak, roasted red potatoes with rosemary, mushrooms sauce, vine',
		price: '$30'
	}
];

var reviewsData = [
	{
		company: 'The Food Network',
		author: 'Joe Bastiachi',
		authorInfo: 'Winner Of The Chef',
		hightlight: 'Best Restaurant in the L.A area!',
		review:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'
	},
	{
		company: 'HBO',
		author: 'Joe Bastiachi',
		authorInfo: 'Winner Of The Chef',
		hightlight: 'Best Restaurant in the L.A area!',
		review:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'
	},
	{
		company: 'CWB',
		author: 'Joe Bastiachi',
		authorInfo: 'Winner Of The Chef',
		hightlight: 'Best Restaurant in the L.A area!',
		review:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'
	},
	{
		company: 'NBC',
		author: 'Joe Bastiachi',
		authorInfo: 'Winner Of The Chef',
		hightlight: 'Best Restaurant in the L.A area!',
		review:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'
	},
	{
		company: 'The New York Times',
		author: 'Joe Bastiachi',
		authorInfo: 'Winner Of The Chef',
		hightlight: 'Best Restaurant in the L.A area!',
		review:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.'
	}
];

var randomQuoteData = [
	{
		author: 'Johny',
		quote:
			'Good Painting Is Like Good Cooking; It Can Be Tasted, But Not Explained.'
	},
	{
		author: 'Raul',
		quote: 'Best Hamburgers in town.'
	},
	{
		author: 'Cindy',
		quote: "Can't live without my pizza."
	}
];

export const globalState = {
	count: 0,
	companyInfo,
	specialMenuData,
	reviewsData,
	randomQuoteData,
	reviewStatus: {
		currentReview: 0
	}
};
