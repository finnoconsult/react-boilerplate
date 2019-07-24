import { useContext } from 'react';
// NOTE: __RouterContext is private so the whole solution is deprecated
import { __RouterContext as RouterContext } from 'react-router';

export function useRouter() {
  return useContext(RouterContext);
};

export function useParams() {
  const { match } = useRouter();
  return match.params;
}

export function useLocation() {
  const { location, history } = useRouter();
    
  function goTo(to: string, { replace = false } = {}) {
    if (replace) {
      history.replace(to);
    } else {
      history.push(to);
    }
  }
    
  return {
    ...location,
    goTo
  };
}