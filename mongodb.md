mongodb.md

#Anotações sobre o Mongodb

No mongodb documentos são o equivalente de registros e collections são o equivalente de tabelas, comparando com bancos SQL.

Para iniciar o servidor via terminal:

```sh
$ mongod --port 27017 --dbpath=./data
```

Para realizar acesso via shell:

```sh
$ mongo
```

Para mostrar o banco que você está utilizando:

```sh
$ db
```

Para pedir ajudar:
```sh
$ help
```

Para alternar em bancos diferentes, ou criar um banco novo use:

```sh
$ use <database>
$ use node-angular
```

If you want to check your databases list, use the command show dbs.

```sh
$ show dbs
```

Your created database (mydb) is not present in list. To display database, you need to insert at least one document into it.

```sh
$ db.movie.insert({"name":"tutorials point"})
$ show dbs
local      0.78125GB
mydb       0.23012GB
test       0.23012GB
```