import './App.css'
import useFetch from './useFetch'
import NewYork from "./assets/newyork.jpg"
function App() {
  // myhook
  const { data: products, loading, error } = useFetch('/products')
  if (loading)
    return (
      <h1 style={{ textAlign: 'center', fontSize: "3rem", padding: `10rem` }}>
        Loading...</h1>
    );
  if (error) console.log(error)

  return (
    <>
      <div className='App'>
        {!loading && products.map((item) =>
          <div className='card' key={item.id}>
            <img width={200} height={200} src={NewYork} alt="img-1" />
            <p>{item.title}</p>
            <h1>$ {item.price}</h1>
          </div>)
        }
      </div>
    </>
  )
}

export default App;

