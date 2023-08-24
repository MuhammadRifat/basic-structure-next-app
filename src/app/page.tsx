import { setMetaData } from './functions';

export default function Home() {
  setMetaData("my-app", "This is home page");
  return (
    <main>
      <div className='border bg-success text-white p-3'>
        <h1>Hello Next.js</h1>
      </div>
    </main>
  )
}
