# 玩家数据信息转移

## 导出数据

转至 `Yggdrasil > 玩家信息`, 点击左上角的 `导出数据` 即可下载玩家数据信息。

## 导入数据

同上，点击 `导入数据` 即可导入数据。

## 数据结构

Yggdrasil Gateway 导入导出的数据采用 CSV 格式, 并以 `UTF-8` 进行编码

首行为表头, 有以下字段

- `entry-id` 此记录的 id, 留空由程序自动生成, 可选
- `origin` 来源世界树
- `upstream-name` 上游玩家名, 仅查看用, 实际数据检索采用 `upstream-uuid`
- `upstream-uuid` 上游 UUID, 导入时支持有符号 uuid 和无符号 uuid (如 `00000000-0000-0000-0000-000000000000`)
- `downstream-name` 下发玩家名
- `downstream-uuid` 下发 UUID, 导入时支持有符号 uuid 和无符号 uuid
- `always-permit` 准许通行, `true` 或 `false`


