import { Navigate, Outlet } from 'react-router-dom'
import { useState, useEffect, createContext } from 'react'
import { supabase } from '../../store/store'

const SessionConText = createContext(null);

const ProtectedRoutes = ({ children} ) => {
    const [ session, setSession] = useState(null);

    useEffect(() => {
        const subscription = supabase.auth.onAuthStateChange(
            (event, session) => {
                if(event === 'SIGNED_OUT') {
                    setSession(null);
                } else if (session) {
                    setSession(session);
                }
            }
        )

        return () => {
            if(subscription && typeof subscription.unsubscribe === 'function') {
                subscription.unsubscribe()
            }
        }
    }, []);
    console.log(session);
    if(!session) {
        return <Navigate to ="/entvy_blog_vite/admin" replace />;
    } else {
        return <Navigate to ="/entvy_blog_vite/admin/page" />;
    }
}

export default ProtectedRoutes;