import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    imageUrl: { type: String },
    createdAt: { type: Date, default: Date.now },
    mentions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const postModel =  mongoose.model('Post', postSchema);

export default postModel
