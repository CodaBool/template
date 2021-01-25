import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navigation() {
  const router = useRouter()
  
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="w-100">
      <Navbar.Brand onClick={() => router.push('/')}>CodaBool</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link href="/other">
            <div className={`${router.asPath.includes('/other') && 'active'} nav-link`}>Other</div>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}