import { FC } from 'react'
import Head from 'next/head'

type Props = {
  title: string
}

export const SEO: FC<Props> = ({ title }) => (
  <Head>
    <title>{title}</title>
  </Head>
)
