import { QueryFunction, useQuery } from 'react-query'
import { AxiosResponse } from 'axios'
import request from '../request'
import { QueryOptions } from '../types'

export type Pokemon = {
  name: string
  url: string
}

type PokemonQueryKey = {
  get: ['getPokemons']
  getOne: ['getPokemonDetail', string]
}

type PokemonResponse = {
  get: AxiosResponse<{ results: [Pokemon] }>
  getOne: AxiosResponse<Pokemon>
}

type PokemonAPI = {
  get: QueryFunction<PokemonResponse['get'], PokemonQueryKey['get']>
  getOne: QueryFunction<PokemonResponse['getOne'], PokemonQueryKey['getOne']>
}

const pokemon: PokemonAPI = {
  get: () => request.get('pokemon'),
  getOne: ({ queryKey: [, name] }) => request.get(`pokemon/${name}`),
}

export const useGetPokemonsQuery = (
  options?: QueryOptions<PokemonResponse['get'], PokemonQueryKey['get']>
) => useQuery(['getPokemons'], pokemon.get, options)

export const useGetOnePokemonQuery = (
  name: string,
  options?: QueryOptions<PokemonResponse['getOne'], PokemonQueryKey['getOne']>
) => useQuery(['getPokemonDetail', name], pokemon.getOne, options)
