import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Nav, StyledHeader, Back, AuthLinks } from "../styles/Header";
import { useAuthContext } from "../context/AuthContext";

export default function Header() {
  const { user } = useAuthContext();
  const router = useRouter();
  const isHome = router.pathname === "/"
  return (
    <Nav>
      {!isHome && <Back onClick={() => router.back()}>Back</Back>}
      <StyledHeader>
        <Link href="/">
          <a>
            <h1>E-Commerce</h1>
          </a>
        </Link>
      </StyledHeader>
      <AuthLinks>
        {user ? (
          <Link href="/acount">
            <a>{user.email}</a>
          </Link>
        ) : (
          <Link href="/login">
            <a>Login</a>
          </Link>
        )}
      </AuthLinks>
    </Nav>
  );
}
