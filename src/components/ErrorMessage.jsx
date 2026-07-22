function ErrorMessage({ message }) {
  return (
    <div role="alert">
      <h2>Weather unavailable</h2>
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;