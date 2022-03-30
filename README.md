## FinAPI - Financeira

### Requisitos

- [X] Deve ser possível criar uma conta  
- [X] Deve ser possível buscar o extrato báncario do cliente
- [] Deve ser possível realizar um depósito
- [] Deve ser possível realizar um saque
- [] Deve ser possível buscar o extrato bancário do cliente por data
- [] Deve ser possível atualizar dados da conta do cliente
- [] Deve ser possível obter dados da conta do cliente
- [] Deve ser possível deletar uma conta

### Regras de negócio

<<<<<<< HEAD
- [X] Não deve ser possível cadastrar uma conta com CPF já existente
- [] Não deve ser possível fazer depósito em uma conta não existente
- [X] Não deve ser possível buscar extrato em uma conta não existente
=======
- [] Não deve ser possível cadastrar uma conta com CPF já existente
- [] Não deve ser possível fazer depósito em uma conta não existente
- [] Não deve ser possível buscar extrato em uma conta não existente
>>>>>>> 5ebfa421800d87f85c54f42816d161b688278f80
- [] Não deve ser possível fazer saque em uma conta não existente
- [] Não deve ser possível excluir uma conta não existente
- [] Não deve ser possível fazer saque quando o saldo for insuficiente.


## Dados(Cliente):
 -  CPF - String
 -  Name - String
 -  id - uuid
 -  Statement - [ ]
