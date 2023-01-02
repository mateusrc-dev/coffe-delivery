import { useState, createContext, ReactNode } from 'react'

interface Request {
  title: string
  price: string
  img: string
  amount: number
}

interface RequestContextType {
  request: Request[]
  handleAmount: (amount: number, img: string) => void
  handleNewRequest: (
    title: string,
    price: string,
    img: string,
    amount: number,
  ) => void
}

export const RequestContext = createContext({} as RequestContextType)

interface RequestContextProviderProps {
  children: ReactNode
}

export function RequestContextProvider({
  children,
}: RequestContextProviderProps) {
  const [request, setRequest] = useState<Request[]>([])

  console.log(request)

  function handleAmount(amount: number, img: string) {
    setRequest(
      request.map((item) => {
        if (item.img === img) {
          return { ...item, amount }
        } else {
          return item
        }
      }),
    )
  }

  function handleNewRequest(
    title: string,
    price: string,
    img: string,
    amount: number,
  ) {
    const newCoffee: Request = {
      title,
      price,
      img,
      amount,
    }
    setRequest((state) => [...state, newCoffee])
  }
  return (
    <RequestContext.Provider
      value={{ handleNewRequest, request, handleAmount }}
    >
      {children}
    </RequestContext.Provider>
  )
}
