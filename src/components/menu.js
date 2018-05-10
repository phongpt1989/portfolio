import React from 'react'
import Link from 'gatsby-link'

const FooterLinks = [
  {
    name: 'Github',
    link: 'https://github.com/phongpt1989'
  },{
    name: 'LinkedIn',
    link: 'http://linkedin.com/in/francispham89'
  },{
    name: 'Gmail',
    link: 'fransicpham89@gmail.com'
  }
]

const Menu = () => (
  <div style={{
    background: '#f4f4f4',
    paddingTop: '10px'
  }}>
  <h3>Where to find me</h3>
  <ul className="social">
    {FooterLinks.map(link => (
      <li>
        <a target = "_blank" rel = "nofollow" className = {link.name.toLowerCase()} href = {link.link}>
          <i className = "text">{link.name}</i>
        </a>
      </li>
    ))}
  </ul>
  </div>
)

export default Menu
