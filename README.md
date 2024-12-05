# Rest API Example

## Descripción
Ejemplo de API que gestiona tareas

## Requisitos

- Node.js

## Instalación

1. Abre un terminal en la carpeta `rest-api-example`.
2. Ejecuta el siguiente comando para instalar las dependencias:

```bash
npm install
```
3. Ejecuta el siguiente comando para levantar la API REST:

```bash
npm start
```

La API se levantará en http://localhost:3000


## Datos
Las tareas se guardan en .\data\tasks.json

## Uso API
**GET /api/tasks:** Lista todas las tareas.
* Response: 200
```json
[
    {
        "id": 1,
        "title": "Aprender Node.js",
        "completed": false
    }
]
```
**GET /api/tasks/:id:** Obtiene una tarea por su ID.
* Response: 200
```json
{
    "id": id,
	"title": "nombreTarea",
	"completed": true|false
}
```
**POST /api/tasks:** Crea una nueva tarea.
* Request:
```json
{
	"title": "nombreTarea",
	"completed": true|false
}
```
* Response: 201
```json
{
    "id": id,
	"title": "nombreTarea",
	"completed": true|false
}
```
**PUT /api/tasks/:id:** Actualiza una tarea por su ID.
* Request:
```json
{
	"title": "nombreTarea",
	"completed": true|false
}
```
* Response: 201
```json
{
    "id": id,
	"title": "nombreTareaActualizada",
	"completed": true|false (actualizado)
}
```
**DELETE /api/tasks/:id:** Elimina una tarea por su ID.
* Response: 204