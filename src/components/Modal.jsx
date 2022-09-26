import iconoCerrar from '../img/cerrar.svg'

const Modal = ({setModal}) => {

  const ocultarModal = () => {
    setModal(false);
  }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img 
          src={iconoCerrar} 
          alt="cerrar modal" 
          onClick={ocultarModal}
        />
      </div>

      <form>
        <legend>Nuevo Gasto</legend>
      </form>
    </div>
  )
}

export default Modal
