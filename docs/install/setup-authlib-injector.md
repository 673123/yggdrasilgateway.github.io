# Authlib Injector

请参考 [Authlib Injector 初始化](https://github.com/yushijinhun/authlib-injector/wiki/%E5%9C%A8-Minecraft-%E6%9C%8D%E5%8A%A1%E7%AB%AF%E4%BD%BF%E7%94%A8-authlib-injector)

唯一的不同点是，传入的 Yggdrasil API 端点为 YggdrasilGateway

## 参考命令

```shell
java "-javaagent:../authlib-injector-1.2.5.jar=http://localhost:8848/api/yggdrasil/" -jar paper.jar

java -javaagent:../authlib-injector-1.2.5.jar=http://localhost:8848/api/yggdrasil/ -jar velocity-3.3.0-SNAPSHOT-400.jar
```
