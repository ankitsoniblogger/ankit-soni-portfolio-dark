import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEOHead = (props: SEOHeadProps) => {
  const {
    title = "Ankit Soni - Full Stack Developer & Digital Marketing Expert | Orange & Green Creative Solutions",
    description = "Creative Full Stack Developer and Digital Marketing Expert specializing in React, Node.js, WordPress, Facebook Ads, and Google Ads. Delivering vibrant, results-driven solutions with a playful touch. Available for freelance projects worldwide.",
    keywords = "Full Stack Developer, Digital Marketing Expert, React Developer, WordPress Developer, Facebook Ads, Google Ads, Creative Web Developer, Freelancer, Web Development, Digital Marketing Agency, Orange Green Design, Playful Web Design, SEO Expert, Performance Marketing",
    image = "https://ankitsoni.dev/og-image.jpg",
    url = "https://ankitsoni.dev"
  } = props;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Ankit Soni" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="1 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Enhanced Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Ankit Soni - Creative Developer Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Enhanced Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@ankitsoni" />
      <meta name="twitter:site" content="@ankitsoni" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#f97316" />
      <meta name="msapplication-TileColor" content="#f97316" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <link rel="canonical" href={url} />
      
      {/* Favicons */}
      <link rel="icon" type="image/png" href="/ankit-soni-favicon.png" />
      <link rel="apple-touch-icon" href="/ankit-soni-favicon.png" />
      <link rel="shortcut icon" href="/ankit-soni-favicon.png" />
      
      {/* Enhanced Person Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": `${url}#person`,
          name: "Ankit Soni",
          alternateName: "Ankit Soni Developer",
          jobTitle: "Full Stack Developer & Digital Marketing Expert",
          description: "Creative Full Stack Developer and Digital Marketing Expert specializing in modern web technologies, vibrant design solutions, and performance marketing campaigns.",
          url: url,
          image: {
            "@type": "ImageObject",
            url: image,
            width: 1200,
            height: 630
          },
          sameAs: [
            "https://linkedin.com/in/ankitsoni",
            "https://github.com/ankitsoni",
            "https://twitter.com/ankitsoni",
            "https://instagram.com/ankitsoni"
          ],
          knowsAbout: [
            "Full Stack Development",
            "React.js Development", 
            "Node.js Development",
            "WordPress Development",
            "Digital Marketing Strategy",
            "Facebook Ads Management",
            "Google Ads Optimization",
            "Search Engine Optimization",
            "Performance Marketing",
            "Creative Web Design",
            "Mobile-First Development",
            "E-commerce Solutions"
          ],
          hasOccupation: {
            "@type": "Occupation",
            name: "Full Stack Developer & Digital Marketing Expert",
            occupationLocation: {
              "@type": "Place",
              name: "Worldwide Remote"
            },
            skills: [
              "React.js", "Node.js", "WordPress", "JavaScript", "TypeScript", 
              "Facebook Ads", "Google Ads", "SEO", "Performance Marketing"
            ]
          },
          offers: {
            "@type": "Service",
            serviceType: "Web Development and Digital Marketing Services",
            description: "Custom web development, creative design solutions, and results-driven digital marketing campaigns",
            areaServed: "Worldwide"
          }
        })}
      </script>
      
      {/* Enhanced Professional Services Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService", 
          "@id": `${url}#business`,
          name: "Ankit Soni - Creative Development & Marketing Solutions",
          description: "Professional web development and digital marketing services with a focus on creative, results-driven solutions using orange and green branding elements.",
          url: url,
          logo: image,
          image: image,
          areaServed: {
            "@type": "Place",
            name: "Worldwide"
          },
          serviceType: "Web Development and Digital Marketing",
          priceRange: "$$",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Development & Marketing Services Portfolio",
            itemListElement: [
              {
                "@type": "Offer",
                name: "Custom React Applications",
                description: "Modern, responsive React applications with creative UI/UX design",
                itemOffered: {
                  "@type": "Service",
                  name: "React Development",
                  category: "Web Development"
                }
              },
              {
                "@type": "Offer",
                name: "WordPress Solutions", 
                description: "Custom WordPress themes, plugins, and e-commerce development",
                itemOffered: {
                  "@type": "Service",
                  name: "WordPress Development",
                  category: "Web Development"
                }
              },
              {
                "@type": "Offer",
                name: "Performance Marketing Campaigns",
                description: "Data-driven Facebook Ads and Google Ads campaigns for maximum ROI",
                itemOffered: {
                  "@type": "Service",
                  name: "Digital Marketing",
                  category: "Marketing Services"
                }
              }
            ]
          },
          aggregateRating: {
            "@type": "AggregateRating", 
            ratingValue: "5",
            reviewCount: "50",
            bestRating: "5",
            worstRating: "1"
          }
        })}
      </script>

      {/* Website Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${url}#website`,
          name: "Ankit Soni - Creative Developer Portfolio",
          alternateName: "Ankit Soni Portfolio",
          description: "Professional portfolio showcasing full stack development and digital marketing expertise with creative orange and green design elements.",
          url: url,
          potentialAction: {
            "@type": "SearchAction",
            target: `${url}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          },
          author: {
            "@type": "Person",
            name: "Ankit Soni",
            url: url
          },
          copyrightYear: new Date().getFullYear(),
          copyrightHolder: {
            "@type": "Person", 
            name: "Ankit Soni"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
