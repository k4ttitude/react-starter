import { useQuery } from 'react-query'
import { Spin } from 'antd'
import { AxiosResponse } from 'axios'
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

  return (
    <div>
      <h1 className="text-cyan-200">Pokemons</h1>
      {isLoading && <Spin />}
      <div className="flex flex-col">
        {data?.data.results.map(p => (
          <Item href={p.url}>{p.name}</Item>
        ))}
      </div>
    </div>
  )
}

export default Pokemons

const Item = styled.a.attrs(() => ({
  className: 'cursor-pointer hover:text-cyan-200',
}))``
