import { api } from '@repo/services'
import { Header } from '@repo/ui'
import { Container } from '../components/Container'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import AddProductModal from '../components/AddProductModal'
import type { ProductType } from '../types'
import { ProductsTable } from '../components/Table'



function App() {

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: async (): Promise<ProductType[]> => {
      return api.get("/products").then(res => res.data)
    }
  })

  if (isLoading) return <h1>Loading...</h1>
  if (isError) return <pre>{JSON.stringify(error)}</pre>


  return (
    <>
      <Header title='PRODUCTS manager' />
      <Container>
        {data && <ProductsTable products={data} />}
        <AddProductModal />
      </Container>
    </>
  )
}

export default App
