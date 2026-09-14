import ServicePage from '../ServicePage';

export default function EnvironmentalPage() {
  return (
    <ServicePage
      title="Environmental Consultancy"
      subtitle="Registered Category B Environmental Consultant providing comprehensive assessment and remediation services"
      heroImage="/images/service-marine-mapping.jpeg"
      secondaryImages={["/images/service-geological-map.jpeg"]}
      description={[
        "ATLAS GES is an Environmental Consulting firm registered as Category B with the Bahrain Supreme Council of Environment, based in Manama, Bahrain.",
        "We provide a full spectrum of environmental services including impact assessments, baseline studies, risk assessments, emergency response planning, site assessments, auditing and permitting — ensuring regulatory compliance and environmental stewardship.",
        "Our remediation expertise covers groundwater characterization, contaminant assessment, underground and above-ground storage tank investigation, and comprehensive remedial design and feasibility studies.",
      ]}
      capabilities={[
        {
          heading: "Assessment Services",
          items: [
            "Environmental & Social Impact Assessment (ESIA)",
            "Environmental Baseline Studies (EBS)",
            "Environmental Risk Assessment (ERA)",
            "Environmental Site Assessment (ESA)",
            "Environmental Auditing & Permitting",
            "Environmental Emergency Response Planning",
          ],
        },
        {
          heading: "Monitoring & Analysis",
          items: [
            "Air Pollution Assessment",
            "Water & Wastewater Services",
            "Groundwater Characterization & Monitoring",
            "Contaminant Assessment Studies",
            "Noise & Emission Modelling",
            "Environmental & Social Management Planning",
          ],
        },
        {
          heading: "Remediation",
          items: [
            "Groundwater Remediation",
            "UST & AST Investigation & Closure",
            "Remedial Design & Feasibility Studies",
            "Remediation Products & Solutions",
            "Municipal Waste Management",
            "Control of Oil Sludge",
          ],
        },
      ]}
    />
  );
}
