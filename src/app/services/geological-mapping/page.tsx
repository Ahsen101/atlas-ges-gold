import ServicePage from '../ServicePage';

export default function GeologicalMappingPage() {
  return (
    <ServicePage
      title="Geological Mapping Services"
      subtitle="Expert geological surveys for roads, dams, airports, and mineral exploration projects"
      heroImage="/images/service-geological-terrain.jpeg"
      secondaryImages={["/images/service-geological-map.jpeg"]}
      description={[
        "ATLAS extends geological survey services to both private and government sectors for a wide range of project types. Our geologists perform detailed geological surveys and prepare proper geological maps for projects such as roads, dams, airports, construction material quarries, and mineral quarries.",
        "Our work includes sampling, preparation, and testing of samples. Our geologists are equipped with proper geophysical instruments such as resistivity meters and seismographs to ensure comprehensive geological assessment.",
        "We provide technical expertise, operation management, and training in different geoscience topics — from 3D modelling to mineral exploration and resource estimation.",
      ]}
      capabilities={[
        {
          heading: "Mapping & Modelling",
          items: [
            "3D Geological Modelling",
            "Geological Mapping & Analysis",
            "Drill Hole Data Analysis",
            "Stratigraphic Correlation",
            "Structural Geology Mapping",
            "Geomorphological Surveys",
          ],
        },
        {
          heading: "Exploration & Resources",
          items: [
            "Mineral Exploration",
            "Resources Estimation",
            "Construction Material Quarry Surveys",
            "Mineral Quarry Assessment",
            "Core Logging & Classification",
            "Geochemical Sampling",
          ],
        },
        {
          heading: "Project Applications",
          items: [
            "Road Corridor Investigations",
            "Dam Site Geology",
            "Airport Foundation Studies",
            "Quarry & Borrow Pit Surveys",
            "Laboratory Analysis & Testing",
            "Technical Training & Advisory",
          ],
        },
      ]}
    />
  );
}
