// Testimonial data
const testimonials = [
    {
        text: "Be genuine in your assessment, and provide constructive feedback to benefit both potential customers and the company providing the product or service.",
        name: "Jacqueline Miller",
        position: "Brainrots needs to be stopped",
        avatar: "img/sixth-slide-images/n-word-lol.png"
    },
    {
        text: "This service has transformed our business operations completely. Highly recommend!",
        name: "John Doe",
        position: "CTO of 67 shitness",
        avatar: "img/sixth-slide-images/avatar.png"
    },
    {
        text: "Outstanding quality and support. Our team couldn't be happier with the results.",
        name: "Jane Smith",
        position: "Founder of SigmaStartup",
        avatar: "img/sixth-slide-images/avatar.png"
    }
];

testimonials.forEach((testimonial) => {
    if (testimonial.text.length > 90) {
        testimonial.statusClass = 'testimonial--long';
    } else {
        testimonial.statusClass = 'testimonial--short';
    }
});

let currentTestimonial = 0;

function updateTestimonial() {
    const testimonial = testimonials[currentTestimonial];
    const card = document.querySelector('.testimonial__card');

    document.querySelector('.testimonial__text').textContent = testimonial.text;
    document.querySelector('.testimonial__name').textContent = testimonial.name;
    document.querySelector('.testimonial__position').textContent = testimonial.position;
    document.querySelector('.testimonial__avatar').src = testimonial.avatar;

    card.classList.toggle('testimonial--long', testimonial.statusClass === 'testimonial--long');
    card.classList.toggle('testimonial--short', testimonial.statusClass === 'testimonial--short');
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
}

document.addEventListener('DOMContentLoaded', updateTestimonial);
