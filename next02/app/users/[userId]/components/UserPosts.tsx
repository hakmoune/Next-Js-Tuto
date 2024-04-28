type TProps = {
  promise: Promise<IPosts>;
};

async function UserPosts({ promise }: TProps) {
  const posts = await promise;

  return (
    <div>
      {posts.posts.map((post) => (
        <p key={post.id}>
          <strong>{post.title}</strong>
        </p>
      ))}
    </div>
  );
}

export default UserPosts;
