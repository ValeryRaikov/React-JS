export default function formatAddress(addressObject) {
    const country = addressObject.country;
    const city = addressObject.city;
    const street = addressObject.street;
    const streetNumber = addressObject.streetNumber;

    return `${country}, ${city}, ${street} ${streetNumber}`;
}