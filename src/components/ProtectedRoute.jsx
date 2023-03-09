
export const ProtectedRoute = ({ children }) => {

  // TODO: check if user is logged in (= user exists in state)
  // TODO: if not logged in: forward to login route

  // if logged in: give access to page (= render given page!)
  return children
}