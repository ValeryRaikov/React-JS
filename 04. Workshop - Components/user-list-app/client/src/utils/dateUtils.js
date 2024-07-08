export default function formatDate(dateString) {
    const datePattern = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }

    const date = new Date(dateString);

    return date.toLocaleDateString('en-US', datePattern);
}