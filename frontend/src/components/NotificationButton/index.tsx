import icon from "../../assets/notification-icon.svg"
import './styles.css'

function NotificationButton() {
    return(
        <div className="dsmeta-red-btn">
            <img src={icon} alt="notificar" />
        </div> 
    )
  }
  
  export default NotificationButton
  