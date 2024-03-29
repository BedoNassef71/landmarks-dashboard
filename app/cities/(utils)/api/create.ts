import { City } from '@/app/cities/(utils)/types/city.type'
import { CITIES_URL } from '@/app/cities/(utils)/constants'
import { getAccessToken } from '@/app/(auth)/(utils)/helpers/auth.helper'

export async function createCity(name: string): Promise<City | null> {
  const cityData: City = { name }
  const response: Response = await fetch(CITIES_URL,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getAccessToken()}`
      },
      body: JSON.stringify(cityData)
    })
  if (response.ok) {
    return response.json()
  }else{
    return null;
  }
}