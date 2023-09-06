import {getServerSession} from "next-auth/next"
import {NextAuthOptions , User } from "next-auth"
import {AdapterUser} from "next-auth/adapters"
import GoooleProvider from "next-auth/providers/google"
import jsonwebtoken from "jsonwebtoken"
import { JWT } from "next-auth/jwt"
import { SessionInterface } from "@/commun.types"
export const authOptions : NextAuthOptions={
    providers:[
        GoooleProvider({
            clientId:"" ,
            clientSecret :''
        } ,)

    ] ,jwt :{
encode :({secret , token}) =>{

} , 
decode :async ({secret , token}) =>{

} ,
    },theme :{
        colorScheme :"light" ,
        logo : "logo.png"
    },
    callbacks :{
        async session ({session}){
return session
        } ,
        async  signIn({user} :{user :AdapterUser | User}) {
             try{
return true
             }
             catch (err : any) {
                console.log(err)
                return false
             }
         }
    }
}
export async function  GetUser () {
    const session = await getServerSession(authOptions) as SessionInterface
    return session
}