# 部署至公网

基于 YggdrasilGateway 采用 WebCLI 进行访问和操作, 此处将提供几种部署至公网服务器的方法

## 单次配置部署

:::info
如果您只需要使用 YggdrasilGateway 的基础功能, 并且不再需要修改 YggdrasilGateway 的设置, 您可以使用此部署方法.
:::

1. 在本地环境中安装 YggdrasilGateway 和对应的数据库
2. 配置好 YggdrasilGateway 的配置
3. 导出数据库数据
4. 在服务器安装 YggdrasilGateway, 并将 host 改为 `127.0.0.1` 或开启防火墙
5. 导入数据库
6. 验证可用性

## 反向代理

:::warning
您需要使用 HTTPS 来增强访问 YggdrasilGateway 的安全性。具体的配置方法请自行搜索。<br/>
如果不使用 HTTPS，您可能遭遇中间人攻击。
:::

:::info
YggdrasilGateway 目前不支持将页面挂载到子集目录。
:::


### Nginx

```
server {
    ...
    location / {
        proxy_pass http://localhost:15333;
        proxy_set_header Connection $http_connection;
        proxy_set_header Upgrade $http_upgrade;
    }
}
```


### Apache HTTPD

```
<VirtualHost *:80>
    ...
    ProxyPreserveHost On
    ProxyRequests off
    AllowEncodedSlashes NoDecode
    ProxyPass / http://localhost:15333/ nocanon
</VirtualHost>
```

### Caddy

```
yg.example.com {
    reverse_proxy localhost:15333
}
```
