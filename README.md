# agenda

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
