// '
// use client'


async function getData() {
  return {items: []}
}

export default async function BlogPage() {
  const data = await getData()
  const items = data && data.items ? [...data.items] : []
  return <main>
  <h1>hello world</h1>
  <p> Posts:</p>
  {items && items.map((item, idx) => {
    return <li key={`post-${idx}`}>{item.title}</li>
  })}
</main>
}
