SRC		=	./src/lottery.coffee ./src/main.coffee
BUILD_PATH	=	./build

all: clean build jshint uglify

#assume that uglify is installed locally
uglify:
	@echo uglifying
	@./node_modules/grunt-contrib-uglify/node_modules/uglify-js/bin/uglifyjs ./build/lottery.js >> ./build/lottery.min.js
	@./node_modules/grunt-contrib-uglify/node_modules/uglify-js/bin/uglifyjs ./build/main.js >> ./build/main.min.js

jshint:
	@echo jshinting your js files
	@./node_modules/grunt-contrib-jshint/node_modules/jshint/bin/jshint ./build/*.js

build: $(SRC)
	@echo building
	@coffee -co $(BUILD_PATH) $(SRC) 
	
clean:
	@echo cleaning your project
	@rm -f ./build/*.js

.PHONY: build
