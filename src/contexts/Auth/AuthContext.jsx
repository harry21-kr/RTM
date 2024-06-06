import { createClient } from '@supabase/supabase-js';
import { createContext, useEffect, useState } from 'react';
import { VITE_SUPABASE_KEY, VITE_SUPABASE_URL } from '../../config/constants';

const initialValue = {
  session: null,
  supabase: null
};

export const AuthContext = createContext(initialValue);

const supabaseClient = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_KEY);

export default function AuthProvider({ children }) {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription }
    } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return <AuthContext.Provider value={{ session, supabaseClient }}>{children}</AuthContext.Provider>;
}
