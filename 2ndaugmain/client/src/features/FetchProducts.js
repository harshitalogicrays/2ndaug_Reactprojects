export const FetchProduct = async()=>{
    try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/products`)
        const data =  await res.json()
        return data
    }
      catch (err) {console.log(err) } 
}