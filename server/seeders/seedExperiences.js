// Seeds the experiences table using the Experience model.
// Usage: npm run seed            (inserts only if the table is empty)
//        npm run seed -- --reset (clears existing experiences first)
const sequelize = require("../config/database");
const Experience = require("../models/Experience");

const experiences = [
  {
    title: "Registered Nurse",
    organization: "Brillant Healthcare Staffing",
    dates: "Jan 2021 – Present",
    description:
      "Working in various settings providing med-surg and telemetry care to acute care patients.",
    responsibilities: [
      "Provide med-surg and telemetry care to acute care patients across various settings.",
    ],
  },
  {
    title: "Registered Nurse",
    organization: "Execu-search Healthcare",
    dates: "Jan 2021 – Present",
    description:
      "Vaccination and COVID-19 testing in partnership with the Department of Health.",
    responsibilities: [
      "Prepare and administer vaccinations and COVID-19 testing with the Department of Health.",
      "Provide patient education, assistance, and support.",
    ],
  },
  {
    title: "Registered Nurse",
    organization: "Miami Medical Care Center",
    dates: "June 2020 – October 2020",
    description:
      "Provided med-surg and telemetry care to patients, including those affected by COVID-19.",
    responsibilities: [
      "Provided med-surg and telemetry care to patients, including those affected by COVID-19.",
      "Trained other healthcare workers in infection control procedures and practices.",
      "Managed admission, discharge, transfer, and coordination of care for patients affected by COVID-19.",
    ],
  },
  {
    title: "Supervisor and Registered Nurse",
    organization: "North Beach Rehabilitation Center — North Miami Beach, FL",
    dates: "02/2015 – 01/2021",
    description:
      "Supervised nursing staff while delivering high-quality care to patients and families.",
    responsibilities: [
      "Provide high-quality care to patients and families using the nursing process.",
      "Use the EHR to design and revise effective plans of care.",
      "Lead, motivate, and supervise 30+ nurses and other healthcare professionals.",
      "Go above and beyond specific duties to deliver patient satisfaction.",
    ],
  },
  {
    title: "Registered Nurse / Licensed Practical Nurse",
    organization: "Maxim Healthcare — Miami, FL",
    dates: "10/2001 – 07/2010; 07/2014 – 12/2016",
    description:
      "Home-based nursing care for disabled children and adults, including ventilator-dependent patients.",
    responsibilities: [
      "Self-directed with astute judgment skills and a high level of interpersonal accountability.",
      "Effective counseling of patients and families in health maintenance, disease prevention, and management.",
      "Extensive experience working in homes with disabled children and adults, including patients on ventilators.",
    ],
  },
  {
    title: "Licensed Practical Nurse",
    organization: "Jackson Heights Rehab and Nursing Home — Miami, FL",
    dates: "05/2000 – 01/2002",
    description:
      "Long-term and rehabilitative care while overseeing clinical and support staff.",
    responsibilities: [
      "Oversaw and managed clinical and support staff in patient care activities while maintaining a high level of staff morale and professionalism.",
      "Cared for patients with many medical conditions, including Parkinson's disease, dementia, diabetes, cancer, and Alzheimer's disease.",
      "Assisted patients with bathing, dressing, feeding, lifting, and transferring.",
    ],
  },
];

const seed = async () => {
  const reset = process.argv.includes("--reset");

  try {
    await sequelize.authenticate();
    await Experience.sync();

    if (reset) {
      await Experience.destroy({ where: {}, truncate: true, restartIdentity: true });
      console.log("Cleared existing experiences.");
    } else {
      const count = await Experience.count();
      if (count > 0) {
        console.log(
          `experiences already has ${count} rows; skipping. Re-run with --reset to replace them.`,
        );
        return;
      }
    }

    await Experience.bulkCreate(experiences, { validate: true });
    console.log(`Inserted ${experiences.length} experiences.`);
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exitCode = 1;
  } finally {
    await sequelize.close();
  }
};

seed();
