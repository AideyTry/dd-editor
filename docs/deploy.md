<!--
 * @Author: Aiden
 * @Date: 2020-09-14 09:49:08
 * @LastEditTime: 2020-09-24 11:05:50
 * @LastEditors: Aiden
 * @Description: 
-->
## 1、npm包发布流程

### （1）、登陆到npm
```bash
首先到npm官网注册账号并绑定邮箱（注意请使用主流邮箱，有的邮箱可能收不到npm邮箱验证的邮件）；
其次用npm adduser来进行登陆，登陆前可用npm whoami来检测是否已登陆，退出登陆用npm logout
```

### （2）、将npm注册源修改为默认的https://registry.npmjs.org
```bash
使用npm config ls来查看当前的信息，使用npm config set registry <地址> 修改注册源
```

### （3）、使用npm publish 发布

### （4）、注意：语义化版本
```bash
在package.json文件中配置version，例如：1.0.0
版本格式：主版本号.次版本号.修订号
主版本号：当你做了不兼容的API修改；
次版本号：当你做了向下兼容的功能性新增；
修订号：当你做了向下兼容的问题修正。
```


## 持续更新中...