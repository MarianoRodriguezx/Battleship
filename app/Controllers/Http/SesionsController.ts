import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Partida from 'App/Models/Models-Mongo/Partida'

export default class SesionsController {
  public async index({ response }: HttpContextContract) {
    try{
      const sesion = await Partida.find({})

      response.ok({message: "Consulta Correcta", data: sesion})
    }
    catch(error)
    {
      response.internalServerError({message: "Ocurrio un error"})
    }
  }

  //public async create({}: HttpContextContract) {}

  public async store({ response, request }: HttpContextContract) {
    try{

      const data = request.all()

      const data1 = await Partida.insertMany(data)

      //const id_sesion = await Partida.find({_id: })

      response.ok({message: "insercion correcta", data: data1})
    }
    catch(error)
    {
      response.badRequest({message: "Ocurrio un error"})
    }
  }

  public async show({ response, params }: HttpContextContract) {
    try{
      const sesion = await Partida.find({_id: params.id})

      response.ok({message: "Todo correcto", data: sesion})
    }
    catch(error)
    {
      response.badRequest({message: "Ocurrio un error"})
    }
  }

  //public async edit({}: HttpContextContract) {}

  public async update({ response, request, params }: HttpContextContract) {
    try{
      await Partida.updateOne({_id: params.id}, 
        {tablero_host: request.input('tablero_host'), 
        tablero_invitado: request.input('tablero_invitado'), 
        turno: request.input('turno')
      })

      response.ok({message: "Actualizacion correcto"})
    }
    catch(error)
    {
      response.badRequest({message: "Ocurrio un error"})
    }
  }

  public async ActGyE({ response, request, params }: HttpContextContract){
    try{
      await Partida.updateOne({_id: params.id}, 
        {ganador: request.input('ganador'), 
        estado: request.input('estado')
      })

      response.ok({message: "Actualizacion correcto"})
    }
    catch(error)
    {
      response.badRequest({message: "Ocurrio un error"})
    }
  }

  public async ActInvitado({ response, request, params }: HttpContextContract)
  {
    try{
      await Partida.updateOne({_id: params.id}, 
        {
          invitado: request.input('invitado')
      })

      response.ok({message: "Actualizacion correcto"})
    }
    catch(error)
    {
      response.badRequest({message: "Ocurrio un error"})
    }
  }

  /* public async setInvitado({ response, request }: HttpContextContract){
    try{
      await Partida.updateOne({_id: request.input('id')}, 
        {
          invitado: request.input('invitado')
      })

      response.ok({message: "Actualizacion correcto"})
    }
  } */

  public async destroy({}: HttpContextContract) {}
}
