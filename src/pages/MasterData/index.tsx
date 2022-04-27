import { Spin } from 'antd'
import SimpleBar from 'simplebar-react'
import styled from 'styled-components'
import { useGetPokemonsQuery } from '../../apis'

const MasterData = () => {
  const { data, isLoading } = useGetPokemonsQuery({
    staleTime: 10000,
  })

  return (
    <div className="relative h-96 flex flex-col items-center pb-8">
      <h1 className="text-xl font-bold">Pokemons</h1>
      <div className="flex-1 overflow-auto">
        <SimpleBar className="h-full w-24 bg-gray-700 rounded">
          <div className="flex-1 flex flex-col p-2">
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

export default MasterData

const Item = styled.a.attrs(() => ({
  className: 'cursor-pointer hover:text-cyan-200',
}))``
