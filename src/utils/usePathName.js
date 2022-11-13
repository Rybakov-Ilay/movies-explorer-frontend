import { useLocation } from 'react-router-dom';

export default function usePathName() {
  const location = useLocation();
  return location.pathname;
}
