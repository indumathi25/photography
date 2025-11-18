interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

const UsersPage = async () => {
  const users = await fetch('https://dummyjson.com/users', {
    next: { revalidate: 10 },
  }).then((res) => res.json());
  const userList = users.users;
  return (
    <>
      <h1>Users Page</h1>
      <ul>
        {userList.map((user: User) => (
          <li key={user.id}>
            {user.firstName} {user.lastName} - {user.email}
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
