import mongoose from "mongoose";

const Schema = mongoose.Schema;

const linkSchema = new Schema({
    initialLink: String,
    shortLink: String,
    date: { type: Date, default: Date.now },
    //visitCount: Number,
    //description: String,
    //tags: Array,
});

const Link = mongoose.model('Link', linkSchema);

export default Link;
