import { Request, Response } from 'express'
import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: 'user',
    email: 'user@email.com',
    password: '123456',
    techs: [
      'NodeJs', 'ReactJS', 'ReactNative',
      {title: 'JavaScript', experience: 80}
    ]
  })

  return response.json({ message: 'Hello World' })
}