import { QueryKey, UseQueryOptions } from 'react-query'

export type QueryOptions<
  TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
  TError = unknown,
  TData = TQueryFnData
> = Omit<
  UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  'queryKey' | 'queryFn'
>
