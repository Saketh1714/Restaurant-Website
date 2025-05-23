import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must be min length of 30 characters."],
        maxLength: [30, "First name cannot exceed 30 characters"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name must be of atleast 3 charcaters"],
        maxLength: [30, "Last name cannot exceed 30 characters"],
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "provide a valid email"],
    },
    phone: {
        type: String,
        required: true,
        minlength: [1, "Phone number must contain 11 digits"],
        maxLength: [11, "Phone number must contain 11 digits"],
    },

});

const Reservation = mongoose.model("Reservation", reservationSchema);
export default Reservation; 