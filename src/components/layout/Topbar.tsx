import { IoCallOutline, IoLocationOutline, IoMailOutline, IoTimeOutline } from "react-icons/io5";
import { contact, hours } from "@/data/site";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="container">
        <address className="topbar-item">
          <div className="icon">
            <IoLocationOutline className="ion-icon" aria-hidden="true" />
          </div>

          <span className="span">{contact.address}</span>
        </address>

        <div className="separator"></div>

        <div className="topbar-item item-2">
          <div className="icon">
            <IoTimeOutline className="ion-icon" aria-hidden="true" />
          </div>

          <span className="span">{hours.topbar}</span>
        </div>

        <a href={contact.topbarPhone.href} className="topbar-item link">
          <div className="icon">
            <IoCallOutline className="ion-icon" aria-hidden="true" />
          </div>

          <span className="span">{contact.topbarPhone.label}</span>
        </a>

        <div className="separator"></div>

        <a href={contact.topbarEmail.href} className="topbar-item link">
          <div className="icon">
            <IoMailOutline className="ion-icon" aria-hidden="true" />
          </div>

          <span className="span">{contact.topbarEmail.label}</span>
        </a>
      </div>
    </div>
  );
}
