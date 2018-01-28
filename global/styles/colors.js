import Constants from '../constants';

const Color = {

};

const COLOR_VALUES = {
	black: {
		default: '#232323',
		absolute: '#000000'
	},

	white: {
		default: '#ffffff'
	},

	blue: {
		default: '#004d79',
		alt1: '#1d84c4',
		alt2: '#0083f9'
	},

	cyan: {
		default: '#7ae2ff'
	},

	green: {
		default: '#5b9675'
	}
};

Object.assign(Color, {
	/**
	 * Helper for returning literal color values, with an optional variant.
	 *
	 * Usage:
	 *
	 *   Color.get('blue') 				// Returns 'default' variant.
	 *   Color.get('blue', 'alt1')		// Returns 'alt1' variant./
	 *
	 * @param  {String} colorName                 The primary color name.
	 * @param  {String} [variant="default"] The color variant (low, med, etc...see the COLOR_VALUES constant).
	 * @return {String}                     The color's hex value.
	 */
	get: function (colorName, variant="default") {
		let error = `Colors.get(${colorName}, ${variant}) returned an undefined value.`;

		try {
			if ( typeof( COLOR_VALUES[colorName][variant] ) === "undefined" ) {
				throw error;
			}
		} catch(e) {
			throw error;
		}

		return COLOR_VALUES[colorName][variant]
	},
});

export default Color;
