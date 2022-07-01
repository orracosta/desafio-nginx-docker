# Desafio Nginx, Node.js e MySQL - FullCycle

O desafio consiste em apresentar uma mensagem na tela utilizando nginx com node.js.

Quando uma chamada for feita a aplicação, esta deverá salvar o registro de um nome no banco de dados.
Em seguida, a página deverá apresentar a mensagem `Full Cycle Rocks!`, logo abaixo uma lista com os registros do banco.

Nota: A página deverá ser construída em node mas será acessada pelo nginx através de um proxy reverso!

---

### Para rodar a aplicação utilize o docker-compose.

```
docker-compose up -d
```

Dentro de alguns instantes a aplicação estará no ar.

---

### Para acessar, digite o seguinte endereço no navegador:

[http://localhost:8080/](http://localhost:8080/)

---

OBS: caso apresente erro 502, aguarde mais alguns segundos e atualize a página.
