// capa controladores: traductor HTTP lee req llama el servicio y genera una respuesta res

const servicio= require('../services/tareas.service');

async function listar(req,res){
    res.status(200).json(await servicio.listar());
}

async function obtener(req,res){
    const id=Number(req.params.id);
    res.status(200).json(await servicio.obtener(req.params.id));
}

async function crear (req, res){
    const nueva=await servicio.crear(req.body.titulo);
    res.status(201).json(nueva);
}

async function actualizar (req,res){
   const id=Number(req.params.id);
    res.status(200).json(await servicio.actualizar(id,req.body));
}

async function eliminar (req,res){
    await servicio.eliminar(Number(req.params.id));
    res.status(204).send()
}
module.exports={listar,obtener,crear,actualizar,eliminar}