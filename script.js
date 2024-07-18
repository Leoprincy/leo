document.addEventListener('DOMContentLoaded', function() {
    const featuredServices = [
        { title: 'Day-care', description: 'Professional care for your dogs during the day.', imgSrc:"images/daycare.jpeg", link: 'file:///C:/Users/MANIKYA%20KALYAN/dog%20website/daycare.html' },
        { title: 'Shop', description: 'All the items your dog needs.', imgSrc: "images/pharmacy.jpeg", link: 'file:///C:/Users/MANIKYA%20KALYAN/dog%20website/shop.html' },
        { title: 'Grooming', description: 'Professional grooming services.', imgSrc: "images/grooming.jpeg", link: 'file:///C:/Users/MANIKYA%20KALYAN/dog%20website/grooming.html' },
        { title: 'Training', description: 'Expert training for your dogs.', imgSrc: "images/training.jpeg", link: 'file:///C:/Users/MANIKYA%20KALYAN/dog%20website/training.html' }
    ];

    const serviceList = document.querySelector('.service-list');

    featuredServices.forEach(service => {
        const serviceElement = document.createElement('div');
        serviceElement.classList.add('service-item');
        
        serviceElement.innerHTML = `
            <a href="${service.link}">
                <img src="${service.imgSrc}" alt="${service.title}">
                <div class="service-info">
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                </div>
            </a>
        `;

        serviceList.appendChild(serviceElement);
    });
});
