import styled from 'styled-components'
import { styleReset } from '~/styles/misc'

export const Ul = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`

export const ListItem = styled.li`
  display: block;
  position: relative;
  padding: 1em;
  margin: 1rem 0;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: border-color 0.4s, background-color 0.4s;
  box-shadow: 0 5px 14px rgba(0, 0, 0, 0.05), 0 2px 6px rgba(0, 0, 0, 0.05);
  background-color: white;

  &:hover,
  &:focus {
    border-color: #ff8888;
    background-color: #fff5f5;
  }
`

export const RemoveButton = styled.button`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  appearance: none;
  border-radius: 0;
  border: none;
  cursor: pointer;
  background: none;
`
export const Form = styled.form`
  position: relative;
`

export const Input = styled.input`
  ${styleReset}
  padding: 1em 4em 1em 1em;
  margin: 1rem 0;
  border-radius: 4px;
  width: 100%;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.08);
  background-color: #f8f8f8;
`

export const SubmitButton = styled.button`
  ${styleReset}
  position: absolute;
  top: 0;
  right: 0;
  padding: 1em;
  margin: 1.5em 0.8em;
  font-size: 1.2rem;
  color: white;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  background-color: black;
`
