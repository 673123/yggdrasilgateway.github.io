# 通过软件包安装

1. 从 [Releases](https://github.com/YggdrasilGateway/YggdrasilGateway/releases) 下载构造包
2. 安装 Java 21 或以上版本的 JDK 并记录位置
3. 解压构造包到任意想要安装的位置
4. 创建 `startup.sh`, 并写入以下内容
    ```shell
    JAVA_HOME=/path/to/java21 ; ./YggdrasilGateway-xxx/bin/gateway-bootstrap com.kasukusakura.yggdrasilgateway.bootstrap.Main
    ```
5. 使用 `sh startup.sh` 等待 Gateway 生成配置文件
6. 编辑 `config` 目录下的配置文件，并重新执行等待服务启动。

