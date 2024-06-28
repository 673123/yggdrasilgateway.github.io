# 安装最新快照

打开 [Actions/build.yml](https://github.com/YggdrasilGateway/YggdrasilGateway/actions/workflows/build.yml?query=event%3Apush)
并选择想要使用的快照版本.

将页面往下拖，可以选择三种快照版本： `docker image`, `Tar 软件包`, `Zip 软件包`

## 加载 Docker 快照

```shell
# 解压 GitHub 压缩
unzip docker-image.zip
# 加载 Docker 镜像
docker image load -i yggdrasilgateway.tar.gz
```

注: 快照版本的镜像为 `yggdrasilgateway` 而不是 `karlatemp/yggdrasil-gateway`，需要将镜像换为 `yggdrasilgateway` 才能使用最新快照。
