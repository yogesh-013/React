import {Client , Account , ID } from 'appwrite'
import Confi from '../confi/conf.js'
export class AuthService{
    client = new Client();
    account ;
    constructor(){
        this.client
        .setEndpoint('https://cloud.appwrite.io/v1') 
            .setProject('66a1fac80037a784b11e');  
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
    async login({username , password}){
        try{
      return await this.account.createEmailSession(username , password)}
      catch(error){
        console.log("error : " , error )
      }
    }
    
    async getCurrentUser() {
        try {
            const a =  await this.account.get();
            if(a){
                return a ; 
            }
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
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
