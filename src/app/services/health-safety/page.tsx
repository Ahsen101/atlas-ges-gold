import ServicePage from '../ServicePage';

export default function HealthSafetyPage() {
  return (
    <ServicePage
      title="Health & Safety"
      subtitle="Comprehensive safety management ensuring zero-harm across all field operations"
      heroImage="/images/about-cpt-rig.jpeg"
      secondaryImages={["/images/about-surveyor.jpeg"]}
      description={[
        "We provide adequate control of the health and safety risks arising from our activities. We consult with our employees on matters affecting their health and safety, and provide and maintain safe plant and equipment at all times.",
        "We ensure safe handling and use of substances, provide information, instruction, and supervision for all employees. We ensure all employees are competent to do their tasks and receive adequate training for every project environment.",
        "Our commitment extends to preventing accidents and cases of work-related ill health, maintaining safe and healthy working conditions, and reviewing and revising our safety policies at regular intervals.",
      ]}
      capabilities={[
        {
          heading: "Safety Management",
          items: [
            "Safe Work Environment Creation",
            "Risk Assessment & Mitigation",
            "Safety Policy Development",
            "Regular Policy Review & Updates",
            "Incident Investigation & Reporting",
            "Emergency Response Planning",
          ],
        },
        {
          heading: "Training & Supervision",
          items: [
            "Employee Safety Training",
            "Competency Assessment",
            "Field Supervision Programs",
            "Substance Handling Protocols",
            "Equipment Operation Certification",
            "Safety Induction Programs",
          ],
        },
        {
          heading: "Equipment & Standards",
          items: [
            "Safe Plant & Equipment Maintenance",
            "PPE Compliance Management",
            "Accident Prevention Programs",
            "Work-Related Illness Prevention",
            "Health Monitoring Programs",
            "ISO 9001:2015 Compliance",
          ],
        },
      ]}
    />
  );
}
