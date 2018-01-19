//Component构造器可用于定义组件，调用Component构造器时可以指定组件的属性、数据、方法等。
Component({
	//指定props的类型
	properties: {
		value: {
			type: String,
			value: 'xxx',
			//属性被更改时的回调函数
			observer: function () { }
		}
	},
	data: {},
	methods: {},
	relations: {},
	options: {},
	//类似于mixins
	behaviors: [myBehavior],
	//在组件实例进入页面节点树时执行 此时不能调用 setData
	created: function () { },
	//在组件实例进入页面节点树时执行
	attached: function () { },
	//在组件布局完成后执行，此时可以获取节点信息（使用 SelectorQuery ）
	ready: function () { },
	//在组件实例被移动到节点树另一个位置时执行
	moved: function () { },
	//在组件实例被从页面节点树移除时执行
	detached: function () { },
})
//类似于mixins
//behaviors: ['wx://form-field'] 内置behaviors
//wx://form-field
//使自定义组件有类似于表单控件的行为。 form 组件可以识别这些自定义组件，并在 submit 事件中返回组件的字段名及其对应字段值。这将为它添加以下两个属性。
//name 在表单中的字段名
//value 在表单中的字段值

//生成的组件实例可以在组件的方法、生命周期函数和属性 observer 中通过 this 访问
//is	String	组件的文件路径
//id	String	节点id
//dataset	String	节点dataset
//data	Object	组件数据，包括内部数据和属性值

//实例方法
// setData	Object newData	设置data并执行视图层渲染
// hasBehavior	Object behavior	检查组件是否具有 behavior （检查时会递归检查被直接或间接引入的所有behavior）
// triggerEvent	String name, Object detail, Object options	触发事件，参见 组件事件
// createSelectorQuery		创建一个 SelectorQuery 对象，选择器选取范围为这个组件实例内
// selectComponent	String selector	使用选择器选择组件实例节点，返回匹配到的第一个组件实例对象
// selectAllComponents	String selector	使用选择器选择组件实例节点，返回匹配到的全部组件实例对象组成的数组
// getRelationNodes	String relationKey	获取所有这个关系对应的所有关联节点，参见 组件间关系

//------------------------------------------------------------------------------------------------------
//生命周期函数无法在组件方法中通过 this 访问到。
//属性名应避免以 data 开头，即不要命名成 dataXyz 这样的形式，因为在 WXML 中， data - xyz="" 会被作为节点 dataset 来处理，而不是组件属性。
//在一个组件的定义和使用时，组件的属性名和data字段相互间都不能冲突（尽管它们位于不同的定义段中）。
//在 properties 定义段中，属性名采用驼峰写法（propertyName）