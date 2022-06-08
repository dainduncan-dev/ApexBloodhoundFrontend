function UserInfo({ user }) {
  return (
    <div className="user-greeting">
      <h1 className="greeting-text">Welcome, {user.username}</h1>
    </div>
  );
}

export default UserInfo;
