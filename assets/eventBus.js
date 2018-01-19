class eventBus extends Object {
	constructor(props) {
		super(props)
		this.$on = (type, func) => {
			this[type] = func
		}
		this.$emit = (type, val) => {
			this[type](val)
		}
		this.$remove = (type) => {
			delete this[type]
		}
	}
}
const Bus = new eventBus()
export default Bus