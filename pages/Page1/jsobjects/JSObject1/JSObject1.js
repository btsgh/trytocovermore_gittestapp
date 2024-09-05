export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		setInterval(() => {showAlert('hi')}, 5000, 'intervel1')
		return "rakshaaa"
	},
	async myFun2 () {
		clearInterval('intervel1')
	}
}