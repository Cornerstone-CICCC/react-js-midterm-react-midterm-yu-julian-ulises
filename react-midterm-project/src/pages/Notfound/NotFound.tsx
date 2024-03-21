import './NotFound.css'

const NotFound = () => {
  return (
    <>
      <div className="vh-100 d-flex justify-content-center align-items-center flex-column">
        <h1 className="display-1">404</h1>
        <p className="fs-3">Not Found</p>
        <p>The page you are looking for does not exist.</p>
      </div>
    </>
  )
}

export default NotFound