
const blockAttributes = {
	align: {
		type: 'string',
	},
	content: {
		type: 'string',
		source: 'html',
		selector: 'h1,h2',
		default: '',
	},
	level: {
		type: 'number',
		default: 1,
	},
	placeholder: {
		type: 'string',
	},
	textColor: {
		type: 'string',
	},
	customTextColor: {
		type: 'string',
	},
};

const deprecated = [
	{
		attributes: blockAttributes,
		save() {
			return 'Hello World';
		},

	},
];

export default deprecated;
