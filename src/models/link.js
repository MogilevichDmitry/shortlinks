import mongoose from 'mongoose';
import User from './user';

const Schema = mongoose.Schema;

const LinkSchema = Schema({
    initialLink: { type: String, ref: 'User' },
    shortLink: { type: String, ref: 'User' },
    author: String,
    description: String,
    tags: Array,
    clickCount: { type: Number, default: 0 }
});

export default mongoose.model('Link', LinkSchema);




