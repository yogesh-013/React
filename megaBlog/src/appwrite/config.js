import Confi from '../confi/conf.js'
import {Client , Databases , Storage , ID , Query} from 'appwrite'
export class Service {
   client = new Client()
   databases; 
   bucket;
   constructor(){
    this.client
    .setEndpoint(Confi.url)
    .setProject(Confi.project_id) ;
    this.databases = new Databases(this.client)
    this.bucket  = new Storage(this.client)
   }
   async createPost({slug , title, content, featuredImage, status, userId}){
    try {
        return await this.databases.createDocument(
            Confi.database_id,
            Confi.collection_id,
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
            Confi.database_id,
            Confi.collection_id,
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
            Confi.database_id,
            Confi.collection_id,
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
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
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
            Confi.database_id,
            Confi.collection_id,
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
            Confi.bucket_id,
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
            Confi.bucket_id,
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
        Confi.bucket_id,
        fileId
    )
}

}
const service = new Service()
export default service 