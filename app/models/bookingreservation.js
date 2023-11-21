import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const BookingreservationSchema = new Schema({
    stay_id: {
       type: String,
       required: true
    },
    price: {
        type: String,
        required: true
    },
    days: {
            type: String,
            required: true
    }
},
{
    versionKey:  false
});

const BRModel = mongoose.model('bookingresveration', BookingreservationSchema);
export default BRModel;