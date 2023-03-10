import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'

interface Request {
  title: string
  price: string
  img: string
  amount: number
}

interface RequestContextType {
  request: Request[]
  handleAmount: (amount: number, img: string) => void
  handleDelete: (img: string) => void
  handleDeleteRequests: () => void
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
  const [State, setState] = useState(false)
  const [request, dispatch] = useReducer(
    (state: Request[], action: any) => {
      if (action.type === 'handleAmount') {
        if (State === false) {
          setState(true)
        } else {
          setState(false)
        }
        state.map((item) => {
          if (item.img === action.payload.img) {
            const State = item
            State.amount = action.payload.amount
            item = State
            return item
          } else {
            return item
          }
        })
      }
      if (action.type === 'handleDelete') {
        const requests = state.filter((item) => item.img !== action.payload.img)
        return requests
      }

      if (action.type === 'handleDeleteRequests') {
        return []
      }

      if (action.type === 'handleNewRequest') {
        return [...state, action.payload.newCoffee]
      }

      return state
    },
    [],
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffe-delivery: request.state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      } else {
        return []
      }
    },
  )

  useEffect(() => {
    const requestJSON = JSON.stringify(request)
    localStorage.setItem('@coffe-delivery: request.state-1.0.0', requestJSON)
  }, [request, State])

  function handleAmount(amount: number, img: string) {
    dispatch({ type: 'handleAmount', payload: { amount, img } })
  }

  function handleDelete(img: string) {
    dispatch({ type: 'handleDelete', payload: { img } })
  }

  function handleDeleteRequests() {
    dispatch({ type: 'handleDeleteRequests' })
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
    dispatch({ type: 'handleNewRequest', payload: { newCoffee } })
  }
  return (
    <RequestContext.Provider
      value={{
        handleNewRequest,
        request,
        handleAmount,
        handleDelete,
        handleDeleteRequests,
      }}
    >
      {children}
    </RequestContext.Provider>
  )
}
