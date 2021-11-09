import { useCallback, useEffect, useState } from 'react'
import { Container } from '~/components/container'
import { SEO } from '~/components/seo'
import { List } from './list'
import { Main, Layout } from './styled'

export const Home = () => {
  const [tags, setTags] = useState([])

  useEffect(() => {
    const handleHashChange = () => {
      if (location.hash.startsWith('#tags=')) {
        const parsedTags = location.hash
          .replace('#tags=', '')
          .split(',')
          .map(t => decodeURIComponent(t))
        setTags(parsedTags)
      }
    }

    window.addEventListener('hashchange', handleHashChange)

    // Event listener triggers only when the hash changes,
    // but not during initial load, so we need to call handleHashChange
    // manually when the component mounts
    handleHashChange()

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const handleRemoveTag = useCallback(
    (tag: string) => {
      const tagsString = tags
        .filter(t => t !== tag)
        .map(t => encodeURIComponent(t))
        .join(',')
      location.hash = `#tags=${tagsString}`
    },
    [tags]
  )

  const handleAddTag = useCallback(
    (tag: string) => {
      const tagsString = [tag, ...tags]
        .map(t => encodeURIComponent(t))
        .join(',')
      location.hash = `#tags=${tagsString}`
    },
    [tags]
  )

  return (
    <Main>
      <SEO title="Task 1" />
      <Container>
        <h1>Task 1</h1>

        <Layout>
          {[...Array(3)].map((_, i) => (
            <List
              key={i}
              tags={tags}
              onRemove={handleRemoveTag}
              onAdd={handleAddTag}
            />
          ))}
        </Layout>
      </Container>
    </Main>
  )
}
