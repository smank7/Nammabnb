import router  from './bookingreservationroutes.js';
export default (app) => {
    app.use('/booking', router);
}