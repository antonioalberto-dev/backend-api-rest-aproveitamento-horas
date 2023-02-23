<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Descrição

API de Sistema de Aproveitamento de Horas Acadêmicas utilizando [Nest](https://github.com/nestjs/nest) framework com integração ao MongoDB.

---
## Instalação

```bash
$ npm install
```
---
## Utilizando a API

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

---

## Endpoints

- 🟢 GET: http://localhost:3000/alunos (lista de todos alunos)
- 🔵 POST: http://localhost:3000/alunos (cadastrar aluno)
~~~json
// conteudo do body da requisição
{
	"nome": "Fulano de Tal",
	"email": "fulano@email.com",
	"matricula": "123456",
	"senha": "123456", //minimo 6 digitos
	"atividades": [
		{
			"ppc": 2020,
			"modalidade": "PESQUISA",
			"tipo": "participação em evento",
			"horasAtividade": 4,
			"descricao": "SNCT 2022"
		},
		{
			"ppc": 2020,
			"modalidade": "EXTENSÃO",
			"tipo": "participação em evento",
			"horasAtividade": 4,
			"descricao": "SMF 2022"
		}
	]
}
~~~
- 🟠 PATCH: http://localhost:3000/alunos/{id} (atualizar dados de aluno)
~~~json
// conteudo do body da requisição
{
	"nome": "Fulano de Tal",
	"email": "fulano@email.com",
	"matricula": "123456",
	"senha": "123456", //minimo 6 digitos
	"atividades": [
		{
			"ppc": 2020,
			"modalidade": "PESQUISA",
			"tipo": "participação em evento",
			"horasAtividade": 4,
			"descricao": "SNCT 2022"
		},
		{
			"ppc": 2020,
			"modalidade": "EXTENSÃO",
			"tipo": "participação em evento",
			"horasAtividade": 4,
			"descricao": "SMF 2022"
		}
	]
}
~~~
- 🔴 DELETE: http://localhost:3000/alunos/{id} (remover rigistro do aluno)
