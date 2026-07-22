import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h2>Get In Touch</h2>
      <p>I am currently open to new opportunities. Whether you have a question or just want to say hi — my inbox is always open!</p>
      <div className="contact-links">
        <a href="mailto:emediong@gmail.com">📧 emediong@gmail.com</a>
        <a href="https://github.com" target="_blank" rel="noreferrer">💻 GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">🔗 LinkedIn</a>
      </div>
    </div>
  );
}

export default Contact;