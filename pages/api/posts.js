//pages/api/posts.js
import mongoose from 'mongoose';

// MongoDB connection URI from environment variable
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("Missing MONGODB_URI in .env.local");
}


// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define post schema
const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    file: String,
    likes: { type: Number, default: 0 },
    comments: [{ text: String }]
});

// Define Post model
const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

// Export API handler
export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const posts = await Post.find();
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                error: 'Internal Server Error'
            });
        }
    } else if (req.method === 'POST') {
        try {
            const { title, content, file } = req.body;

            if (!title || !content) {
                return res.status(400).json({
                    error: 'Title and content are required fields'
                });
            }

            const post = new Post({ title, content, file });
            await post.save();
            res.status(201).json(post);
        } catch (error) {
            console.error('Error creating post:', error);
            res.status(500).json({
                error: 'Internal Server Error'
            });
        }
    } else if (req.method === 'PUT') {
        try {
            const { id, action } = req.body;

            if (!id || !action) {
                return res.status(400).json({
                    error: 'Post ID and action are required'
                });
            }

            let updatedPost;

            if (action === 'like') {
                updatedPost = await Post.findByIdAndUpdate(id,
                    { $inc: { likes: 1 } }, { new: true });
            } else if (action === 'comment') {
                const { text } = req.body;
                if (!text) {
                    return res.status(400).json({
                        error: 'Comment text is required'
                    });
                }
                updatedPost = await Post.findByIdAndUpdate(id,
                    { $push: { comments: { text } } }, { new: true });
            } else {
                return res.status(400).json({
                    error: 'Invalid action'
                });
            }

            res.status(200).json(updatedPost);
        } catch (error) {
            console.error('Error updating post:', error);
            res.status(500).json({
                error: 'Internal Server Error'
            });
        }
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}