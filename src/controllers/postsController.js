const store = require('../data/store');

// GET ALL POSTS
const getAllPosts = (req, res) => {
    res.json(store.posts);
};

// GET ONE POST
const getPostById = (req, res) => {
    const post = store.posts.find(p => p.id === parseInt(req.params.id));

    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }

    res.json(post);
};

// CREATE POST
const createPost = (req, res) => {
    const { title, body, author } = req.body;

    if (!title || !body || !author) {
        return res.status(400).json({
            error: 'Title, body, and author are required'
        });
    }

    const newPost = {
        id: store.nextId++,
        title,
        body,
        author,
        createdAt: new Date().toISOString(),
        likes: 0
    };

    store.posts.push(newPost);

    res.status(201).json(newPost);
};

// UPDATE POST
const updatePost = (req, res) => {
    const post = store.posts.find(p => p.id === parseInt(req.params.id));

    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }

    const { title, body } = req.body;

    if (title) post.title = title;
    if (body) post.body = body;

    post.updatedAt = new Date().toISOString();

    res.json(post);
};

// DELETE POST
const deletePost = (req, res) => {
    const index = store.posts.findIndex(p => p.id === parseInt(req.params.id));

    if (index === -1) {
        return res.status(404).json({ error: 'Post not found' });
    }

    store.posts.splice(index, 1);

    res.status(204).send();
};

// LIKE POST
const likePost = (req, res) => {
    const post = store.posts.find(p => p.id === parseInt(req.params.id));

    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }

    post.likes++;

    res.json(post);
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
    likePost
};