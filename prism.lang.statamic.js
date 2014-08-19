Prism.languages.statamic = Prism.languages.extend('markup', {
	
	'statamic-tag': {
		pattern: /\{\{[^]*?\}\}/gm,
		inside: {
			'attr-value': {
				pattern: /=\s*"(\w+|\s+|\/)+"/,
				inside: {
					'punctuation': /=|&gt;|"/g
				}
			},
			'punctuation': /\{\{\s?\/?|\}\}/,
			'plugin-name': {
				pattern: /^\s*\w+:\w+/,
				inside: {
					'class': /\w+(?=:)/,
					'colon': /:/,
					'method': /\w+$/
				}
			},
			'tag-name': /^\w+/,
			'keyword': /(if|else|elseif|endif|unless)/g,
			'attr-name': /\w+/
		}
	}

});