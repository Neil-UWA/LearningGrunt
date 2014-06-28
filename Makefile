SRC		=	./src/lottery.coffee
BUILD_PATH	=	./build

all: clean build jshint uglify

#assume that uglify is installed locally
uglify:
	@echo uglifying
	@./node_modules/grunt-contrib-uglify/node_modules/uglify-js/bin/uglifyjs ./build/lottery.js >> ./build/lottery.min.js

jshint:
	@echo jshinting your js files
	@./node_modules/grunt-contrib-jshint/node_modules/jshint/bin/jshint ./build/lottery.js

build: $(SRC)
	@echo building
	@coffee -co $(BUILD_PATH) $(SRC) 
	
clean:
	@echo cleaning your project
	@rm -f ./build/*.js

.PHONY: build
