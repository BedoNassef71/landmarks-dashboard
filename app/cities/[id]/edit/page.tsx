'use client'
import React, { useEffect, useState } from 'react'
import { Tabs, Tab, Input, Button, Card, CardBody } from '@nextui-org/react'
import { EditIcon } from '@nextui-org/shared-icons'
import { findCityById } from '@/app/cities/(utils)/api/findById'
import { City } from '@/app/cities/(utils)/types/city.type'
import { updateCity } from '@/app/cities/(utils)/api/update'

// @ts-ignore
export default function EditCity({ params }) {
  const [name, setName] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const city: City = await findCityById(params.id);
        setName(city.name);
      } catch (error) {
        console.error('Error fetching city data:', error);
      }
    };

    fetchData();
  }, [params.id]);


  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const city:City|null = await updateCity(params.id, name);
    if(city){
      // TODO: improve this
      window.location.href = '/cities';
    }else{
      setErrorMessage("City name is already exists");
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="max-w-full w-[340px] h-[200px]">
        <CardBody className="overflow-hidden">
          <Tabs fullWidth size="md" aria-label="Tabs form">
            <Tab key="city" title="Edit City">
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <Input
                  isRequired
                  label="Name"
                  placeholder="Enter city name"
                  value={name}
                  onChange={handleNameChange}
                  type="text"
                  errorMessage={errorMessage}
                />
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary" type="submit">
                    Update <EditIcon />
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  )
}
