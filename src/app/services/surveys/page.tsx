import ServicePage from '../ServicePage';

export default function SurveysPage() {
  return (
    <ServicePage
      title="Survey Services"
      subtitle="Precision land and marine surveying with integrated hydrographic, topographic, and bathymetric capabilities"
      heroImage="/images/service-bathymetric.jpeg"
      secondaryImages={["/images/about-surveyor.jpeg"]}
      description={[
        "ATLAS GES provides comprehensive land and marine surveying services including aerial topographic surveys, utility location surveys, global positioning surveys, geographical information systems, and marine hydrographic surveys.",
        "In association with our international partners, we deliver integrated hydrographic, topographic, and bathymetric surveys for projects ranging from coastal infrastructure to offshore developments.",
        "Our survey teams are equipped with the latest positioning and measurement technology, ensuring the highest accuracy for engineering design, construction monitoring, and as-built verification.",
      ]}
      capabilities={[
        {
          heading: "Land Surveys",
          items: [
            "Aerial Topographic Surveys",
            "Utility Location Surveys",
            "GPS & GIS Mapping",
            "3D Geological Modelling",
            "Construction Stakeout",
            "As-Built Verification",
          ],
        },
        {
          heading: "Marine & Hydrographic",
          items: [
            "Single Beam Echo Sounding",
            "Multi-Beam Bathymetric Surveys",
            "Sub-Bottom Marine Surveys",
            "Tidal Data Analysis",
            "Oceanographic & Bathymetric Data",
            "Met Ocean Observations",
          ],
        },
        {
          heading: "Integrated Solutions",
          items: [
            "Feasibility Study Surveys",
            "Integrated Turnkey Solutions",
            "Installation Support",
            "Commissioning Support",
            "System Training",
            "First-Line Troubleshooting",
          ],
        },
      ]}
    />
  );
}
