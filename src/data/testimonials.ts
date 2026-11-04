export type Testimonial = {
  id: number
  quote: string
  name: string
  role: string
  company: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Tauheed delivered our web platform ahead of schedule with clean code and clear communication. He understood the business goals and turned them into a polished product.",
    name: "Ahmed Khan",
    role: "Founder",
    company: "Startup Client",
  },
  {
    id: 2,
    quote:
      "Working with Tauheed on our React Native app was smooth from day one. He handled AI integrations confidently and kept us updated at every milestone.",
    name: "Sara Malik",
    role: "Product Manager",
    company: "Digital Agency",
  },
  {
    id: 3,
    quote:
      "Professional, reliable, and technically strong. Our e-commerce build went live without drama, and post-launch support was excellent.",
    name: "Bilal Hussain",
    role: "Business Owner",
    company: "Retail Brand",
  },
]
