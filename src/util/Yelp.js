const apiKey = '-Okz5S81fC3AcoCIMThczv1mHklEQ89vB3iQmChIEKQjHe05k5ZNMTH0B6P_RT3bpzta-uavkApFqPF8l39R8xRZKAylSrMJpZ6aZQrjsCgI4GPQnfuZeWk1BhM2XXYx';
const Yelp = {
search(term, location, sortBy) {
  return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      })
    .then(response => {return response.json();})
    .then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => ({
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
              url: business.url,
              distance: business.distance
            }));
          }
        });
      }
    };

  export default Yelp;
