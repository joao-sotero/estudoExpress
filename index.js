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
    const {id}  = request.params; //aqui pegamos nosso ID //req.params são dados que vem pela URL
    const {title, owner} = request.body; // retornando uma nova informação
    // Aqui usamos o ginindex para percorrer todo o array atras do id
    // findIndex vai percorrer todos os projetos e todas vez que ele percorrer na variavel project
    // caso ela satisfeita e retorna true, ela vai me retornar o id que estou passando (project => project.id ===id)
 const projectIndex = projects.findIndex(project => project.id ===id);
 if(projectIndex < 0){
     return response.status(400).json({error: 'projeto não foi encontrado'});
 }
 //agora que tenho indice vou cirar uma nova informação do porjeto
 const project = {
     id, 
     title,
     owner,
 }
 projects[projectIndex] = project
 return response.json(project);
} );

app.delete('/projects/:id', (resquest, response) =>{
    const {id} = resquest.params;
    const projectIndex = projects.findIndex(project => project.id ===id);
 if(projectIndex < 0){
     return response.status(400).json({error: 'projeto não foi encontrado'});
 }
    projects.splice(projectIndex, 1);
    return response.status(204).send();
} )


app.listen(3000, () =>{
    console.log('servidor rodando!');
})