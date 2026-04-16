import CreatePost from "../components/CreatePost";

const CreatePostPage = () => {
  return (
    <div className="pt-20">
      <h2 className="text-6xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
        Create New Post
      </h2>
      <CreatePost />
    </div>
  );
};

export default CreatePostPage;
