import BRModel from "../models/bookingreservation.js"
export const search = async (params = {}) => {
    const reserves = await BRModel.find(params).exec();
    return reserves;
}
//using a exec function returns a promise
export const save = async (newbooking) => {
   const reserve = new BRModel(newbooking);
   return await reserve.save();
}
export const find = async (id) => {
    const booking = await BRModel.findById(id).exec();
    return booking;
}

export const update = async (updatedCourse, id) => {
    const booking = await BRModel.findByIdAndUpdate(id, updatedCourse).exec();
    return booking;
}
export const remove = async (id) => {
    return await BRModel.findByIdAndDelete(id).exec();
}