import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import user from 'App/Models/user'

export default class AuthController {

    public async login({ response, auth, request }: HttpContextContract) {
        try {
            const email = request.input('email')
            const password = request.input('password')

            try {
                const token = await auth.use('api').attempt(email, password)
                response.ok({message: "Login Exitoso", token: token, username: auth.user?.username})
            }
            catch {
                return response.badRequest('Invalid credentials')
            }
        }
        catch (error) {
            response.internalServerError({ message: "error" })
        }
    }

    public async register({ request, response, auth }: HttpContextContract) {
        try{
        const password = request.input('password')

        const userp = await user.create(request.all())

        const token= await auth.use('api').attempt(userp.email, password)

        response.ok({ message: "registrado" , token: token, username: auth.user?.username})
        }
        catch(error)
        {
            response.badRequest({message: "error"})
        }
    }
}
