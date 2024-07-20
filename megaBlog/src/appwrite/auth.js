import {Client , Account , ID } from "appwrite"
import Confi from '../confi/conf.js'
class AuthService{
    client = new Client()
    account 
    constructor(){
        this.client.
        setEndpoint(Confi.url) 
            .setProject(Confi.project_id);  
            this.account = new Account(this.client); 
    }
    async create({username , password , name}){
        try{
           const userAccount =  await this.account.create(ID.unique() , username , password , name)
            if(userAccount){
                return login(username , password)
            }else{
                return  userAccount
            }

        }catch(error){
            console.log(error);
        }
    }
    async login(username , password){
        try{
      return await this.account.createEmailPasswordSession(username , password)}
      catch(error){
        console.log("error : " , error )
      }
    }
    async getCurrentUser(){
        try{
            return await this.account.get()
        }catch(error){
            console.log(error)
        }
        return null 
    }
    async logout(){
        try{
           await this.account.deleteSessions()
        }catch(error){
            console.log(error);
        }
    }

}
const authService = new AuthService()
export default authService
//+++++++++++++++++++++++++++++++++++++++++++++=
