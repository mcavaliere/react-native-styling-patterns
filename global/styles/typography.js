import Colors from './colors';

const Typography = {
	heading1: {
		fontSize: 30,
		fontWeight: 'bold',
		lineHeight: 32
	},

	heading2: {
		fontSize: 26,
		fontWeight: 'bold',
		lineHeight: 28
	},

	heading3: {
		fontSize: 22,
		fontWeight: 'bold',
		lineHeight: 25
	},

	bodyText: {
		fontSize: 18,
		fontWeight: 'normal',
		lineHeight: 21
	},

	// ...etc.
};

let keys = Object.keys(Typography);

// Iterate thru the above style groupings. Here we have the opportunity to do
//  two useful things:
//
//   1. Dynamically add shared properties like fontFamily,
//   2. Create meta-variants of each style.
//
//   We can also do this individually if we wanted to; in this case, doing it
//    globally allows us to save a lot of lines of code.
//
for (let i = 0; i < keys.length; i++) {
	let key = keys[i];

	// All type uses the same font family.
	Typography[key].fontFamily = 'Open Sans';

	// Create Light and Dark variants of all type classes for easy use.
	//  Examples: Typography.heading1Light, Typography.heading1Dark,
	//            Typography.bodyTextLight, Typography.bodyTextDark
	//
	if (key !== 'light' && key !== 'dark') {
		if (typeof Typography[`${key}Light`] === 'undefined') {
			Typography[`${key}Light`] = Object.assign({}, Typography[key], Typography['light']);
		}

		if (typeof Typography[`${key}Dark`] === 'undefined') {
			Typography[`${key}Dark`]  = Object.assign({}, Typography[key], Typography['dark']);
		}
	}
}

export default Typography;
