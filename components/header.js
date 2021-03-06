import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiUser } from "react-icons/bi";

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
            <h1>Tottenham Hotspur Jerseys!</h1>
          </a>
        </Link>
      </StyledHeader>
      <AuthLinks>
        {user ? (
          <Link href="/account">
            <a><BiUser /></a>
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
