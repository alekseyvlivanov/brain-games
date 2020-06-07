run: brain-games

brain-games:
	node bin/brain-games.js

install:
	npm install

lint:
	npx eslint .

publish:
	npm publish --dry-run
