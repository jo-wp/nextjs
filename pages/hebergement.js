import Layout from '../components/layout'
import Hebergementcomponent from '../components/hebergement/data'
import { useSession } from 'next-auth/client'
function Hebergement ({donnees}){
    const [session] = useSession()
  return(
    <div>
      <Layout page={'HOME'}>
        {session && (
          <>
            <Hebergementcomponent donnees={donnees}/>
          </>
        )}
      </Layout>
    </div>
  )  
}

export const getStaticProps = async () => {
  const res = await fetch ('https://devwarehouse.ddns.net/bo-redpanda/data.js')
  const donnees = await res.json()
  return {
    props: {
      donnees,
    },
  }
}
export default Hebergement