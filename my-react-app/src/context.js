const UserContext = React.createContext();

function App() {
  return (
    <UserContext.Provider value={user}>
      <Layout />
    </UserContext.Provider>
  );
}

function Profile() {
  const user = useContext(UserContext);
  return <h1>{user.name}</h1>;
}
