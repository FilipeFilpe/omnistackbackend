# RocketBox
Projeto de uma API em NodeJS.

## Usando a API:

### Box  
##### **POST**  
 Criação de uma box para compartilhamento de arquivos.

**method:** POST  
**url:** https://filipefilpeomnistackbackend.herokuapp.com/boxes  
**corpo em JSON:**
``{
	"title": "Box de Exemplo"
}``

##### **GET**  
 Mostra a box com o *id* informado na *url*.

**method:** GET  
**url:** https://filipefilpeomnistackbackend.herokuapp.com/boxes/:id 

### File  
##### **POST**  
 Envio de arquivos para a box com o *id* informado.

**method:** POST  
**url:** https://filipefilpeomnistackbackend.herokuapp.com/boxes/:id/files  
**corpo:** *form-data* com *key*:file e no *value* enviar um arquivo.

### Ferramentas para usar e testar a API
Você pode usar o [**Isomnia**](https://insomnia.rest/) ou o [**Postman**](https://www.getpostman.com/) para testar essa API.
