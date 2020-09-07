// 数据格式,数据中只需要包含以下字段和数据格式,开发者可以添加字段,比如id等等,不影响组件显示,
// 组件的返回结果是有菜单数组下标形式返回,
// 如果传入数据中有value,也会返回value,开发者可根据返回的下标获取所选中的菜单
/*
[
	{
		"name":"",	//字符串类型 选填项 菜单名称,如不填,则取第一个子菜单的name值,filter和radio类型则将设置为"筛选"
		"type":""	//字符串类型 必填项 可取值 hierarchy/filter/radio  hierarchy单/多层级菜单(最多三级); filter筛选多选菜单; radio筛选单选菜单
		"submenu":[	//对象数组类型 必填项 子菜单数据
			{
				"name":"",	//字符串类型 必填项 菜单名称
				"value":"",	//字符串类型 选填项 自定义内容,比如id等等,如果填写了,confirm返回的结果中将返回对应选中的value,若菜单无value字段则返回null,filter类型此字段无效果
				"submenu":[	//对象数组类型 必填项 子菜单数据
					{
						"name":"",	//字符串类型 必填项 菜单名称
						"value":"",	//字符串类型 选填项 自定义内容,比如id等等,如果填写了,confirm返回的结果中将返回对应选中的value,若菜单无value字段则返回null
						"submenu":[	//对象数组类型 必填项 子菜单数据 filter类型无效 
							{
								"name":"",	//字符串类型 必填项 菜单名称 hierarchy类型层级最多到此
								"value":"",	//字符串类型 选填项 自定义内容,比如id等等,如果填写了,confirm返回的结果中将返回对应选中的value,若菜单无value字段则返回null
							}
						]
					}
				]
			}
		]
	}
]
*/

//0.0.4版本起 返回结果将有两部分组成:
/*
{
	index:[],	//旧版本的下标数组形式
	value:[]	//菜单中的valve,结构和下标结果数组一样,只是把下标替换成了value而已
}
*/
// 以下演示数据中,我故意把value设置成跟name一样,只是为了方便演示,使示例更加易懂,实际使用时候value应该是一个标识,给后台识别所用的.
// 数据较长，请仔细查看。
export default [{
		"name":'综合',
		"type": 'hierarchy',
		"submenu": [{
				"name": '全部分类',
				"value": "全部分类",
				"submenu": [{
					"name": "全部分类",
					"value": "全部分类"
				}, ]
			},
			{
				"name": '桌布',
				"value": "",
				"submenu": [{
						"name": "好看的桌布",
						"value": "好看的桌布"
					},
					{
						"name": "可爱的桌布",
						"value": "可爱的桌布",
						"submenu": [{
							"name": "黑色波点",
							"value": "黑色波点"
						}, {
							"name": "黄色波点",
							"value": "黄色波点"
						}, {
							"name": "黄色波点",
							"value": "黄色波点"
						}, {
							"name": "黄色波点",
							"value": "黄色波点"
						}]
					},
					{
						"name": "美丽的桌布",
						"value": "美丽的桌布",
						"submenu": [{
							"name": "黄色波点",
							"value": "黄色波点"
						}, {
							"name": "黄色波点",
							"value": "黄色波点"
						}, {
							"name": "黄色波点",
							"value": "黄色波点"
						}, {
							"name": "黄色波点",
							"value": "黄色波点"
						}, {
							"name": "黄色波点",
							"value": "黄色波点"
						}]
					},
					{
						"name": "好吃的桌布",
						"value": "好吃的桌布",
						"submenu": [{
							"name": "面包蛋糕",
							"value": "面包蛋糕"
						}, {
							"name": "甜点",
							"value": "甜点"
						}, {
							"name": "冰淇淋",
							"value": "冰淇淋"
						}, {
							"name": "中式点心",
							"value": "中式点心"
						}]
					},
					{
						"name": "啊啊啊桌布",
						"value": "啊啊啊桌布",
						"submenu": [{
							"name": "啊啊",
							"value": "啊啊"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "阿妈",
							"value": "阿妈"
						}, {
							"name": "西北菜",
							"value": "西北菜"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "农家乐",
							"value": "农家乐"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}]
					}
					
				]
			},
			{
				"name": '贴纸',
				"value": "贴纸",
				"submenu": [{
						"name": "好看的",
						"value": "好看的"
					},
					{
						"name": "可爱的",
						"value": "可爱的"
					},
					{
						"name": "美丽的",
						"value": "美丽的"
					},
					{
						"name": "泡泡的",
						"value": "泡泡的"
					},
					{
						"name": "酷酷的",
						"value": "酷酷的"
					}
				]
			},
			{
				"name": '桌布',
				"value": "",
				"submenu": [{
						"name": "好看的桌布",
						"value": "好看的桌布"
					},
					{
						"name": "可爱的桌布",
						"value": "可爱的桌布",
						"submenu": [{
							"name": "黑色波点",
							"value": "黑色波点"
						}, {
							"name": "黄色波点",
							"value": "黄色波点"
						}, {
							"name": "黄色波点",
							"value": "黄色波点"
						}, {
							"name": "黄色波点",
							"value": "黄色波点"
						}]
					},
					{
						"name": "美丽的桌布",
						"value": "美丽的桌布",
						"submenu": [{
							"name": "黄色波点",
							"value": "黄色波点"
						}, {
							"name": "黄色波点",
							"value": "黄色波点"
						}, {
							"name": "黄色波点",
							"value": "黄色波点"
						}, {
							"name": "黄色波点",
							"value": "黄色波点"
						}, {
							"name": "黄色波点",
							"value": "黄色波点"
						}]
					},
					{
						"name": "好吃的桌布",
						"value": "好吃的桌布",
						"submenu": [{
							"name": "面包蛋糕",
							"value": "面包蛋糕"
						}, {
							"name": "甜点",
							"value": "甜点"
						}, {
							"name": "冰淇淋",
							"value": "冰淇淋"
						}, {
							"name": "中式点心",
							"value": "中式点心"
						}]
					},
					{
						"name": "啊啊啊桌布",
						"value": "啊啊啊桌布",
						"submenu": [{
							"name": "啊啊",
							"value": "啊啊"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "阿妈",
							"value": "阿妈"
						}, {
							"name": "西北菜",
							"value": "西北菜"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "农家乐",
							"value": "农家乐"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}]
					}
					
				]
			},
			{
				"name": '贴纸',
				"value": "贴纸",
				"submenu": [{
						"name": "好看的",
						"value": "好看的"
					},
					{
						"name": "可爱的",
						"value": "可爱的"
					},
					{
						"name": "美丽的",
						"value": "美丽的"
					},
					{
						"name": "泡泡的",
						"value": "泡泡的"
					},
					{
						"name": "酷酷的",
						"value": "酷酷的"
					}
				]
			},
			{
				"name": '桌布',
				"value": "",
				"submenu": [{
						"name": "好看的桌布",
						"value": "好看的桌布"
					},
					{
						"name": "可爱的桌布",
						"value": "可爱的桌布",
						"submenu": [{
							"name": "黑色波点",
							"value": "黑色波点"
						}, {
							"name": "黄色波点",
							"value": "黄色波点"
						}, {
							"name": "黄色波点",
							"value": "黄色波点"
						}, {
							"name": "黄色波点",
							"value": "黄色波点"
						}]
					},
					{
						"name": "美丽的桌布",
						"value": "美丽的桌布",
						"submenu": [{
							"name": "黄色波点",
							"value": "黄色波点"
						}, {
							"name": "黄色波点",
							"value": "黄色波点"
						}, {
							"name": "黄色波点",
							"value": "黄色波点"
						}, {
							"name": "黄色波点",
							"value": "黄色波点"
						}, {
							"name": "黄色波点",
							"value": "黄色波点"
						}]
					},
					{
						"name": "好吃的桌布",
						"value": "好吃的桌布",
						"submenu": [{
							"name": "面包蛋糕",
							"value": "面包蛋糕"
						}, {
							"name": "甜点",
							"value": "甜点"
						}, {
							"name": "冰淇淋",
							"value": "冰淇淋"
						}, {
							"name": "中式点心",
							"value": "中式点心"
						}]
					},
					{
						"name": "啊啊啊桌布",
						"value": "啊啊啊桌布",
						"submenu": [{
							"name": "啊啊",
							"value": "啊啊"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "阿妈",
							"value": "阿妈"
						}, {
							"name": "西北菜",
							"value": "西北菜"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "农家乐",
							"value": "农家乐"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}]
					}
					
				]
			},
			{
				"name": '贴纸',
				"value": "贴纸",
				"submenu": [{
						"name": "好看的",
						"value": "好看的"
					},
					{
						"name": "可爱的",
						"value": "可爱的"
					},
					{
						"name": "美丽的",
						"value": "美丽的"
					},
					{
						"name": "泡泡的",
						"value": "泡泡的"
					},
					{
						"name": "酷酷的",
						"value": "酷酷的"
					}
				]
			},
			{
				"name": '桌布',
				"value": "",
				"submenu": [{
						"name": "好看的桌布",
						"value": "好看的桌布"
					},
					{
						"name": "可爱的桌布",
						"value": "可爱的桌布",
						"submenu": [{
							"name": "黑色波点",
							"value": "黑色波点"
						}, {
							"name": "黄色波点",
							"value": "黄色波点"
						}, {
							"name": "黄色波点",
							"value": "黄色波点"
						}, {
							"name": "黄色波点",
							"value": "黄色波点"
						}]
					},
					{
						"name": "美丽的桌布",
						"value": "美丽的桌布",
						"submenu": [{
							"name": "黄色波点",
							"value": "黄色波点"
						}, {
							"name": "黄色波点",
							"value": "黄色波点"
						}, {
							"name": "黄色波点",
							"value": "黄色波点"
						}, {
							"name": "黄色波点",
							"value": "黄色波点"
						}, {
							"name": "黄色波点",
							"value": "黄色波点"
						}]
					},
					{
						"name": "好吃的桌布",
						"value": "好吃的桌布",
						"submenu": [{
							"name": "面包蛋糕",
							"value": "面包蛋糕"
						}, {
							"name": "甜点",
							"value": "甜点"
						}, {
							"name": "冰淇淋",
							"value": "冰淇淋"
						}, {
							"name": "中式点心",
							"value": "中式点心"
						}]
					},
					{
						"name": "啊啊啊桌布",
						"value": "啊啊啊桌布",
						"submenu": [{
							"name": "啊啊",
							"value": "啊啊"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "阿妈",
							"value": "阿妈"
						}, {
							"name": "西北菜",
							"value": "西北菜"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "农家乐",
							"value": "农家乐"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}]
					}
					
				]
			},
			{
				"name": '贴纸',
				"value": "贴纸",
				"submenu": [{
						"name": "好看的",
						"value": "好看的"
					},
					{
						"name": "可爱的",
						"value": "可爱的"
					},
					{
						"name": "美丽的",
						"value": "美丽的"
					},
					{
						"name": "泡泡的",
						"value": "泡泡的"
					},
					{
						"name": "酷酷的",
						"value": "酷酷的"
					}
				]
			},
			{
				"name": '桌布',
				"value": "",
				"submenu": [{
						"name": "好看的桌布",
						"value": "好看的桌布"
					},
					{
						"name": "可爱的桌布",
						"value": "可爱的桌布",
						"submenu": [{
							"name": "黑色波点",
							"value": "黑色波点"
						}, {
							"name": "黄色波点",
							"value": "黄色波点"
						}, {
							"name": "黄色波点",
							"value": "黄色波点"
						}, {
							"name": "黄色波点",
							"value": "黄色波点"
						}]
					},
					{
						"name": "美丽的桌布",
						"value": "美丽的桌布",
						"submenu": [{
							"name": "黄色波点",
							"value": "黄色波点"
						}, {
							"name": "黄色波点",
							"value": "黄色波点"
						}, {
							"name": "黄色波点",
							"value": "黄色波点"
						}, {
							"name": "黄色波点",
							"value": "黄色波点"
						}, {
							"name": "黄色波点",
							"value": "黄色波点"
						}]
					},
					{
						"name": "好吃的桌布",
						"value": "好吃的桌布",
						"submenu": [{
							"name": "面包蛋糕",
							"value": "面包蛋糕"
						}, {
							"name": "甜点",
							"value": "甜点"
						}, {
							"name": "冰淇淋",
							"value": "冰淇淋"
						}, {
							"name": "中式点心",
							"value": "中式点心"
						}]
					},
					{
						"name": "啊啊啊桌布",
						"value": "啊啊啊桌布",
						"submenu": [{
							"name": "啊啊",
							"value": "啊啊"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "阿妈",
							"value": "阿妈"
						}, {
							"name": "西北菜",
							"value": "西北菜"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "农家乐",
							"value": "农家乐"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}, {
							"name": "湫湫",
							"value": "湫湫"
						}]
					}
					
				]
			},
			{
				"name": '贴纸',
				"value": "贴纸",
				"submenu": [{
						"name": "好看的",
						"value": "好看的"
					},
					{
						"name": "可爱的",
						"value": "可爱的"
					},
					{
						"name": "美丽的",
						"value": "美丽的"
					},
					{
						"name": "泡泡的",
						"value": "泡泡的"
					},
					{
						"name": "酷酷的",
						"value": "酷酷的"
					}
				]
			},
	
		]
	},
	
	{
		// name:'筛选',
		"type": 'filter',
		"submenu": [{
				"name": "优惠",
				"submenu": [{
						"name": "满减活动",
						"value": "满减活动"
					},
					{
						"name": "打折优惠",
						"value": "打折优惠"
					},
					{
						"name": "会员专享",
						"value": "会员专享"
					}
				]
			},
			{
				"name": "服务",
				"submenu": [{
						"name": "预定",
						"value": "预定"
					},
					{
						"name": "点单",
						"value": "点单"
					},
					{
						"name": "外卖",
						"value": "外卖"
					},
					{
						"name": "WIFI",
						"value": "WIFI"
					},
					{
						"name": "自取",
						"value": "自取"
					},
					{
						"name": "包邮",
						"value": "包邮"
					},
					{
						"name": "包装修",
						"value": "包装修"
					},
					{
						"name": "营业中",
						"value": "营业中"
					}
				]
			},
			{
				"name": "价格",
				"submenu": [{
						"name": "50以下",
						"value": "50以下"
					},
					{
						"name": "50-100",
						"value": "50-100"
					},
					{
						"name": "100-300",
						"value": "100-300"
					},
					{
						"name": "300以上",
						"value": "300以上"
					}
				]
			}
		]
	},
	{
		"name":'销量',
		"type": 'radio',
		"submenu": [{
				"name": "优惠(单选)",
				"submenu": [{
						"name": "满减活动",
						"value": "满减活动"
					},
					{
						"name": "打折优惠",
						"value": "打折优惠"
					},
					{
						"name": "会员专享",
						"value": "会员专享"
					}
				]
			},
			{
				"name": "服务(单选)",
				"submenu": [{
						"name": "预定",
						"value": "预定"
					},
					{
						"name": "点餐",
						"value": "点餐"
					},
					{
						"name": "外卖",
						"value": "外卖"
					},
					{
						"name": "WIFI",
						"value": "WIFI"
					},
					{
						"name": "停车位",
						"value": "停车位"
					},
					{
						"name": "无烟区",
						"value": "无烟区"
					},
					{
						"name": "包厢",
						"value": "包厢"
					},
					{
						"name": "营业中",
						"value": "营业中"
					}
				]
			},
			{
				"name": "价格(单选)",
				"submenu": [{
						"name": "50以下",
						"value": "50以下"
					},
					{
						"name": "50-100",
						"value": "50-100"
					},
					{
						"name": "100-300",
						"value": "100-300"
					},
					{
						"name": "300以上",
						"value": "300以上"
					}
				]
			}
		]
	}
]

