# 默认管理员账号登入

默认管理员账户和密码均为 `admin`,
在第一次登入之后应该立即前往 `个人 > 个人设置` 重置密码，
重置密码后账户的已有身份凭证将会失效，需要手动刷新页面重新登入。


## 忘记密码?

执行此 SQL 将密码重设为 `admin`

```sql
UPDATE users SET
    password = 0x32E4F1BA74C5506A3576594C14B1BC77430479741E7032050D11AE906F628ECA0D5F6C52C5E5BD908B15AFE6DF456A598FC3B984FC5286AEFA149246C3B34041,
    passwordSalt = 0x65383135633232322D323530662D343562612D613334662D656137393138623532303430,
    active = 1
    WHERE username = 'admin';
```

