function LoadingSpinner() {
  return (
    <section className="status-card" role="status">
      <div className="spinner" aria-hidden="true"></div>

      <div>
        <h2>Checking the sky</h2>
        <p>Loading the latest weather conditions...</p>
      </div>
    </section>
  );
}

export default LoadingSpinner;