import Property from '../models/property.js';

export const search = async (params ={}) => {
    const properties = await Property.find(params).exec();
    return properties;
}

export const searchSpecificProperty = async (id = {}) => {
    const property = await Property.findById(id).exec();
    return property;
}

export const save = async (newProperty) => {
    const property = new  Property(newProperty);
    return property.save();
}

export const update = async (updatedProperty,id) => {
    const property = await Property.findByIdAndUpdate(id,updatedProperty).exec();
    return property;
}

export const remove  = async (id) => {
 return await Property.findByIdAndDelete(id).exec();
}