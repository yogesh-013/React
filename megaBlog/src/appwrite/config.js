import Confi from '../confi/conf.js'
import {Client , Databases , Storage , ID , Query} from 'appwrite'
export class Service {
   client = new Client()
   databases; 
   bucket;
   constructor(){
    this.client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66a1fac80037a784b11e') ;
    this.databases = new Databases(this.client)
    this.bucket  = new Storage(this.client)
   }
   async createPost({slug , title, content, featuredImage, status, userId}){
    try {
        return await this.databases.createDocument(
            '66a245360014bdf00344',
            '66a2458c000673a93c17',
            slug , 
            {
                title,
                content,
                featuredImage,
                status,
                userId,
            }
        )
    } catch (error) {
        console.log("Appwrite serive :: createPost :: error", error);
    }
}
async updatePost(slug, {title, content, featuredImage, status}){
    try {
        return await this.databases.updateDocument(
            '66a245360014bdf00344',
            '66a2458c000673a93c17',
            slug,
            {
                title,
                content,
                featuredImage,
                status,

            }
        )
    } catch (error) {
        console.log("Appwrite serive :: updatePost :: error", error);
    }
}
async deletePost(slug){
    try {
        await this.databases.deleteDocument(
            '66a245360014bdf00344',
            '66a2458c000673a93c17',
            slug
        )
        return true
    } catch (error) {
        console.log("Appwrite serive :: deletePost :: error", error);
        return false
    }
}
async getPost(slug){
    try {
        return await this.databases.getDocument(
            '66a245360014bdf00344',
            '66a2458c000673a93c17',
            slug
        
        )
    } catch (error) {
        console.log("Appwrite serive :: getPost :: error", error);
        return false
    }
}
async getPosts(queries = [Query.equal("status", "active")]){
    try {
        return await this.databases.listDocuments(
            '66a245360014bdf00344',
            '66a2458c000673a93c17',
            queries,
            

        )
    } catch (error) {
        console.log("Appwrite serive :: getPosts :: error", error);
        return false
    }
}
//+++++++++++++++++++++++++++++++++++++++++++++FILE-LOAD-SERVICE+++++++++++++++++++++++++++++++++++++++++++++++
async uploadFile(file){
    try {
        return await this.bucket.createFile(
            '66a246e8002fd31c5be0',
            ID.unique(),
            file
        )
    } catch (error) {
        console.log("Appwrite serive :: uploadFile :: error", error);
        return false
    }
}
async deleteFile(fileId){
    try {
        await this.bucket.deleteFile(
            '66a246e8002fd31c5be0',
            fileId
        )
        return true
    } catch (error) {
        console.log("Appwrite serive :: deleteFile :: error", error);
        return false
    }
}
async getFilePreview(fileId){
    return await this.bucket.getFilePreview(
        '66a246e8002fd31c5be0',
        fileId
    )
}

}
const service = new Service()
export default service 