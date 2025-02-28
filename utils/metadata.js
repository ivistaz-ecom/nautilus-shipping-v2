export function getMetadata(path) {
  const metadataMap = {
    "/about-us/company": {
      title: "Nautilus Ship Management | Leading Ship Managers in India",
      description:
        "With 17 years of expertise, Nautilus Shipping has evolved from a crew management company to a full-service ship management provider. We operate from six global offices, offering technical management, inspections, and commercial services for maritime excellence.",
      imageUrl: "/our-approach/img01.png",
    },
    "/about-us/team": {
      title:
        "Nautilus Shipping Leadership and Team | Experienced Maritime Professionals",
      description:
        "Explore the skilled leadership and dedicated team behind Nautilus Shipping. Meet our maritime experts, who bring decades of experience across various aspects of ship management and maritime services. Discover how our leaders drive innovation and excellence in the shipping industry, mentoring a team committed to upholding the highest standards.",
      imageUrl: "/our-approach/img01.png",
    },
    "/our-approach": {
      title:
        "Experience the 4P Framework in Ship Management | Nautilus Shipping",
      description:
        "Discover the transformative 4P Framework at Nautilus Shipping, designed to enhance your fleet's operational efficiency and profitability. Our strategic approach includes problem-solving agility, performance-based remuneration, profit optimization for ship owners, and strict adherence to Port State Control regulations. Embrace a partnership that aligns with your business goals and drives long-term value, ensuring smooth sailing in dynamic market conditions. Connect with us to see how our tailored solutions can maximize your returns.",
      imageUrl: "/our-approach/img01.png",
    },
    "/careers": {
      title: "Join Our Team | Careers at Nautilus Shipping",
      description:
        "Explore exciting career opportunities at Nautilus Shipping and become part of a team committed to excellence in ship management. Whether you're a seasoned professional or just starting out, discover roles that challenge and reward in a supportive environment. Join us in our mission to lead the maritime industry through innovation, dedication, and a commitment to superior service. Start your journey with Nautilus Shipping today and make a global impact.",
      imageUrl: "/our-approach/img01.png",
    },
    "/contact-us": {
      title: "Contact Nautilus Shipping | Ship Management Companies in India",
      description:
        "Get in touch with Nautilus Shipping, one of the leading ship management companies in India. Whether you need technical ship management services or Nautilus maritime solutions, our team is ready to assist. Visit our offices in Chennai, Mumbai, Bengaluru, Port Blair, Dubai, and Singapore.",
      imageUrl: "/our-approach/img01.png",
    },
    "/fleet": {
      title: "Fleet Management Shipping Company | Nautilus Shipping",
      description:
        "Nautilus Shipping has successfully manned 237 vessels and continues to expand its fleet. As a leading fleet management shipping company, we ensure efficiency, safety, and compliance for bulk carriers, tankers, and specialized vessels. Explore our fleet management solutions today.",
      imageUrl: "/our-approach/img01.png",
    },
    "/resources/events": {
      title: "Past & Upcoming Events | Nautilus Shipping",
      description:
        "Stay updated with the latest events hosted and attended by Nautilus Shipping. Join us to gain insights into the maritime industry, learn from experts, and network with peers. These events are designed to foster professional growth, share industry best practices, and discuss innovative solutions in ship management.",
      imageUrl: "/our-approach/img01.png",
    },
    "/resources/newsletter": {
      title: "Stay Informed with the Nautilus Shipping Newsletter",
      description:
        "Subscribe to the Nautilus Newsletter for exclusive insights into the maritime industry. Each edition is packed with expert opinions, innovative strategies, the latest news, and real-world case studies from Nautilus Shipping. Whether you’re a seasoned seafarer or a maritime enthusiast, our newsletter brings you firsthand accounts and essential updates to keep you informed and connected.",
      imageUrl: "/our-approach/img01.png",
    },
    "/resources/news-and-insights": {
      title: "Latest News and Insights | Nautilus Shipping",
      description:
        "Stay informed with the latest news and insights from Nautilus Shipping. Our news page provides timely updates and in-depth analysis of trends and developments in the maritime industry. Discover how Nautilus is contributing to shaping the future of shipping through innovation and leadership.",
      imageUrl: "/our-approach/img01.png",
    },
    "/service/commercial-services": {
      title: "Commercial Shipping Companies | Nautilus Shipping",
      description:
        "Maximize fleet profitability with Nautilus Shipping’s commercial crewing and chartering services. We provide strategic chartering, operational support, and post-fixture management, ensuring optimized performance for shipowners.",
      imageUrl: "/our-approach/img01.png",
    },
    "/service/crew-management": {
      title: "Crew Management Services | Nautilus Shipping",
      description:
        "Nautilus Shipping offers marine crew management services, including recruitment, training, and welfare programs. With a strong focus on seafarer well-being and operational excellence, we ensure skilled and motivated crews for global fleet operations.",
      imageUrl: "/our-approach/img01.png",
    },
    "/service/inspection": {
      title: "Vessel Inspection Services | Nautilus Shipping",
      description:
        "Ensure compliance and safety with Nautilus Shipping’s vessel inspection services. Our pre-purchase inspections, safety audits, and condition monitoring help shipowners maintain high performance and meet global regulatory standards.",
      imageUrl: "/our-approach/img01.png",
    },
    "/service/ship-management": {
      title: "Ship Management Services India | Nautilus Shipping",
      description:
        "Nautilus Shipping provides comprehensive ship management services in India, ensuring technical excellence, compliance, and operational efficiency. As a trusted ship management company, we optimize performance across bulk carriers, tankers, and offshore vessels.",
      imageUrl: "/our-approach/img01.png",
    },
    "/sustainability": {
      title: "Sustainable Ship Management | Nautilus Shipping",
      description:
        "Nautilus Shipping integrates energy efficiency, decarbonization, and sustainable ship management practices to minimize environmental impact. As a leader among vessel shipping companies, we align with IMO 2030 and 2050 goals for a greener maritime future.",
      imageUrl: "/our-approach/img01.png",
    },
    "/privacy-policy": {
      title: "Privacy Policy | Nautilus Shipping",
      description:
        "Read Nautilus Shipping's Privacy Policy to understand how we collect, use, and protect your personal information. Our policy outlines the steps we take to ensure your data is secure while you interact with our services. We are committed to maintaining your trust and transparency in all our data handling practices.",
      imageUrl: "/our-approach/img01.png",
    },
    "/disclaimer": {
      title: "Disclaimer | Nautilus Shipping",
      description:
        "Read the disclaimer for Nautilus Shipping's  to understand the limitations of liability, accuracy of information, and usage terms of our website.",
      imageUrl: "/our-approach/img01.png",
    },
  }

  const { title, description, imageUrl } = metadataMap[path] || {
    title: "Nautilus Shipping | The Standard for Excellence in Ship Management",
    description:
      "For over 17 years, Nautilus Shipping has provided reliable ship management services, including technical management, crew management, inspections, and commercial solutions. With 200+ ships manned and 100,000+ seafarers in our network, we deliver maritime excellence globally.",
    imageUrl: "/our-approach/img01.png",
  }

  return {
    title,
    description,
    openGraph: {
      url: `https://www.nautilusshipping.com${path}`,
      title,
      description,
      images: [{ url: imageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: `https://www.nautilusshipping.com${path}`,
    },
  }
}
