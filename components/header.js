import React from "react";
import Link from "next/link";

import { StyledHeader } from "../styles/Header";

export default function Header() {
  return (
    <div>
      <StyledHeader>
        <Link href="/">
          <a>
            <h1>E-Commerce</h1>
          </a>
        </Link>
      </StyledHeader>
    </div>
  );
}
