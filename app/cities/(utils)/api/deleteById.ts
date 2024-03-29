import { CITIES_URL } from '@/app/cities/(utils)/constants'
import { requestHeaders } from '@/app/(auth)/(utils)/helpers/auth.helper'

export async function deleteCity(id: string): Promise<any> {
  const response: Response = await fetch(`${CITIES_URL}/${id}`,
    {
      method: 'DELETE',
      headers: requestHeaders
    })
  if (response.ok) {
    return response.json()
  } else {
    return null
  }
}