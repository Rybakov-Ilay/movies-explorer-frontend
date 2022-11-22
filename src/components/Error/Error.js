import './Error.css';

export default function Error({ error }) {
  return (
    <p className="error">
      {error ? error : ''}
    </p>
  );
}

