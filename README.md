# agenda

Criar projeto de setup duplo

- Lado do serviço deve ter Knex, express, morgan
- Deve ser uma agenda de contato (id, nome, endereço e telefone)
- Lado do cliente deve ter Browserify e Angular
- Os dois setups devem ser gerenciados pelo npm
- O BD é de livre escolha, contanto que seja compatível com o knex
- O aplicativo deve ser um CRUD completo com interface web


Comandos úteis:


- npm install knex -g -s
- npm install express -s
- npm install morgan -s
- npm install sqlite3 -s
- npm install browserify -s
- npm install angular -s
- npm install budo -s
- npm install -g nodemon

curl -X POST -H "Content-Type: application/json"  -d '{"nome": "teste", "endereco":"end teste", "telefone":"222222222"}' http://localhost:3000/contatos

curl -X DELETE localhost:3000/contatos/2

curl -X GET localhost:3000/contatos/2
