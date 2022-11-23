import './Error.css';

export default function Error({ error, isValid }) {
  return (
    <p className="error">{!isValid && error}</p>
  );
}

