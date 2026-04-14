export interface Project {
  id: number
  title: string
  description: string
  mainImage:string|null
  images: string[]|null               
  tools: string[]|null 
  type:string|'Website'              
  languages: string[]|null            
  duration: string|null               
  company?: string|null  
  companyUrl:string|null  
  url:string|null           

  dataFlow?: {
    input: string
    processing: string
    database: string
    output: string
  }
}