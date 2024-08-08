import React, { useEffect } from "react";
import "./Contacts.scss";

const Contacts = () => {
  useEffect(() => {
    // Intersection Observer for fade-in animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.1, // elements must be at least 10% visible
      }
    );

    document.querySelectorAll(".fade-in").forEach((el) => {
      observer.observe(el);
    });

    // Clean up the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const contactFormButton = event.target.querySelector("button");
    contactFormButton.classList.add("sending");
    contactFormButton.textContent = "Отправка...";

    // Simulate form submission
    setTimeout(() => {
      contactFormButton.classList.remove("sending");
      contactFormButton.textContent = "Отправить";
      // Real form submission code should be placed here
    }, 3000);
  };

  return (
    <div>
      <div className="contacts-container">
        <h2>Связаться с нами</h2>
        <div className="contact-info">
          <div className="contact-info-item">
            <h3>Адрес:</h3>
            <p>
              <strong>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=366701,+Чеченская+Респ.,+Серноводский+м.р-н,+Серноводское+с.п.,+с.+Серноводское,+ул.+Курортная,+Д.+23А"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  366701, Чеченская Респ., Серноводский м.р-н, Серноводское
                  с.п., с. Серноводское, ул. Курортная, Д. 23А
                </a>
              </strong>
            </p>
          </div>
          <div className="contact-info-item">
            <h3>Телефон:</h3>
            <p>
              <strong>
                <a href="tel:+78712294642">(871) 229-46-42</a>
              </strong>
            </p>
          </div>
          <div className="contact-info-item">
            <h3>Email:</h3>
            <p>
              <strong>
                <a href="mailto:info@companyname.com">info@companyname.com</a>
              </strong>
            </p>
          </div>
          <div className="contact-info-item">
            <h3>Рабочие часы:</h3>
            <p>Пн-Пт: 9:00 - 18:00</p>
          </div>
        </div>
      </div>

      <div>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ваше имя"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ваш Email"
            required
          />
          <textarea
            id="message"
            name="message"
            placeholder="Ваше сообщение"
            required
          ></textarea>
          <button className="contacts-button" type="submit">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
