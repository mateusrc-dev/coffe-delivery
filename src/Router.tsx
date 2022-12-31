import { Routes, Route } from 'react-router-dom'
import { Request } from './pages/Request'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path={'/'} element={<Home />} />
        <Route path={'/request'} element={<Request />} />
      </Route>
    </Routes>
  )
}
