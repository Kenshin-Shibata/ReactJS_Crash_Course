import Header from './components/Header'

function App() {
  const name = 'Brand'
  return (
    <div className="App">
      <h1>Hello From React </h1>
        <Header />
      <h2>Hello {name}</h2>
    </div>
  );
}

export default App;
