function ErrorMessage({ message }) {
  return (
    <section className="status-card error-card" role="alert">
      <span className="error-icon" aria-hidden="true">
        !
      </span>

      <div>
        <h2>Weather unavailable</h2>
        <p>{message}</p>
      </div>
    </section>
  );
}

export default ErrorMessage;