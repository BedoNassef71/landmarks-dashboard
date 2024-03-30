import { CITIES_URL } from '@/app/cities/(utils)/constants'
import { City } from '@/app/cities/(utils)/types/city.type'
import { getAccessToken } from '@/app/(auth)/(utils)/helpers/auth.helper'

export async function createCity(name: string): Promise<City | null> {
  try {
    const cityData: City = { name }

    const token: string = getAccessToken()

    const response = await fetch(CITIES_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(cityData)
    })

    if (response.ok) {
      return await response.json()
    } else {
      throw new Error('Failed to create city')
    }
  } catch (error) {
    console.error('Error creating city:', error)
    return null
  }
}