import Head from 'next/head'
import Link from 'next/link'
import { providers,useSession,signIn,signOut} from 'next-auth/client'
export  default  function Layout({children,page}) {
    
    const [session] = useSession();
    const handleSignin = (e) => {
        e.preventDefault()
        signIn()
    }
    const handleSignout = (e) => {
        e.preventDefault()
        signOut()
    }
    return (
      <>
        <Head>
            <title>{page}</title>
        </Head>
        <div className="flex">
            <nav className="w-72 p-2 text-center ">
            <div className="flex flex-col">
            <Link href="/"  >
                <a >
                    Home
                </a>
            </Link>
            <Link href="/hebergement"  >
                <a >
                    Hébergement
                </a>
            </Link>
            <Link href="/sauvegardes"  >
                <a >
                    Sauvegardes
                </a>
            </Link>
            {session && <a href="#" onClick={handleSignout}  className="btn-signout">Se déconnecter</a>} 
            {!session && <a href="#" onClick={handleSignin}  className="btn-signin">Se connecter</a>} 

            </div>
            </nav>
            <main className="flex-1  bg-gray-100 p-2">
                {children}
            </main>
        </div>
      </>
    )
  }
