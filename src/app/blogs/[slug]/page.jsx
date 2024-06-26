import React from 'react';

const DetailsPage = ({params}) => {
const {title,description} = blogs.find((blog)=> blog.slug == params.slug);
    return (
        <div className='h-screen'>
            <h5>{title}</h5>
            <h3>{description}</h3>
        </div>
    );
};

const blogs =[
    {
      "slug": "the-ultimate-guide-to-travel-hacking",
      "title": "The Ultimate Guide to Travel Hacking",
      "description": "Learn how to travel the world on a budget with these top travel hacking tips."
    },
    {
      "slug": "10-delicious-vegan-recipes",
      "title": "10 Delicious Vegan Recipes",
      "description": "Explore our collection of mouth-watering vegan recipes that will satisfy your taste buds."
    },
    {
      "slug": "mastering-remote-work",
      "title": "Mastering Remote Work",
      "description": "Discover strategies to stay productive and maintain work-life balance while working from home."
    },
    {
      "slug": "beginner-s-guide-to-investing",
      "title": "Beginner's Guide to Investing",
      "description": "Get started with investing with this comprehensive guide tailored for beginners."
    },
    {
      "slug": "top-10-healthy-habits",
      "title": "Top 10 Healthy Habits",
      "description": "Incorporate these healthy habits into your daily routine for a better lifestyle."
    },
    {
      "slug": "exploring-hidden-gems-in-europe",
      "title": "Exploring Hidden Gems in Europe",
      "description": "Uncover the lesser-known destinations in Europe that are worth a visit."
    },
    {
      "slug": "how-to-build-a-successful-blog",
      "title": "How to Build a Successful Blog",
      "description": "Follow our step-by-step guide to create and grow a successful blog from scratch."
    },
    {
      "slug": "essential-skills-for-freelancers",
      "title": "Essential Skills for Freelancers",
      "description": "Enhance your freelancing career with these must-have skills and tips."
    },
    {
      "slug": "home-decor-trends-2024",
      "title": "Home Decor Trends 2024",
      "description": "Stay ahead of the curve with the latest home decor trends for the coming year."
    },
    {
      "slug": "mindfulness-meditation-for-beginners",
      "title": "Mindfulness Meditation for Beginners",
      "description": "Start your journey into mindfulness with this beginner-friendly meditation guide."
    }
  ]

export default DetailsPage;