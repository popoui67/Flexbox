"use client"
import { useState , useEffect } from "react"
import { getProviders , signIn } from "next-auth/react"
type Providers ={
    id :string ,
    name :string ,
    type :string ,
    signinUrl: string ,
    calbackUrl :string ,
    signinUrlParams : Record<string , string> | undefined
 
}
type ProviderP = Record<string , Providers>
export const AuthProviders =() =>{
    const [provider , setProviders] = useState<ProviderP | null>(null)
useEffect(() =>{
const fechProviders= async () =>{
    const res : any = await getProviders()
    setProviders(res)
}
fechProviders()
},[])

   if (provider){
    return (
    <div>
        {Object.values(provider).map((itm :Providers , ind) =>(
<button key={ind} onClick ={() => signIn} >{itm.id}</button>
    ))}
    </div>
          )
   }
   
}
export default AuthProviders