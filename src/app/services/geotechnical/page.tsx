import ServicePage from '../ServicePage';

export default function GeotechnicalPage() {
  return (
    <ServicePage
      title="Geotechnical Services"
      subtitle="Comprehensive subsurface investigation and foundation engineering across Saudi Arabia and Bahrain"
      heroImage="/images/service-geotechnical.jpeg"
      secondaryImages={["/images/about-cpt-rig.jpeg", "/images/about-excavator.jpeg"]}
      description={[
        "Soil investigation is performed to determine the depth and characteristics of different subsurface formations, the required foundation depth, the most suitable and economical type of foundations, allowable bearing capacities, and expected settlement for proposed structures — along with guidelines for earthwork construction specifications, cement type, backfill, and other geotechnical recommendations.",
        "Our fleet of rigs is capable of drilling in soil, gravel, and rock. Equipped with all necessary drilling accessories, our rigs perform drilling to depths of up to 200 meters. ATLAS has all the necessary field testing and sampling equipment to recover different types of samples and conduct several field tests.",
        "We provide integrated site characterization services combining advanced drilling, in-situ testing, and laboratory analysis to deliver reliable geotechnical data for projects of any scale.",
      ]}
      capabilities={[
        {
          heading: "Drilling & Sampling",
          items: [
            "Split Spoon Sampling (SPT)",
            "Shelby Tube Sampling",
            "Rock Coring (NX, HQ, PQ)",
            "Wash Boring & Rotary Drilling",
            "Auger Drilling",
            "Drilling up to 200m depth",
          ],
        },
        {
          heading: "In-Situ Testing",
          items: [
            "Cone Penetration Testing (CPT/CPTu)",
            "Standard Penetration Test (SPT)",
            "Pressuremeter Testing",
            "Plate Load Testing",
            "Vane Shear Testing",
            "Dynamic Cone Penetration Test (DCPT)",
          ],
        },
        {
          heading: "Foundation Engineering",
          items: [
            "Pile Load Testing (Static & Dynamic)",
            "Pile Integrity Testing",
            "Water Pumping Tests",
            "Percolation Tests",
            "Settlement Analysis",
            "Bearing Capacity Analysis",
          ],
        },
      ]}
    />
  );
}
