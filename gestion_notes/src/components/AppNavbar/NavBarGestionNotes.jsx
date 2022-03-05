
export default function NavBarGestionNotes(props){

return (
   <div className="card" style={{
            width: '80%',
            height: '70px',
            marginLeft: '8%',
            marginTop: '-25px',
            boxShadow: '10px 5px 5px #9e9b9b'
          }}>
          <h4 className='my-auto mx-4 text-center text-success'>{props.nom}</h4>
        </div>
)

}
 