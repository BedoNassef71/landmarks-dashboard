import { User, UserResponse } from '@/app/(auth)/(utils)/types/user.type'
import { AUTH_URL } from '@/app/(auth)/(utils)/constants'

export const signUpUser = async (user: User):Promise<UserResponse|null> => {

  const response: Response = await fetch(`${AUTH_URL}/register`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    })

  if (response.ok) {
    return response.json()
  } else {
    return null;
  }
}