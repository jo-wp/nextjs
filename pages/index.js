import Layout from '../components/layout'
import { useSession } from 'next-auth/client'
import HomeConnected from '../components/home'
import HomeDisconnected from '../components/home'
export default function Home() {
  const [session] = useSession();
  return (
    <div>
      <Layout page={'HOME'}>
        {session && (
          <>
          <HomeConnected/>
          </>
        )}
        {!session &&(
          <>
          <HomeDisconnected/>
          </>
        )}
      </Layout>
    </div>
  )
}
