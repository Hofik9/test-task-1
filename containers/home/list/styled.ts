import styled from 'styled-components'
import { styleReset } from '~/styles/misc'

export const Ul = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 1em;
  margin: 1rem 0;
  border-radius: 4rem;
  border: 1px solid transparent;
  transition: border-color 0.4s, background-color 0.4s;
  box-shadow: 0 5px 14px rgba(0, 0, 0, 0.05), 0 2px 6px rgba(0, 0, 0, 0.05);
  background-color: white;

  &::before {
    content: '';
    display: block;
    width: 1.4rem;
    height: 1.4rem;
    margin-right: 1em;
    border-radius: 50%;
    box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.2);
    flex-shrink: 0;
    background-color: #fcfcfc;
  }

  span {
    display: flex;
    align-self: stretch;
    align-items: center;
    border-left: 1px dashed #ddd;
    transition: border-color 0.4s;
    padding: 1em 0 1em 1em;
  }

  &:hover,
  &:focus {
    border-color: #ff8888;
    background-color: #fff5f5;

    span {
      border-left-color: #ffbbbb;
    }
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
  padding: 1em 4em 1em 1.2em;
  margin: 1rem 0;
  border-radius: 4rem;
  width: 100%;
  border: 1px solid black;
  background-color: #f3f3f3;
`

export const SubmitButton = styled.button`
  ${styleReset}
  position: absolute;
  top: 0;
  right: 0;
  padding: 1.1em 1.4em;
  margin: 1.5em 0.8em;
  font-size: 1.2rem;
  color: white;
  border-radius: 4rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: black;

  &:hover,
  &:focus {
    background-color: #444;
  }
`

export const EmptyMessage = styled.p`
  padding: 1em;
  color: #777;
  font-size: 1.4rem;
  border: 1px solid #bbb;
  text-align: center;
  border-radius: 4px;
`
