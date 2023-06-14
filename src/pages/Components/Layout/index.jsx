import PropTypes from 'prop-types' //se instalo (npm i prop-types --save )

export const Layout = ({children}) => {
    Layout.propTypes = {
        children: PropTypes.node.isRequired,
      } // solo para quitar el error de no (‘children’ is missing in props validation)
  return (
    <div className="flex flex-col items-center mt-20">
      {children}
    </div>
  )    
}