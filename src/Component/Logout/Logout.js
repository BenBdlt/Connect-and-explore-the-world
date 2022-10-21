import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, logout } from "../../firebase";
import "./Logout.css";

function Logout() {
    const [user, loading, error] = useAuthState(auth);
  
    useEffect(() => {
        if (loading) return;
    }, [user, loading]);

    return (
        <div className="logout">
            <button
              className="login__btn"
              onClick={() => logout()}
            >
              Se déconnecter
            </button>
        </div>
    );
}

export default Logout;