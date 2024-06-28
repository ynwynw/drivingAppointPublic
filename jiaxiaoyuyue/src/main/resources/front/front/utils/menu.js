const menu = {
    list() {
        return [
    {
        "backMenu":[
        ],
        "frontMenu":[
        ],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
    {
        "backMenu":[
            {
                "child":[
                    {
						"appFrontIcon":"cuIcon-favor",
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"教练收藏",
                        "menuJump":"列表",
                        "tableName":"jiaolianCollection"
                    }
                ],
                "menu":"教练收藏"
            }
            ,
            {
                "child":[
                    {
						"appFrontIcon":"cuIcon-evaluate",
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"教练留言",
                        "menuJump":"列表",
                        "tableName":"jiaolianLiuyan"
                    }
                ],
                "menu":"教练留言"
            }
			,
			{
                "child":[
                    {
						"appFrontIcon":"cuIcon-form",
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"教练预约",
                        "menuJump":"列表",
                        "tableName":"jiaolianYuyue"
                    }
                ],
                "menu":"教练预约"
            }
			,
			{
                "child":[
                    {
						"appFrontIcon":"cuIcon-form",
                        "buttons":[
                            "查看",
                        ],
                        "menu":"驾校信息",
                        "menuJump":"列表",
                        "tableName":"jiaoxiao"
                    }
                ],
                "menu":"驾校信息"
            }
			,
			{
                "child":[
                    {
						"appFrontIcon":"cuIcon-form",
                        "buttons":[
                            "查看",
                        ],
                        "menu":"考试通知",
                        "menuJump":"列表",
                        "tableName":"kaoshix"
                    }
                ],
                "menu":"考试通知"
            }
			,
			{
                "child":[
                    {
						"appFrontIcon":"cuIcon-form",
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"考试预约",
                        "menuJump":"列表",
                        "tableName":"kaoshixYuyue"
                    }
                ],
                "menu":"考试预约"
            }
            ,
            {
                "child":[
                    {
						"appFrontIcon":"cuIcon-activity",
                        "buttons":[
                            "查看"
                        ],
                        "menu":"公告通知",
                        "menuJump":"列表",
                        "tableName":"news"
                    }
                ],
                "menu":"公告通知"
            }
        ],
        "frontMenu":[
        ],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"是",
        "hasFrontRegister":"是",
        "roleName":"学员",
        "tableName":"yonghu"
    }
]

	}
}
export default menu;
