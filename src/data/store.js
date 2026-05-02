let posts = [
    {
        id: 1,
        title: "Welcome to HubConnect!",
        body: "Your backend is now powering this 🚀",
        author: "Stephen Mwai",
        createdAt: new Date().toISOString(),
        likes: 5
    }
];

let nextId = 2;

module.exports = {
    posts,
    nextId
};