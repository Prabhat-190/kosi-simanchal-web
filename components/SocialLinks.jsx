import React from 'react';

const links = [
  { id: 1, icon: 'uil uil-facebook-f', url: 'https://www.facebook.com/' },
  { id: 2, icon: 'uil uil-linkedin', url: 'https://www.linkedin.com/' },
  { id: 3, icon: 'uil uil-twitter', url: 'https://www.twitter.com/' }
];

const SocialLinks = ({ className = 'nav social mt-4' }) => {
  return (
    <nav className={className}>
      {links.map(({ id, icon, url }) => (
        <a key={id} href={url} className="shadow" target="_blank" rel="noopener noreferrer">
          <i className={`${icon} fs-30 rounded bg-white shadow-sm p-1`} style={{color: '#ffb300'}} />
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;
