import { notFound } from 'next/navigation';
import Link from 'next/link'; // Import Link to add back to homepage

const countryData = {
  pakistan: { name: 'Pakistan', population: '220 million', capital: 'Islamabad' },
  india: { name: 'India', population: '1.38 billion', capital: 'New Delhi' },
  china: { name: 'China', population: '1.4 billion', capital: 'Beijing' },
  usa: { name: 'USA', population: '331 million', capital: 'Washington, D.C.' },
  canada: { name: 'Canada', population: '37 million', capital: 'Ottawa' }
};

const CountryPage = ({ params }: { params: { country: string } }) => {
  const countryInfo = countryData[params.country.toLowerCase() as keyof typeof countryData];

  if (!countryInfo) {
    return notFound();
  }

  return (
    <div>
      <h1>{countryInfo.name}</h1>
      <p><strong>Population:</strong> {countryInfo.population}</p>
      <p><strong>Capital:</strong> {countryInfo.capital}</p>

      {/* Add link to go back to the home page */}
      <Link href="/">Back to Home</Link>
    </div>
  );
};

export default CountryPage;