import {api} from '@repo/services'
import { Header} from '@repo/ui'
import {Container} from '../components/Container'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

type ProductType = {
  id: number | string
  name: string
  price: number
  quantity: number
}


function App() {
  const queryClient = useQueryClient()

  const {data, isError, isLoading, error}= useQuery({
    queryKey: ["products"],
    queryFn: async ():Promise<ProductType[]> => {
      return api.get("/products").then(res => res.data)
    }
  })
  console.log(data)
  // const newPostMutation = useMutation({
  //   mutationFn: (title: string) => {
  //     return title
  //     })
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({queryKey: ["products"]})
  //   }
  // })
  
  if(isLoading) return <h1>Loading...</h1>
  if(isError) return <pre>{JSON.stringify(error)}</pre>


  return (
    <>
      <Header title='PRODUCTS manager'/>
      <Container>
        <ul className='w-[100%]'>
          {data?.map((product) => (
              <li 
                key={product.id}
                className='w-100'
              >
                {product.name}
                {product.price}
                {product.quantity}
              </li>
            ))}
        </ul>
           {/* <button 
          onClick={()=> newPostMutation.mutate("New Post")}
          disabled={newPostMutation.isPending}
        >
          Add New</button> */}
      </Container>
    </>
  )
}

export default App
