import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

const BASE_URL = 'http://localhost:3030/jsonstore/advanced/articles/';

export default function ArticleDetails() {
    const [article, setArticle] = useState({});
    const navigate = useNavigate();
    const { articleId } = useParams();

    useEffect(() => {
        fetch(`${BASE_URL}/details/${articleId}`)
            .then(response => {
                if (response.status === 204) {
                    navigate('/article-not-found');
                    return;
                }

                return response.json();
            })
            .then(
                result => setArticle(result)
            );
    }, []);

    return (
        <div className="p-20">
            <p className="text-base font-semibold leading-7 text-indigo-600">Article</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{article.title}</h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
                {article.content}
            </p>
        </div>
    )
}
