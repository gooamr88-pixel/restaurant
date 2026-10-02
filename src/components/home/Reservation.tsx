import { IoCalendarClearOutline, IoChevronDown, IoPersonOutline, IoTimeOutline } from "react-icons/io5";
import Button from "@/components/ui/Button";
import { reservationOptions } from "@/data/home";
import { contact, hours } from "@/data/site";

export default function Reservation() {
  return (
    <section className="reservation" id="reservation" aria-label="reservation">
      <div className="container">
        <div className="form reservation-form bg-black-10">
          <form className="form-left">
            <h2 className="headline-1 text-center">Online Reservation</h2>

            <p className="form-text text-center">
              Booking request <a href={contact.bookingPhone.href} className="link">{contact.bookingPhone.label}</a>{" "}
              or fill out the order form
            </p>

            <div className="input-wrapper">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                aria-label="Your Name"
                autoComplete="off"
                className="input-field"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                aria-label="Phone Number"
                autoComplete="off"
                className="input-field"
              />
            </div>

            <div className="input-wrapper">
              <div className="icon-wrapper">
                <IoPersonOutline className="ion-icon" aria-hidden="true" />

                <select name="person" aria-label="Number of persons" className="input-field">
                  {reservationOptions.persons.map((option) => (
                    <option value={option.value} key={option.value}>{option.label}</option>
                  ))}
                </select>

                <IoChevronDown className="ion-icon" aria-hidden="true" />
              </div>

              <div className="icon-wrapper">
                <IoCalendarClearOutline className="ion-icon" aria-hidden="true" />

                <input type="date" name="reservation-date" aria-label="Reservation date" className="input-field" />

                <IoChevronDown className="ion-icon" aria-hidden="true" />
              </div>

              <div className="icon-wrapper">
                <IoTimeOutline className="ion-icon" aria-hidden="true" />

                <select name="time" aria-label="Reservation time" className="input-field">
                  {reservationOptions.times.map((option) => (
                    <option value={option.value} key={option.value}>{option.label}</option>
                  ))}
                </select>

                <IoChevronDown className="ion-icon" aria-hidden="true" />
              </div>
            </div>

            <textarea
              name="message"
              placeholder="Message"
              aria-label="Message"
              autoComplete="off"
              className="input-field"
            ></textarea>

            <Button type="submit" variant="secondary">Book A Table</Button>
          </form>

          <div className="form-right text-center" style={{ backgroundImage: "url('/images/form-pattern.png')" }}>
            <h2 className="headline-1 text-center">Contact Us</h2>

            <p className="contact-label">Booking Request</p>

            <a href={contact.bookingPhone.href} className="body-1 contact-number hover-underline">
              {contact.bookingPhone.label}
            </a>

            <div className="separator"></div>

            <p className="contact-label">Location</p>

            <address className="body-4">
              {contact.addressLines[0]} <br />
              {contact.addressLines[1]}
            </address>

            <p className="contact-label">Lunch Time</p>

            <p className="body-4">
              {hours.lunch[0]} <br />
              {hours.lunch[1]}
            </p>

            <p className="contact-label">Dinner Time</p>

            <p className="body-4">
              {hours.dinner[0]} <br />
              {hours.dinner[1]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
