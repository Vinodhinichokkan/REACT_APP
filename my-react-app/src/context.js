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


function Layout() {
  return (
    <div>
      <Profile />
    </div>
  );
}


const user = {
  name: 'Vino',
  age: 20,
  email: 'cvinodhini19992@gmail.com',
  location: 'India'
};
