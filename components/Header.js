import Link from 'next/link';

export default function Header () {

  return(
    <header>
      <nav>
        <ul>
          <li>
            <Link>
              <a>All Transaction</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
};