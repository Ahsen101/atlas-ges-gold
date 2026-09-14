import ServicePage from '../ServicePage';

export default function GeophysicalPage() {
  return (
    <ServicePage
      title="Geophysical Services"
      subtitle="Advanced non-invasive subsurface imaging for onshore and offshore engineering applications"
      heroImage="/images/service-seismic-field.jpeg"
      secondaryImages={["/images/service-geophysical.jpeg", "/images/service-gpr.jpeg"]}
      description={[
        "ATLAS GES is a leading provider of geophysical testing services in the Kingdom of Saudi Arabia and Bahrain. Our methods apply to all fields of engineering geophysics, both onshore and offshore.",
        "Our geophysical surveys use advanced non-invasive techniques to map subsurface conditions, detect anomalies, and characterize geological features. From seismic refraction to ground penetrating radar, we deploy the right technology for every site condition.",
        "We provide comprehensive borehole geophysical services including suspension logging, full-wave sonic logging, and cross-hole seismic tomography for detailed subsurface characterization.",
      ]}
      capabilities={[
        {
          heading: "Geophysical Investigations",
          items: [
            "Seismic Refraction & Reflection",
            "Seismic Surface Waves (MASW/SASW)",
            "Electrical Resistivity Tomography (ERT)",
            "Vertical Electrical Sounding",
            "Ground Penetrating Radar (GPR)",
            "Vibration Monitoring",
          ],
        },
        {
          heading: "Marine Geophysical Surveys",
          items: [
            "Sub-bottom Profiling",
            "Marine ERT Survey",
            "Side Scan Sonar Survey",
            "Marine Magnetometer Survey",
            "Marine Resistivity Imaging",
            "Bathymetric Survey (Single/Multi-beam)",
          ],
        },
        {
          heading: "Borehole Geophysics",
          items: [
            "PS Suspension Logging",
            "Full-Wave Sonic Logging",
            "Standard Down Hole Seismic",
            "Standard Cross Hole Seismic",
            "Cross Hole Seismic Tomography",
            "Seismic Cone Penetration Test (SCPT)",
          ],
        },
      ]}
    />
  );
}
