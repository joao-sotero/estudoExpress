const { request } = require('express');
const express = require('express');
const {v4: uuidv4} = require('uuid');
const app = express();


app.use(express.json());

const projects =[];

//GET : BUSCAR INFORMAÇÕES DO BACK-END 
//POST: CRIAR UMA INFRMAÇÃO NO BACK END
//PUT/PATCH: ALTERAR UMA INFORMAÇÃO NO BACK-END
//DELETE: DELETAR INFORMAÇÕES DO BACK-END
/*
* Queery params == Vamos usar principalemtne para filtros e paginação
* Route params ==  identificar recursos na hora de atualizar ou deletar
* Request body == RESTO DO CONTEUDO NA HORA DE CRIAR OU EDITAR UM RECURSO
*
*/

app.get('/projects', (request, response) => {
   // const{title, owner} = request.query;

    // console.log(title);
    // console.log(owner)

    return response.json(projects);
})

app.post('/projects', (request, response)=>{
    const {title, owner} = request.body;

    const  project = {id: uuidv4(), title, owner};

    projects.push(project); // esse push vai jogar a criação do nosso projeto opara o nosso array

    return response.json(project) // sempre retornar o projeto recem criado e nunca exibit a lista completa
})

app.put('/projects/:id', (request, response) =>{
    const params = request.params;

    console.log(params);

    return response.json([
        'Projeto 50',
        'projeto 2',
        'projeto 3',
        'projeto 4',
        'projeto 5'
    ])
} )

app.delete('/projects/:id', (resquest, response) =>{
    return response.json([
        'Projeto 50',
        'projeto 2',
    ])
} )

app.listen(3000, () =>{
    console.log('servidor rodando!');
})