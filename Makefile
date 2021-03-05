.PHONY: start
start: node_modules
	npm run dev

.PHONY: start-prod
start-prod: public/build
	npm run start

.PHONY: check
check:
	@npm run --silent check

.PHONY: clean
clean:
	git clean -xdf



package-lock.json: package.json
	npm install
	@touch -c $@

node_modules: package-lock.json
	@touch -c $@

public/build: node_modules src public
	@npm run --silent build
	@npm run --silent css:purge
	@touch -c $@
