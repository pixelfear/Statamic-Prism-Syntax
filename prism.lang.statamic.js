Prism.languages.statamic = Prism.languages.extend('markup', {
	
	'statamic-tag': {
		pattern: /\{\{.*\}\}/g,
		inside: {
			'attr-value': {
				pattern: /="\w+"/,
				inside: {
					'punctuation': /=|&gt;|"/g
				}
			},
			'punctuation': /\{\{\s?\/?|\}\}/,
			'plugin-name': {
				pattern: /^\w+:\w+/,
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