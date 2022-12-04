import './SuccessMessage.css';

export default function SuccessMessage({ message, updateProfile }) {
  return (
    <p className={`success-message ${updateProfile && 'success-message__visible'} `}>{message}</p>
  );
}


