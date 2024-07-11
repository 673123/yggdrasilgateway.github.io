# 使用 Docker 安装

## Docker Compose

```yaml
services:
  mariadb:
    image: mariadb
    restart: always
    environment:
      MARIADB_ROOT_PASSWORD: gateway
      MARIADB_USER: gateway
      MARIADB_DATABASE: gateway
      MARIADB_PASSWORD: gateway
    volumes:
      - ./mysql-storage:/var/lib/mysql
  gateway:
    image: karlatemp/yggdrasil-gateway:nightly
    restart: always
    environment:
      DATABASE_MYSQL_JDBC: "jdbc:mysql://mariadb:3306/gateway"
      DATABASE_MYSQL_USERNAME: gateway
      DATABASE_MYSQL_PASSWORD: gateway
      HTTP_SERVER_HOST: "0.0.0.0"
    ports:
      - 15333:8080
    depends_on:
      - mariadb
    volumes:
      - ./gateway-data:/app/run
```


## 更新

```shell
# 拉取最新版本的 docker 镜像
docker compose pull
# 重启服务
docker compose up -d
```
