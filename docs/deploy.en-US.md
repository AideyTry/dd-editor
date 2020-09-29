<!--
 * @Author: Aiden
 * @Date: 2020-09-14 09:49:08
 * @LastEditTime: 2020-09-29 14:37:31
 * @LastEditors: Aiden
 * @Description: 
-->
English | [简体中文](deploy.md)

## 1、NPN Package Release Process

### (1).Log in to npm
```bash
First go to the npm official website(https://www.npmjs.com) to register an account and bind the mailbox (note that please use mainstream mailboxes, some mailboxes may not receive npm mailbox verification emails);
Secondly, use npm adduser to log in. You can use npm whoami to check whether you are logged in before logging in. Use npm logout to log out.
```

### (2).Modify the npm registration source to the default https://registry.npmjs.org
```bash
Use npm config ls to view the current information, use npm config set registry <address> to modify the registration source
```

### (3).Release by *npm publish*

### (4).Note: Semantic version
```bash
Configure version in the package.json file, for example: 1.0.0
Version format: major version number.minor version number.revision number
Major version number: when you make incompatible API modifications;
Minor version number: when you have added backward compatibility functionality;
Revision number: When you have made a downward compatibility problem correction.
```


## Revision in progress...