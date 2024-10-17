import Link from 'next/link';
import './globals.css'; // Ensure CSS file is imported for the animation

const HomePage = () => {
  const countries = ['Pakistan', 'India', 'China', 'USA', 'Canada'];

  return (
    <div>
      <h1>Country List</h1>
      <ul>
        {countries.map((country) => (
          <li key={country}>
            <Link href={`/countries/${country.toLowerCase()}`}>
              <span className="blinking">{country}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;