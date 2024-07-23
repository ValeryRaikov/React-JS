import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BASE_URL = 'http://localhost:3030/jsonstore/advanced/articles/';

export default function Articles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();
        
        fetch(`${BASE_URL}/list`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error fetching data!');
                }

                return response.json();
            })
            .then(
                result => setArticles(result)
            )
            .catch(err => {
                console.error(err);
            });

        return () => {
            abortController.abort();
        };
    }, []);

    return (
        <ul role="list" className="mt-20 p-20 divide-y divide-gray-100">
            {articles.map((article) => (
                <Link to={`/articles/${article._id}`} key={article._id}>
                    <li className="flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">{article.title}</p>
                            </div>
                        </div>
                    </li>
                </Link>
            ))}
        </ul>
    )
}
