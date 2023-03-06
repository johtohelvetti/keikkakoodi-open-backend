import mongoose from "mongoose";

const keikkaSchema = new mongoose.Schema({
    id: {
        type:   Number,
        required: true
    },//id
    desc: {
        type: String,
        readonly: true
    }//desc
}); //keikkaSchema

const Keikka = mongoose.model("Keikka", keikkaSchema);
export { Keikka };