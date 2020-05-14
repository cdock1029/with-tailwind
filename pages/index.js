import Nav from '../components/nav'

export async function getServerSideProps(context) {
  await new Promise(res => setTimeout(res, 300))
  return {
    props: { date: (new Date()).toLocaleDateString() }, // will be passed to the page component as props
  }
}

export default function IndexPage({date}) {
  return (
    <div>
      <Nav />
      <div className="hero">
        <h1 className="title">Next.js + Tailwind CSS</h1>
        <p>Date: {date}</p>
      </div>
    </div>
  )
}
