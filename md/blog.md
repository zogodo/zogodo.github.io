# 看到别人写博客, 我也写写

9月21日上午，阳光明媚，鲜花斗艳。帕洛阿尔托苹果店里欢声笑语，人头攒动。苹果公司首席执行官蒂姆·库克先生在店长欧阳猛南陪同下，不远千米，深入到一线店面，为那里的员工带去节曰的问候和良好的祝愿。

“果粉们，你们辛苦了，我代表某果公司，祝你们身体健康，生活幸福，工作成功！”库克亲切慰问广大员工和顾客，并就iOS7、iPhone 5S和iPhone 5C的销售状况进行调研。

“您现在每月工资有多少？肾5S拿到了吗？”在店里，库克关切地向果粉们问起这一问题。当听说果粉们排到了5S，库克满意地连连点头。接着他指出，近年来苹果事业发展取得巨大成就，特别是iPhone影响剧增，老百姓对iOS满意度逐步提高，在这个转变过程中，果粉的辛勤工作功不可没。

库克看到一个中国小朋友在排队买iPhone 5S，亲切的问：“5288元一台能承受不？”小朋友回答到：“能！”当得知这位小朋友卖了一个肾来买iPhone 5S时，库克叮嘱道：“在支持苹果的同时，也要爱护身体。”

库克与购买苹果手机的果粉们兴致勃勃地参观了苹果专卖店，和员工们拉了拉家常，并饶有兴趣地玩了四盘切西瓜游戏，与普通员工同乐。

在交谈中，库克多次关心地强调：“有了iPhone 5C，就不卖iPhone 5了。”并对顾客说：“好好休息，身体是革命的本钱嘛！”会谈始终在亲切友好的气氛中进行。

顾客们就库克的讲话达成了广泛的共识，并承认世界上只有iOS最流畅，要紧紧的团结在以库克先生为首席执行官的苹果公司集体周围，一心一意抓学习，聚精会神谋发展。

帕洛阿尔托苹果专卖店当日原则通过《蒂姆·库克首席执行官在加州新苹果店的讲话纪要》，并下发各分店认真学习、研讨。

# 测试图表

```mermaid
sequenceDiagram
%% 设置显示消息的自动编号
autonumber

participant User as @人物角色
participant Client as 系统角色
participant Server as **重要系统角色
participant Extend as --外部系统角色

par 平行消息
	User ->> Client: 平行发送消息1
and
	User ->> Client: 平行发送消息2
and
  Client ->>+ Server: 平行发送消息3
  Server -->>- Client: 发送消息
end

%% 设置区域高亮
rect rgba(128, 128, 128, 0.3)
	Extend ->> Extend: 内部动作
end

Note left of Extend: 显示在外部系统<br />左侧备注说明
Note right of Extend: 显示在外部系统<br />右侧备注说明
Note over Client,Server: 跨对象备注说明
loop 循环
	Client ->>+ Extend: 发送消息A
	alt 抉择1
		Server -->> Client: 同步返回消息A1
	else 抉择2
		Server --X Client: 异步返回消息A2
	end
	opt 可选
		Extend ->>- Server: 发送消息X
	end
end
```

