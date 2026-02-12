
import "./Popup.js"

export default function Popup({ msg, colorText }) {
  if (!msg) return null; 
  return (
    <div isvisible="false">
      <div className="popupBox">
        <p className="popupText" style={{color: colorText}}>{msg}</p>
      </div>
    </div>
  );
}