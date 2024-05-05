import type { Response, Request } from "express";

interface d {
  x: Response;
  y: Request;
}
export const ro =(x:any)=>{

 console.log('x-y', {x})
}