import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Country = {
  __typename?: 'Country';
  name?: Maybe<Scalars['String']>;
  topLevelDomain: Array<Maybe<Scalars['String']>>;
  alpha2Code: Scalars['String'];
  alpha3Code: Scalars['String'];
  callingCodes: Array<Scalars['String']>;
  captial: Scalars['String'];
  altSpellings: Array<Scalars['String']>;
  region: Scalars['String'];
  subregion: Scalars['String'];
  population?: Maybe<Scalars['Int']>;
  latlng: Array<Scalars['Int']>;
  demonym: Scalars['String'];
  area: Scalars['Int'];
  gini: Scalars['Float'];
  timezones: Array<Scalars['String']>;
  borders: Array<Scalars['String']>;
  nativeName: Scalars['String'];
  numericCode: Scalars['String'];
  currencies?: Maybe<Array<Maybe<Currency>>>;
  languages: Array<Language>;
  translations: Translations;
  flag: Scalars['String'];
  regionalBlocs: Array<RegionalBloc>;
  cioc: Scalars['String'];
};

export type Currency = {
  __typename?: 'Currency';
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  changeRateToSEK: Scalars['String'];
};

export type Language = {
  __typename?: 'Language';
  iso639_1: Scalars['String'];
  iso639_2: Scalars['String'];
  name: Scalars['String'];
  nativeName: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** a Query to get name of all countries  */
  getAllCountries: Array<Country>;
  getCountry: Array<Country>;
};


export type QueryGetCountryArgs = {
  term: Scalars['String'];
};

export type RegionalBloc = {
  __typename?: 'RegionalBloc';
  acronym: Scalars['String'];
  name: Scalars['String'];
  otherAcronyms?: Maybe<Array<Maybe<Scalars['String']>>>;
  otherNames?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Translations = {
  __typename?: 'Translations';
  de: Scalars['String'];
  es: Scalars['String'];
  fr: Scalars['String'];
  ja: Scalars['String'];
  it: Scalars['String'];
  br: Scalars['String'];
  nl: Scalars['String'];
  hr: Scalars['String'];
  fa: Scalars['String'];
};


export type GetAllCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCountriesQuery = (
  { __typename?: 'Query' }
  & { getAllCountries: Array<(
    { __typename?: 'Country' }
    & Pick<Country, 'name'>
  )> }
);


export const GetAllCountriesDocument = gql`
    query GetAllCountries {
  getAllCountries {
    name
  }
}
    `;

/**
 * __useGetAllCountriesQuery__
 *
 * To run a query within a React component, call `useGetAllCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCountriesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCountriesQuery, GetAllCountriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCountriesQuery, GetAllCountriesQueryVariables>(GetAllCountriesDocument, options);
      }
export function useGetAllCountriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCountriesQuery, GetAllCountriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCountriesQuery, GetAllCountriesQueryVariables>(GetAllCountriesDocument, options);
        }
export type GetAllCountriesQueryHookResult = ReturnType<typeof useGetAllCountriesQuery>;
export type GetAllCountriesLazyQueryHookResult = ReturnType<typeof useGetAllCountriesLazyQuery>;
export type GetAllCountriesQueryResult = Apollo.QueryResult<GetAllCountriesQuery, GetAllCountriesQueryVariables>;