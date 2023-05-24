import './CSS/AddComment.css'
import julius from '../Assests/images/avatars/image-juliusomo.png'

const handleSubmit = (e) =>{
  e.preventdefault()
}

function AddComment() {
  return (
    <div className="comment">
      <div className="picture">
        <img src={julius}/>
      </div>
      <input type="text" placeholder='Add a comment...' />
      <div className="send-btn">
        <button style={{background: "black", color: "white"}} onClick={handleSubmit}>Send</button>
      </div>
    </div>
  )
}

export default AddComment