import { useState, useEffect } from "react";

const baseUrl = 'http://localhost:3030/jsonstore/advanced/profiles';

export default function Developers() {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl);

        if (!response.ok) {
          throw new Error('Error fetching data!');
        }

        const result = await response.json();

        setDevelopers(Object.values(result));
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {developers.map((developer) => (
        <li key={developer._id} className="flex justify-between gap-x-6 py-5 p-10 pt-20">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{developer.username}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{developer.email}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">Age: {developer.age}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
