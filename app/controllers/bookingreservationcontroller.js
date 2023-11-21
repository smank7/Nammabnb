import * as bookingreservationservices from '../services/bookingreservationservices.js';
import { setResponse, setErrorResponse } from './responsehandler.js';
export const find = async (request, response) => {
    try {
        const params = {...request.query};
        const bookingreservation = await bookingreservationservices.search(params);
        response.status(200)
        .json(bookingreservation);
    } catch (err) {
         response.status(500)
              .json ({
                  code: "ServiceError",
                  message: "Error occured while processing your request."
              })
    }
}

export const post = async (request, response) =>
{
     try {
       const newbooking = {...request.body};
       const booking = await bookingreservationservices.save(newbooking);
       setResponse(booking, response);
     } 
     catch(err)
     {
       setErrorResponse(err, response);
     }
}

export const get = async (request, response)=> {
 try{
   const id = request.params.id;
   const booking = await bookingreservationservices.findById(id);
   setResponse(booking, response);
 }
 catch(err){
   setErrorResponse(err, response);
 }
}

export const put = async (request, response)=> {
 try{
   const id = request.params.id;
   const updatedbooking = {...request.body};
   const booking = await bookingreservationservices.update(updatedbooking, id);
   setResponse(booking, response);
 }
 catch(err){
   setErrorResponse(err, response);
 }
}

export const remove = async (request, response)=> {
 try{
   const id = request.params.id;
   const booking = await bookingreservationservices.remove(id);
   setResponse(booking, response);
 }
 catch(err){
   setErrorResponse(err, response);
 }
}



