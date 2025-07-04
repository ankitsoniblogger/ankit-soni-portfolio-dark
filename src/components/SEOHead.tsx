import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEOHead = ({ 
  title = "Ankit Soni - Full Stack WordPress Developer & Digital Marketing Expert | Dubai",
  description = "Professional WordPress developer and digital marketing expert in Dubai, UAE. Specializing in React.js, PHP, Facebook Ads, Google Ads, and SEO. 5+ years experience with 50+ successful projects.",
  keywords = "WordPress Developer Dubai, Digital Marketing Expert Dubai, React.js Developer, PHP Developer, Facebook Ads, Google Ads, SEO Expert, Web Development UAE, Full Stack Developer",
  image = "https://ankitsoni.in/og-image.jpg",
  url = "https://ankitsoni.in"
}: SEOHeadProps) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Ankit Soni" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Ankit Soni Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@ankitsoniblogger" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#3b82f6" />
      <meta name="msapplication-TileColor" content="#3b82f6" />
      
      {/* Location-based SEO */}
      <meta name="geo.region" content="AE-DU" />
      <meta name="geo.placename" content="Dubai" />
      <meta name="geo.position" content="25.2048;55.2708" />
      <meta name="ICBM" content="25.2048, 55.2708" />
      
      {/* Professional Context */}
      <meta name="DC.title" content={title} />
      <meta name="DC.creator" content="Ankit Soni" />
      <meta name="DC.subject" content="Web Development, Digital Marketing, WordPress, React.js" />
      <meta name="DC.description" content={description} />
      <meta name="DC.type" content="Service" />
      <meta name="DC.format" content="text/html" />
      <meta name="DC.language" content="en" />
      
      {/* Structured Data for Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Ankit Soni",
          "jobTitle": "Full Stack WordPress Developer & Digital Marketing Expert",
          "description": description,
          "url": url,
          "image": image,
          "sameAs": [
            "https://www.linkedin.com/in/ankitsoniblogger/",
            "https://github.com/ankitsoniblogger/",
            "https://ankitsoni.in/"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dubai",
            "addressCountry": "UAE"
          },
          "email": "hello@ankitsoni.in",
          "telephone": "+971522104014",
          "knowsAbout": [
            "WordPress Development",
            "React.js",
            "PHP",
            "JavaScript",
            "Digital Marketing",
            "Facebook Ads",
            "Google Ads",
            "SEO"
          ],
          "hasOccupation": {
            "@type": "Occupation",
            "name": "Web Developer and Digital Marketer",
            "occupationLocation": {
              "@type": "City",
              "name": "Dubai"
            }
          }
        })}
      </script>
      
      {/* Rich Snippets for Services */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Web Development and Digital Marketing",
          "provider": {
            "@type": "Person",
            "name": "Ankit Soni"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Global"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Web Development and Marketing Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "WordPress Development"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "React.js Development"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Digital Marketing"
                }
              }
            ]
          }
        })}
      </script>
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    </Helmet>
  );
};

export default SEOHead;