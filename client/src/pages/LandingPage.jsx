import { Helmet } from "react-helmet-async";
import { Hero } from "../components/sections/Hero";
import { FounderSection } from "../components/sections/FounderSection";
import { Statistics } from "../components/sections/Statistics";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";
import { Programs } from "../components/sections/Programs";
import { FAQ } from "../components/sections/FAQ";
import { RegistrationCTA } from "../components/sections/RegistrationCTA";
import { WhatYouWillGet } from "../components/sections/WhatYouWillGet";
import { ThisIsForYou } from "../components/sections/ThisIsForYou";
import { Certifications } from "../components/sections/Certifications";
import { SuccessStories } from "../components/sections/SuccessStories";

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Aarogyam Wellness Centre | Achieve Weight Loss or Weight Gain Naturally</title>
        <meta name="description" content="Aarogyam Wellness Centre - Scientifically guided personalized wellness programs. Achieve weight loss or weight gain up to 50 KG naturally. Join our workshop on 23rd & 24th July 2026 for just ₹99." />
        <link rel="canonical" href="https://aarogyamwellness.com" />
        <meta property="og:title" content="Aarogyam Wellness Centre | Achieve Weight Loss or Weight Gain Naturally" />
        <meta property="og:description" content="Scientifically guided personalized wellness programs. Join our workshop on 23rd & 24th July 2026 for just ₹99." />
        <meta property="og:url" content="https://aarogyamwellness.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aarogyam Wellness Centre | Workshop Registration" />
        <meta name="twitter:description" content="Achieve weight loss or weight gain up to 50 KG naturally. Join for ₹99." />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Aarogyam Wellness Centre",
            description: "Scientifically guided personalized wellness programs for weight loss and weight gain",
            url: "https://aarogyamwellness.com",
            priceRange: "₹99",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              reviewCount: "18",
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is crash dieting required?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely not! We do not believe in crash diets. Our programs are based on scientifically guided nutrition.",
                },
              },
              {
                "@type": "Question",
                name: "Can PCOS patients join?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, absolutely! We have helped numerous PCOS patients manage their weight and improve their health.",
                },
              },
              {
                "@type": "Question",
                name: "Can thyroid patients join?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, thyroid patients can definitely join. We create specialized nutrition plans that work with your medication.",
                },
              },
              {
                "@type": "Question",
                name: "How much weight can I lose?",
                answerCount: "15-50 KG",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Results vary based on individual factors, but many of our participants have achieved 15-50 KG weight loss.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide online coaching?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! We provide comprehensive online coaching through Zoom sessions, daily check-ins via WhatsApp.",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      <main>
        <Hero />
        <ThisIsForYou />
        <WhatYouWillGet />
        <FounderSection />
        <Certifications />
        <SuccessStories />
        <Statistics />
        <WhyChooseUs />
        <Programs />
        <FAQ />
        <RegistrationCTA />
      </main>
    </>
  );
};

export default LandingPage;
