import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Nav, StyledHeader, Back } from "../styles/Header";

export default function Header() {
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
    </Nav>
  );
}
