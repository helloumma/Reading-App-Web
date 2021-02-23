import React from 'react'
import Page from '../Pages/Page'
import CSS from 'csstype'

interface Props {
  onChange(e: any): void 
}

const input: CSS.Properties = {
  width: '100%',
  height: '5rem',
  color: '#2938fa',
  backgroundColor: '#f1a5d0',
  border: 'none', 
  fontSize: '2rem',
  margin: '0'
};

const Search = ({ onChange }: Props) => 
  <Page variant="regular">
      <input 
        type='search'
        placeholder='Search...'
        className='search'
        onChange={onChange}
        style={input}
      />
  </Page>

export default Search

