const Confi = {
    url : String(import.meta.env.VITE_APPWRITE_URL),
     project_id : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
 collection_id: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
database_id : String(import.meta.env.VITE_APPWRITE_DATABASE_ID) ,  
bucket_id : String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

export default Confi 