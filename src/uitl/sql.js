import Idb from 'idb-js' //  引入Idb


const config = {
	dbName: "yapay", // *数据库名称
	version: 1, // 数据库版本号（默认为当前时间戳）
	tables: [ // *数据库的表，即ObjectStore
		{
			tableName: "grade", // *表名
			option: {
				keyPath: "id"
			}, // 表配置，即ObjectStore配置，此处指明主键为id
			indexs: [ // 数据库索引（建议加上索引）
				{
					key: "id", // *索引名
					option: { // 索引配置，此处表示该字段不允许重复
						unique: true
					}
				}
				
			]
		},
	]
}


let userid = null
let _this = null
let student_db = null
const sql = {
	init(success=function(){}) {

		_this = this
		userid = this.$getToken(1)

		Idb(config).then(db => {
			student_db = db
			success(sql)
		})
	},
	update(data) {
		/**
		 * @method 增加单条数据
		 * */
		this.getDatas((res) => {
			if (res == null) {
				//没有该用户的数据，新增
				student_db.insert({
					tableName: "grade",
					data: {
						id: userid,
						datas: data
					},
					success: () => console.log("新增用户缓存成功")
				});
			} else {
				//有，修改
				student_db.update_by_primaryKey({
					tableName: "grade",
					target: userid,
					handle: (val) => {
						val.datas = data
						return val
					},
					success: res => {
						//console.log(res);
					}
				})
			}

		})
	},
	getDatas(success) {
		/**
		 * @method 根据主键查询某条数据
		 * */
		student_db.query_by_primaryKey({
			tableName: 'grade',
			target: userid,
			success: (res) => {
				success(res)
			}
		})
	},
	remove() {
		/**
		 * @method 通过主键删除某条数据
		 * */
		student_db.delete_by_primaryKey({
			tableName: 'grade',
			target: userid,
			success: () => console.log('删除成功')
		})
	}

}

export default sql
