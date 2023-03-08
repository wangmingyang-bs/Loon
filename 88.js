/******************************

脚本作者：彭于晏💞
更新时间：2023-2-28
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/metronome-api.quthing.com\/vip\/state url script-response-body quthing.js

[mitm] 

hostname = metronome-api.quthing.com

*******************************/

var body = $response.body.replace(/validVip":\w+/g,'validVip":true')
.replace(/trialVip":\w+/g,'trialVip":true')
.replace(/vipType":\d/g,'vipType":1')
.replace(/expireTime":\d+/g,'expireTime":9997549937704')
$done({ body });
