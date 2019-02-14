const colors = {
	c1: '#967cf0', // roxo claro
	c2: '#a36cf3', // roxo escuro
	c3: '#85cd1a', // verde
	c4: '#fff', // branco
	c5: '#3cc', // ciano
	c6: '#eee', // cinza claro
	c7: '#999', // cinza médio
	c8: '#333' // cinza escuro
};

export default {
	
	colors,
	
	defaultFontFamily: `Roboto, sans-serif`,
	defaultFontSize: '.9rem',

	button: {
		primary: {
			color: colors.c1,
			background: colors.c4,
		},
		success: {
			color: colors.c4,
			background: colors.c5,
		},
	},
	
};
