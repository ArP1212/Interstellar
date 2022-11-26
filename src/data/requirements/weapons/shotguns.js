import {
	cliffside,
	digital,
	foliage,
	geometric,
	reptile,
	solidColors,
	sprayPaint,
	stripes,
	tiger,
	woodland,
} from '../camouflages/_index'

const masteryChallenges = {
	Gold: '3 kills without dying 10 times',
	Platinum: '20 longshot kills',
	Polyatomic: '20 headshot kills',
}

export default {
	'Lockwood 300': {
		'Mosswood': foliage['Mosswood'],
		'Jungle Cat': woodland['Jungle Cat'],
		'Red Cell': digital['Red Cell'],
		'Hunting Orange': solidColors['Hunting Orange'],
		...masteryChallenges,
	},

	'Expedite 12': {
		'Forest Shadow': sprayPaint['Forest Shadow'],
		'Tiger Stripes': tiger['Tiger Stripes'],
		'Snowed In': stripes['Snowed In'],
		'Violent Orchid': cliffside['Violent Orchid'],
		...masteryChallenges,
	},

	'Bryson 800': {
		'Mud Bath': stripes['Mud Bath'],
		'Bamboo': foliage['Bamboo'],
		'Ground Cover': stripes['Ground Cover'],
		'Aqua': solidColors['Aqua'],
		...masteryChallenges,
	},

	'Bryson 890': {
		'Snowstorm Digital': digital['Snowstorm Digital'],
		'Stone Guard': geometric['Stone Guard'],
		'Shedding': reptile['Shedding'],
		'Arctic Chill': woodland['Arctic Chill'],
		...masteryChallenges,
	},
}
