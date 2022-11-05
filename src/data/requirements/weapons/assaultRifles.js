import {
	classic, cliffside, digital, dragon, geometric, skulls, solidColours, sprayPaint, stripes, tiger, woodland
} from "../camo/_index";

const masteryChallenges = {
	'Gold': 'Get 3 kills without dying 10 times',
	'Platinum': 'Get 25 longshot kills',
	'Polyatomic': 'Get 25 headshot kills',
};
export default {
	'M4': {
		'Scales': sprayPaint["Scales"],
		'Desert Hybrid': woodland["Desert Hybrid"],
		'Dark Leaves': dragon["Dark Leaves"],
		'Urban Renewal': classic["Urban Renewal"],
		...masteryChallenges
	},

	'TAQ-56': {
		'Hidden Snake': woodland["Hidden Snake"],
		'Iceland': geometric["Iceland"],
		'Stonewall Digital': digital["Stonewall Digital"],
		'Back in Blue': classic["Back in Blue"],
		...masteryChallenges
	},

	'Kastov 762': {
		'Urban Foliage': woodland["Urban Foliage"],
		"Rip N' Tear": sprayPaint["Rip N' Tear"],
		'Forest Ice': geometric["Forest Ice"],
		'Red Tiger': tiger["Red Tiger"],
		...masteryChallenges
	},

	'Lachmann-556': {
		'Marshland': stripes["Marshland"],
		'Pine': solidColours["Pine"],
		'Dark Tiger Digital': digital["Dark Tiger Digital"],
		'Cthulhu': skulls["Cthulhu"],
		...masteryChallenges
	},

	'STB 556': {
		'Sponge Tac': sprayPaint["Sponge Tac"],
		'Black Top': dragon["Black Top"],
		'Slate': solidColours["Slate"],
		'Neon Pink': dragon["Neon Pink"],
		...masteryChallenges
	},

	'M16': {
		'Modern Woodland': woodland["Modern Woodland"],
		'Marsh Digital': digital["Marsh Digital"],
		'Dank Forest': tiger["Dank Forest"],
		'Intoxicate': tiger["Intoxicate"],
		...masteryChallenges
	},

	'Kastov-74U': {
		'Ripple Effect': sprayPaint["Ripple Effect"],
		'Jungle Digital': digital["Jungle Digital"],
		'Canary Stone': geometric["Canary Stone"],
		'Chemical Reaction': cliffside["Chemical Reaction"],
		...masteryChallenges
	},

	'Kastov 545': {
		'Snowdrift': woodland["Snowdrift"],
		'Mudslide': tiger["Mudslide"],
		'Savannah': stripes["Savannah"],
		'Petri Digital': digital["Petri Digital"],
		...masteryChallenges
	},
}
