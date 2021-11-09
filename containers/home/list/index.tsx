import { FC, useState } from 'react'
import { Ul, RemoveButton, ListItem, Input, SubmitButton, Form } from './styled'

type Props = {
  tags: string[]
  onAdd: (tag: string) => void
  onRemove: (tag: string) => void
}

export const List: FC<Props> = ({ tags, onRemove, onAdd }) => {
  const [inputValue, setInputValue] = useState('')

  const handleFormSubmit = () => {
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

      <Ul>
        {tags.map((tag, i) => (
          <ListItem key={i}>
            {tag}

            <RemoveButton
              aria-label="Remove"
              title="Click to remove this item"
              onClick={() => onRemove(tag)}
            />
          </ListItem>
        ))}
      </Ul>
    </div>
  )
}
