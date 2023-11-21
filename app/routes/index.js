import propertyRouter from './property-routes.js'


export default (app) => {
    app.use('/property', propertyRouter);
}