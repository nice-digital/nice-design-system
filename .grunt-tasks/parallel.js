module.exports = {
	options: {
    	stream: true
    },
	watch: {
		tasks: [{
		  grunt: true,
		  args: ["watch:sass"]
		}, {
		  grunt: true,
		  args: ["watch:eslint"]
		}, {
		  grunt: true,
		  args: ["watch:jsbuild"]
		}, {
		  grunt: true,
		  args: ["watch:express"]
		}, {
		  grunt: true,
		  args: ["watch:public"]
		}]
	},
}
