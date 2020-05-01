# graphql-tutorial

## start

to start just run

```
npm start
```

## queries

some queries listed

_findAccountById

```
{
  findAccountById(id :12)
  {
    name
  }
}
```

_listAccounts

```
{
  listAccounts()
  {
    name
  }
}

```

_findAccountsByName

```
{
  findAccountsByName(searchphrase: "ue")
  {
    name
  }
}
```