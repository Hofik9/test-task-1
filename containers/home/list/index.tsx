import { FC, FormEvent, useState } from 'react'
import {
  Ul,
  RemoveButton,
  ListItem,
  Input,
  SubmitButton,
  Form,
  EmptyMessage,
} from './styled'

type Props = {
  tags: string[]
  onAdd: (tag: string) => void
  onRemove: (tag: string) => void
}

export const List: FC<Props> = ({ tags, onRemove, onAdd }) => {
  const [inputValue, setInputValue] = useState('')

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    const trimmedValue = inputValue.trim()

    if (trimmedValue) {
      setInputValue('')
      onAdd(trimmedValue)
    }
  }

  return (
    <div>
      <Form onSubmit={handleFormSubmit}>
        <Input
          type="text"
          onChange={evt => setInputValue(evt.target.value)}
          value={inputValue}
          placeholder="Type a new tag name here"
        />
        <SubmitButton>Add</SubmitButton>
      </Form>

      {tags.length > 0 ? (
        <Ul>
          {tags.map((tag, i) => (
            <ListItem key={i}>
              <span>{tag}</span>

              <RemoveButton
                aria-label="Remove"
                title="Click to remove this item"
                onClick={() => onRemove(tag)}
              />
            </ListItem>
          ))}
        </Ul>
      ) : (
        <EmptyMessage>No tags have been defined.</EmptyMessage>
      )}
    </div>
  )
}
