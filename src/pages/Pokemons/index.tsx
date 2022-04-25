import { useRef } from 'react'
import { useQuery } from 'react-query'
import { Button, Spin } from 'antd'
import { AxiosResponse } from 'axios'
import SimpleBar from 'simplebar-react'
import styled from 'styled-components'
import { axiosInstance } from '../../apis/instance'

type Pokemon = {
  name: string
  url: string
}

const Pokemons = () => {
  const { data, isLoading } = useQuery<AxiosResponse<{ results: [Pokemon] }>>(
    ['getPokemons'],
    () => axiosInstance.get('pokemon')
  )

  const scrollRef = useRef<HTMLElement>()
  const goToTop = () => {
    const curr = scrollRef.current
    if (curr) {
      curr.scrollTop = 0
    }
  }

  return (
    <div className="relative h-screen flex flex-col items-center pb-8">
      <h1 className="text-cyan-200">Pokemons</h1>
      <Button onClick={goToTop}>Top</Button>
      <div className="flex-1 overflow-auto">
        <SimpleBar className="h-full w-48 bg-gray-700 rounded">
          <div className="flex-1 flex flex-col">
            {isLoading && <Spin />}
            {data?.data.results.map(p => (
              <Item key={p.name} href={p.url}>
                {p.name}
              </Item>
            ))}
          </div>
        </SimpleBar>
      </div>
    </div>
  )
}

export default Pokemons

const Item = styled.a.attrs(() => ({
  className: 'cursor-pointer hover:text-cyan-200',
}))``
