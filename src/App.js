import React, { useState, useRef } from "react"; // <-- PATCH: add useRef import
import PrintoutPage from "./printout";

export default function Chatflow() {
  const [page, setPage] = useState(0);
  const [chiefComplaint, setChiefComplaint] = useState([]);
  const [historyOptions, setHistoryOptions] = useState({
    intensity: "",
    duration: "",
    onset: "",
    laterality: "",
  });
  const [AnteriorsegRE, setAnteriorsegRE] = useState({
    eyelashes: "",
    eyelids: "",
    conjunctiva: "",
    cornea: "",
    anteriorchamber: "",
    iris: "",
    lens: "",
    pupil: "",
    rapd: "",
    limbus: "",
  });
  const [AnteriorsegLE, setAnteriorsegLE] = useState({
    eyelashes: "",
    eyelids: "",
    conjunctiva: "",
    cornea: "",
    anteriorchamber: "",
    iris: "",
    lens: "",
    pupil: "",
    rapd: "",
    limbus: "",
  });
  const [PosteriorsegRE, setPosteriorsegRE] = useState({
    virtreous: "",
    pallor: "",
    discshape: "",
    discmargin: "",
    isntrule: "",
    peripallaryregion: "",
    macula: "",
    peripheralretina: "",
  });
  const [PosteriorsegLE, setPosteriorsegLE] = useState({
    virtreous: "",
    pallor: "",
    discshape: "",
    discmargin: "",
    isntrule: "",
    peripallaryregion: "",
    macula: "",
    peripheralretina: "",
  });
  const [ocularHistory, setOcularHistory] = useState([]);
  const [medicalHistory, setMedicalHistory] = useState([]);
  const [familyOcularHistory, setFamilyOcularHistory] = useState([]);
  const [familyMedicalHistory, setFamilyMedicalHistory] = useState([]);
  const [vaRE, setVaRE] = useState("");
  const [vaLE, setVaLE] = useState("");
  const [iopRE, setIopRE] = useState("");
  const [iopLE, setIopLE] = useState("");
  const [Discharge, setDischarge] = useState("");
  const [conjunctiva, setConjunctiva] = useState("");
  const [diagnosis, setDiagnosis] = useState([]);
  const [IndirectQuestions, setIndirectQuestions] = useState("");
  const [Allergies, setAllergies] = useState("");
  const [DrugHistory, setDrugHistory] = useState("");
  const [SocialHistory, setSocialHistory] = useState("");
  const [Vitals, setVitals] = useState("");
  const [Age, setAge] = useState("");
  const [Ocupation, setOccupation] = useState("");
  const [Gender, setGender] = useState("");
  const [CDratioRE, setCDratioRE] = useState("");
  const [CDratioLE, setCDratioLE] = useState("");
  const [NearVaRE, setNearRE] = useState("");
  const [NearVaLE, setNearLE] = useState("");
  const [name, setName] = useState("");
  const [expandedImages, setExpandedImages] = useState({});

  const closeTimers = useRef({}); // <-- Add this line

  const handleDropdownClick = (key) => {
    setExpandedImages((prev) => {
      const isOpen = !!prev[key];
      // If already open, close immediately and clear timer
      if (isOpen) {
        if (closeTimers.current[key]) {
          clearTimeout(closeTimers.current[key]);
          delete closeTimers.current[key];
        }
        return { ...prev, [key]: false };
      }
      // Open and set timer to close after 5 seconds
      if (closeTimers.current[key]) {
        clearTimeout(closeTimers.current[key]);
      }
      closeTimers.current[key] = setTimeout(() => {
        setExpandedImages((p) => ({ ...p, [key]: false }));
        delete closeTimers.current[key];
      }, 12000);
      return { ...prev, [key]: true };
    });
  };

  const conditionImages = {
    PVD: process.env.PUBLIC_URL + "/imaged/conditions/PVD.png",
    Haemorrhage: process.env.PUBLIC_URL + "/imaged/conditions/Haemorrhage.jpg",
    "Asteriod Hyaloid":
      process.env.PUBLIC_URL + "/imaged/conditions/AsteriodHyaloid.png",
    "Synchisis Scintillans":
      process.env.PUBLIC_URL + "/imaged/conditions/SynchisisScintillans.png",
    Amyliod: process.env.PUBLIC_URL + "/imaged/conditions/Amyliod.png",
    Syneresis: process.env.PUBLIC_URL + "/imaged/conditions/Syneresis.png",
    Severe: process.env.PUBLIC_URL + "/imaged/conditions/Severe.gif",
    Undefined: process.env.PUBLIC_URL + "/imaged/conditions/Undefined.png",
    "Well Defined":
      process.env.PUBLIC_URL + "/imaged/conditions/Well Defined.png",
    "Alpha Zone Atrophy":
      process.env.PUBLIC_URL + "/imaged/conditions/Alpha Zone Atrophy.png",
    "Beta Zone Atrophy":
      process.env.PUBLIC_URL + "/imaged/conditions/Alpha Zone Atrophy.png",
    "Hard Exudates":
      process.env.PUBLIC_URL + "/imaged/conditions/HardExudates.png",
    Madarosis: process.env.PUBLIC_URL + "/imaged/conditions/Madarosis.png",
    Invertion: process.env.PUBLIC_URL + "/imaged/conditions/Invertion.png",
    Matting: process.env.PUBLIC_URL + "/imaged/conditions/Matting.png",
    Crusting: process.env.PUBLIC_URL + "/imaged/conditions/Crusting.png",
    Edema: process.env.PUBLIC_URL + "/imaged/conditions/Edema.png",
    Drooping: process.env.PUBLIC_URL + "/imaged/conditions/Drooping.png",
    Retraction: process.env.PUBLIC_URL + "/imaged/conditions/Retraction.jpg",
    Hyperemia: process.env.PUBLIC_URL + "/imaged/conditions/Hyperemia.png",
    Congestion: process.env.PUBLIC_URL + "/imaged/conditions/Congestion.png",
    Injections: process.env.PUBLIC_URL + "/imaged/conditions/Injections.png",
    Chemosis: process.env.PUBLIC_URL + "/imaged/conditions/Chemosis.png",
    Macropapillae:
      process.env.PUBLIC_URL + "/imaged/conditions/Macropapillae.png",
    "Giant Papillae":
      process.env.PUBLIC_URL + "/imaged/conditions/Giant Papillae.JPG",
    Follicles: process.env.PUBLIC_URL + "/imaged/conditions/Follicles.png",
    "Subconjunctival Haemorrhage":
      process.env.PUBLIC_URL +
      "/imaged/conditions/Subconjunctival Haemorrhage.png",
    Cicatrization:
      process.env.PUBLIC_URL + "/imaged/conditions/Cicatrization.png",
    Pannus: process.env.PUBLIC_URL + "/imaged/conditions/Pannus.png",
    KPs: process.env.PUBLIC_URL + "/imaged/conditions/KPs.png",
    SPK: process.env.PUBLIC_URL + "/imaged/conditions/SPK.png",
    Infiltration:
      process.env.PUBLIC_URL + "/imaged/conditions/Infiltration.png",
    Ectasia: process.env.PUBLIC_URL + "/imaged/conditions/Ectasia.png",
    Hyphema: process.env.PUBLIC_URL + "/imaged/conditions/Hyphema.png",
    "Aqueous Flare":
      process.env.PUBLIC_URL + "/imaged/conditions/Aqueous Flare.png",
    Hypopyon: process.env.PUBLIC_URL + "/imaged/conditions/Hypopyon.png",
    Atrophy: process.env.PUBLIC_URL + "/imaged/conditions/Atrophy.png",
    Coloboma: process.env.PUBLIC_URL + "/imaged/conditions/Coloboma.png",
    Neovascularization:
      process.env.PUBLIC_URL + "/imaged/conditions/Neovascularization.png",
    Bombe: process.env.PUBLIC_URL + "/imaged/conditions/Bombe.png",
    Heterochromia:
      process.env.PUBLIC_URL + "/imaged/conditions/Heterochromia.png",
    Hypertrophy: process.env.PUBLIC_URL + "/imaged/conditions/Hypertrophy.png",
  };

  const symptoms = [
    "Pain",
    "Redness",
    "Itchiness",
    "Cloudy Vision",
    "Tearing",
    "Discomfort",
    "Gritty Sensation",
    "Discharge",
    "Lump",
    "Burning Sensation",
    "Blurry Vision",
    "Headache",
    "Vision Loss",
    "Double Vision",
    "Photophobia",
    "Eyestrain",
    "Floaters",
    "Flashes",
  ];
  const intensityOptions = ["Mild", "Moderate", "Severe"];
  const durationOptions = ["Less than 24h", "1–3 days", "More than 3 days"];
  const onsetOptions = ["Sudden", "Gradual", "Intermittent"];
  const LateralityOptions = ["Left Eye", "Right Eye", "Both Eyes"];
  const ocularConditions = [
    "Cataract",
    "Glaucoma",
    "Amblyopia",
    "Strabismus",
    "Spectacle Wear",
    "Contact Lens wear",
    "Ocular Surgery",
    "No Known History",
  ];
  const familyocularConditions = [
    "Glaucoma",
    "Cataract",
    "Blindness",
    "Spectacle Wear",
    "Macular Degeneration",
    "Retinal Detachment",
    "No Known History",
  ];
  const familymedicalConditions = [
    "Diabetes",
    "Hypertension",
    "Sickle Cell Anemia",
    "Asthma",
    "No Known History",
  ];
  const medicalConditions = [
    "Diabetes",
    "Hypertension",
    "Sickle Cell Anemia",
    "Asthma",
    "STI",
    "Viral Infection",
    "No known History",
  ];
  const vaOptions = [
    "6/6",
    "6/9",
    "6/12",
    "6/18",
    "6/24",
    "6/36",
    "6/60",
    "CF",
    "HM",
    "PL",
    "NPL",
  ];
  const nearVaoptions = ["N5", "N6", "N8", "N10", "N12", "N18", "N24", "N36"];
  const iopOptions = [
    "10-21 mmHg",
    "Greater than 21 mmHg",
    "Less than 10 mmHg",
  ];
  const IndirectQuestionsOptions = [
    "None",
    "Redness",
    "Pain",
    "Haloes",
    "Foreign Body Sensation",
    "Discomfort",
    "Tearing",
    "Burning Sensation",
    "Floaters",
    "Recent Trauma",
    "Flashes",
    "Headache",
  ];
  const allergies = [
    "Dust",
    "Food Allergy",
    "Smoke",
    "Pollen",
    "Animal Fur",
    "Perfume",
    "No Known Allergies",
  ];
  const drughistory = [
    "Anti-hypertensives",
    "Anti-Psychotics",
    "Anti-Diabetics",
    "Immunosuppressives",
    "Not On Any Medication",
  ];
  const socialhistory = ["Alcoholic", "Smoker", "None"];
  const vitals = ["Below 120/80mmHg", "120/80-129/90mmHg", "Above 130/90mmHg"];
  const age = [
    "Under 18",
    "18–24",
    "25–34",
    "35–44",
    "45–54",
    "55–64",
    "65 or older",
  ];
  const occupation = [
    "Student",
    "Office Based Occupation",
    "Outdoor and Field-Based Occupations",
    " Skilled Manual Jobs",
    "Others",
  ];
  const gender = ["Male", "Female", "Other"];
  const eyelashoptions = [
    "No Abnormalities",
    "Misdirection",
    "Madarosis",
    "Invertion",
    "Matting",
    "Crusting",
  ];
  const eyelidoptions = ["No Abnormalities", "Edema", "Drooping", "Retraction"];
  const conjoptions = [
    "No Abnormalities",
    "Congestion",
    "Hyperemia",
    "Injections",
    "Chemosis",
    "Macropapillae",
    "Giant Papillae",
    "Follicles",
    "Bitot spots",
    "Subconjunctival Haemorrhage",
    "Cicatrization",
  ];
  const anteriorchamberoptions = [
    "No Abnormalities",
    "Deep",
    "Shallow",
    "Hyphema",
    "Aqueous Flare",
    "Hypopyon",
  ];
  const irisoptions = [
    "No Abnormalities",
    "Atrophy",
    "Coloboma",
    "Neovascularization",
    "Bombe",
    "Heterochromia",
  ];
  const lensoptions = ["Transparent", "Cloudy", "Opaque", "Cortical Spokes"];
  const pupiloption = ["Round", "Equal", "Reactive"];
  const rapdoption = ["Present", "Absent"];
  const corneaoptions = [
    "No Abnormalities",
    "Pannus",
    "KPs",
    "Positive Fluorescein Stain",
    "SPK",
    "Infiltration",
    "Ectasia",
  ];
  const limbusoptions = [
    "No Abnormalities",
    "Hypertrophy",
    "Pigmention",
    "Trantas Dots",
  ];
  const virtreousoptions = [
    "No Abnormalities",
    "Haemorrhage",
    "Asteriod Hyaloid",
    "Synchisis Scintillans",
    "Amyliod",
    "Syneresis",
    "PVD",
    "Vissible Inflammatory Cells",
  ];
  const palloroptions = ["Absent", "Mild", "Severe"];
  const discsizeoptions = ["Small", "Medium", "Large"];
  const discmarginoptions = ["Undefined", "Well Defined"];
  const isntruleoptions = ["Obyed", "Not Obyed"];
  const peripapillaryregionoption = [
    "No Abnormailities",
    "Alpha Zone Atrophy",
    "Beta Zone Atrophy",
  ];
  const maculaoptions = [
    "No Abnormalities",
    "Edema",
    "Scar",
    "Hard Exudates",
    "Soft Exudates",
  ];
  const peripheralretinaoptions = [
    "No Abnormalities",
    "Retinal Detachment",
    "Chorioretinal Scars",
  ];
  const cdratiooptions = [
    "0.1",
    "0.2",
    "0.3",
    "0.4",
    "0.5",
    "0.6",
    "0.7",
    "Above 0.8",
  ];
  const Dischargeoptions = [
    "No Discharge",
    "Mucopurulent",
    "Purulent",
    "Serous",
    "Watery",
    "Mucoid",
  ];

  const toggleArray = (arr, setter, value) =>
    setter((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );

  ///DIAGNOSIS//
  //////////////////////PRESBYOPIA///////////////////////////
  const checkForPresbyopia = () => {
    const hasNearVisionIssues =
      chiefComplaint.includes("Blurry Vision") ||
      chiefComplaint.includes("Eyestrain");
    const isAgeAbove40 = ["45–54", "55–64", "65 or older"].includes(Age);
    const isNearVAImpaired = ["N8", "N10", "N12", "N18", "N24", "N36"];
    const isValidnearVA =
      isNearVAImpaired.includes(NearVaRE) ||
      isNearVAImpaired.includes(NearVaLE);

    console.log("Presbyopia Check:", {
      hasNearVisionIssues,
      isAgeAbove40,
      isValidnearVA,
      isNearVAImpaired,
    });

    return (
      hasNearVisionIssues && isAgeAbove40 && isValidnearVA && isNearVAImpaired
    );
  };

  ///////////////////////MYOPIA/////////////////////
  const checkForMyopia = () => {
    const validVA = ["6/18", "6/24", "6/36", "6/60"];

    const hasBlurryVisionOrHeadache =
      chiefComplaint.includes("Blurry Vision") ||
      chiefComplaint.includes("Headache") ||
      chiefComplaint.includes("Eyestrain");

    const isValidODQ = [
      "Headache",
      "Foreign Body Sensation",
      "Tearing",
      "Discomfort",
      "None",
    ].some((h) => IndirectQuestions.includes(h));

    const validCorneaRE = AnteriorsegRE?.cornea?.some((item) =>
      ["No Abnormalities", "Ectasia"].includes(item)
    );
    const validCorneaLE = AnteriorsegLE?.cornea?.some((item) =>
      ["No Abnormalities", "Ectasia"].includes(item)
    );

    const isValidVA = validVA.includes(vaRE) || validVA.includes(vaLE);

    console.log("Myopia Check:", {
      hasBlurryVisionOrHeadache,
      isValidODQ,
      validCorneaLE,
      validCorneaRE,
      isValidVA,
    });

    return (
      hasBlurryVisionOrHeadache &&
      isValidODQ &&
      validCorneaLE &&
      validCorneaRE &&
      isValidVA
    );
  };
  ////////////////GLAUCOMA SUSPECT /////////////////////
  const checkForGlaucomaSuspect = () => {
    const suspiciousCDR = ["0.5", "0.6", "0.7", "Above 0.8"];
    const highIOP = ["Greater than 21 mmHg"];

    const hasSuspiciousCDR =
      suspiciousCDR.includes(CDratioRE) || suspiciousCDR.includes(CDratioLE);
    const hasHighIOP = highIOP.includes(iopRE) || highIOP.includes(iopLE);

    return hasSuspiciousCDR || (hasHighIOP && hasSuspiciousCDR);
  };

  ////////////////OCULAR HYPERTENSION /////////////////////
  const checkForOcularHypertension = () => {
    const normalCDR = ["0.1", "0.2", "0.3", "0.4"];
    const highIOP = ["Greater than 21 mmHg"];

    const bothEyesHaveNormalCDR =
      normalCDR.includes(CDratioRE) && normalCDR.includes(CDratioLE);
    const atLeastOneEyeHasHighIOP =
      highIOP.includes(iopRE) || highIOP.includes(iopLE);
    const isGlaucomaSuspect = checkForGlaucomaSuspect();

    const isOcularHypertension =
      bothEyesHaveNormalCDR && atLeastOneEyeHasHighIOP && !isGlaucomaSuspect;

    console.log("Ocular Hypertension Check:", {
      bothEyesHaveNormalCDR,
      atLeastOneEyeHasHighIOP,
      isGlaucomaSuspect,
      isOcularHypertension,
    });

    return isOcularHypertension;
  };

  /////////ALLERGIC CONJUNCTIVITIS///////////
  const checkForAllergicConjunctivitis = () => {
    const hasItchiness = chiefComplaint.includes("Itchiness");
    const hasRedness = chiefComplaint.includes("Redness");
    const isIntermittentOnset = historyOptions.onset === "Intermittent";
    const isShortDuration = ["Less than 24h", "1–3 days"].includes(
      historyOptions.duration
    );
    const hasKnownAllergies = ["Dust", "Pollen", "Animal Fur", "Perfume"].some(
      (allergy) => Allergies.includes(allergy)
    );

    const hasConjunctivalChangesRE = AnteriorsegRE?.conjunctiva?.some((item) =>
      ["Hyperemia", "Chemosis"].includes(item)
    );
    const hasConjunctivalChangesLE = AnteriorsegLE?.conjunctiva?.some((item) =>
      ["Hyperemia", "Chemosis"].includes(item)
    );

    console.log("Allergic Conjunctivitis check:", {
      hasItchiness,
      hasRedness,
      isIntermittentOnset,
      isShortDuration,
      hasKnownAllergies,
      hasConjunctivalChangesRE,
      hasConjunctivalChangesLE,
      conjunctivaRE: AnteriorsegRE?.conjunctiva,
      conjunctivaLE: AnteriorsegLE?.conjunctiva,
      allergies: Allergies,
    });

    return (
      hasItchiness &&
      hasRedness &&
      isIntermittentOnset &&
      isShortDuration &&
      hasKnownAllergies &&
      hasConjunctivalChangesRE &&
      hasConjunctivalChangesLE
    );
  };

  ////////////BACTERIAL CONJUNCTIVITIS////////////////
  const checkForBacterialConjunctivitis = () => {
    const hasRelevantChiefComplaint = [
      "Redness",
      "Gritty Sensation",
      "Burning Sensation",
      "Discharge",
      "Pain",
      "Discomfort",
    ].some((complaint) => chiefComplaint.includes(complaint));

    const hasRednessInODQ = IndirectQuestions.includes("Redness");
    const hasDischargeInODQ = [
      "Mucopurulent",
      "Purulent",
      "Watery",
      "No Discharge",
    ].includes(Discharge);

    const validEyelashOptions = ["No Abnormalities", "Matting", "Crusting"];
    const hasValidEyelashOptions = validEyelashOptions.some(
      (option) =>
        AnteriorsegRE?.eyelashes?.includes(option) ||
        AnteriorsegLE?.eyelashes?.includes(option)
    );

    const validEyelidOptions = ["No Abnormalities", "Edema"];
    const hasValidEyelidOptions = validEyelidOptions.some(
      (option) =>
        AnteriorsegRE?.eyelids?.includes(option) ||
        AnteriorsegLE?.eyelids?.includes(option)
    );

    const validConjunctivaOptions = [
      "Congestion",
      "Hyperemia",
      "Chemosis",
      "Injections",
      "Macropapillae",
    ];
    const hasValidConjunctivaOptions = validConjunctivaOptions.some(
      (option) =>
        AnteriorsegRE?.conjunctiva?.includes(option) ||
        AnteriorsegLE?.conjunctiva?.includes(option)
    );

    const validCorneaOptions = ["No Abnormalities", "SPK", "KPs"];
    const hasValidCorneaOptions = validCorneaOptions.some(
      (option) =>
        AnteriorsegRE?.cornea?.includes(option) ||
        AnteriorsegLE?.cornea?.includes(option)
    );

    console.log("Bacterial Conjunctivitis Check:", {
      hasRelevantChiefComplaint,
      hasRednessInODQ,
      hasDischargeInODQ,
      hasValidEyelashOptions,
      hasValidEyelidOptions,
      hasValidConjunctivaOptions,
      hasValidCorneaOptions,
    });

    return (
      hasRelevantChiefComplaint &&
      hasRednessInODQ &&
      hasDischargeInODQ &&
      hasValidEyelashOptions &&
      hasValidEyelidOptions &&
      hasValidConjunctivaOptions &&
      hasValidCorneaOptions
    );
  };

  ////////////////////////////GONOCOCCAL CONJUNCTIVITIS////////////////////////
  const checkForGonococcalConjunctivitis = () => {
    const hasRelevantChiefComplaint =
      chiefComplaint.includes("Redness") && chiefComplaint.includes("Pain");

    const hasValidOnset = ["Sudden", "Intermittent"].includes(
      historyOptions.onset
    );

    const hasRednessInODQ = IndirectQuestions.includes("Redness");
    const hasPainInODQ = IndirectQuestions.includes("Pain");
    const hasPurulentDischargeInODQ = Discharge === "Purulent";

    const validEyelashOptions = ["No Abnormalities", "Matting", "Crusting"];
    const hasValidEyelashOptions = validEyelashOptions.some(
      (option) =>
        AnteriorsegRE?.eyelashes?.includes(option) ||
        AnteriorsegLE?.eyelashes?.includes(option)
    );

    const hasAcceptedmedicalhistory = medicalHistory.includes("STI");

    const hasEyelidEdema =
      AnteriorsegRE?.eyelids?.includes("Edema") ||
      AnteriorsegLE?.eyelids?.includes("Edema");

    const hasChemosis =
      AnteriorsegRE?.conjunctiva?.includes("Chemosis") &&
      AnteriorsegLE?.conjunctiva?.includes("Chemosis");
    const hasMacropapillae =
      AnteriorsegRE?.conjunctiva?.includes("Macropapillae") &&
      AnteriorsegLE?.conjunctiva?.includes("Macropapillae");
    const hasCongestion =
      AnteriorsegRE?.conjunctiva?.includes("Congestion") &&
      AnteriorsegLE?.conjunctiva?.includes("Congestion");

    console.log("Gonococcal Conjunctivitis Check:", {
      hasRelevantChiefComplaint,
      hasValidOnset,
      hasRednessInODQ,
      hasAcceptedmedicalhistory,
      hasPainInODQ,
      hasPurulentDischargeInODQ,
      hasValidEyelashOptions,
      hasEyelidEdema,
      hasChemosis,
      hasMacropapillae,
      hasCongestion,
    });

    return (
      hasRelevantChiefComplaint &&
      hasValidOnset &&
      hasRednessInODQ &&
      hasAcceptedmedicalhistory &&
      hasPainInODQ &&
      hasPurulentDischargeInODQ &&
      hasValidEyelashOptions &&
      hasEyelidEdema &&
      hasChemosis &&
      hasMacropapillae &&
      hasCongestion
    );
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const handleSubmit = () => {
    const hasAllergicConjunctivitis = checkForAllergicConjunctivitis();
    const hasMyopia = checkForMyopia();
    const hasPresbyopia = checkForPresbyopia();
    const hasGlaucomaSuspect = checkForGlaucomaSuspect();
    const hasOcularHypertension = checkForOcularHypertension();
    const hasGonococcalConjunctivitis = checkForGonococcalConjunctivitis();
    const hasBacterialConjunctivitis =
      !hasGonococcalConjunctivitis && checkForBacterialConjunctivitis();

    console.log("Diagnosis flags:", {
      hasAllergicConjunctivitis,
      hasMyopia,
      hasPresbyopia,
      hasGlaucomaSuspect,
      hasGonococcalConjunctivitis,
      hasBacterialConjunctivitis,
      hasOcularHypertension,
    });

    const diagnoses = [];
    if (hasAllergicConjunctivitis) {
      diagnoses.push("Allergic Conjunctivitis");
    }
    if (hasMyopia) {
      diagnoses.push("Myopia");
    }
    if (hasPresbyopia) {
      diagnoses.push("Presbyopia");
    }
    if (hasBacterialConjunctivitis) {
      diagnoses.push("Bacterial Conjunctivitis");
    }
    if (hasGonococcalConjunctivitis) {
      diagnoses.push("Gonococcal Conjunctivitis");
    }
    if (hasGlaucomaSuspect) {
      diagnoses.push("Glaucoma Suspect");
    }
    if (hasOcularHypertension) {
      diagnoses.push("Ocular Hypertension");
    }
    if (diagnoses.length > 0) {
      setDiagnosis(diagnoses.map((d) => `${d}`));
    } else {
      setDiagnosis(["No clear diagnosis"]);
    }
    setPage(17);
  };
  const handleNext = () => setPage((p) => p + 1);
  const handlePrev = () => setPage((p) => Math.max(0, p - 1));

  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Helvetica Neue', Arial, sans-serif; }
        .header { background: #000; color: #fff; display: flex; justify-content: center; align-items: center; padding: 1rem; }
        .logo { width: 40px; height: 40px; margin-right: 0.75rem; filter: invert(1); }
        .title { font-family: 'Cathorix', sans-serif; font-size: 2rem; font-weight: bold; letter-spacing: 1px; }
        .container { max-width: 600px; margin: 2rem auto; padding: 1rem; }
        .section-title { font-size: 2rem; text-align: center; margin-bottom: 1rem; }
        .option-list { display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem; }
.select-box {
  position: relative;
  display: inline-block;
  width: 100%;
}
.select-box select {
  width: 100%;
  padding: 0.1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;
  font-size: 1rem;
  color: #333
  cursor: pointer;
  transition: border-color 0.5s, box-shadow 0.5s;
}
.select-box select:focus {
  border-color:rgb(10, 10, 87);
  box-shadow: 0 0 5px rgba(8, 76, 128, 0.5);
  outline: none;
}

        .option { flex: 1 1 calc(50% - 1rem); background: #f9f9f9; border: 1px solid #000; border-radius: 8px; padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem; cursor: pointer; transition: background 0.2s;transform 0.5s; box-shadow 0.3s; width: 100%; }
        .option:hover { background: #e0e0e0;transform: translateY(-3px); box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);}
        .card { border: 1px solid #000; border-radius: 8px; padding: 0.75rem; flex: 1 1 100%; margin-bottom: 1rem; }
        .legend { padding: 0 0.5rem; font-weight: bold; }
        .button-group { display: flex; gap: 1rem; justify-content: flex-end; }
        .button { background: #000; color: #fff; border: none; border-radius: 8px; padding: 0.75rem 1.5rem; font-size: 1rem; cursor: pointer; transition: background 0.2s; }
        .button.primary { background: #000; }
        .footer { text-align: center; margin-top: 10rem; font-size: 0.700rem; color: #666; }
        .footer a { color: #0078d4; text-decoration: none; }
        .footer a:hover { text-decoration: underline; }
        .button:hover { background: #333; }
        .review {word-wrap: break-word;text-align: center;font-size: 1rem; background: #f9f9f9; border: 5px solid #000; border-radius: 10px; padding: 2rem; margin-bottom: 2rem; }
        .intro { background: transparent; color: #000; border-radius: 8px; padding: 2rem; text-align: center; }
        .intro-header { display: flex; align-items: center; justify-content: center; gap: 1rem; margin-bottom: 1rem; }
        .intro .logo { width: 70px; height: 70px; filter: none; margin: 0; }
        .intro h1 { font-family: 'Cathorix', sans-serif; font-size: 3rem; font-weight: bold; letter-spacing: 1px; margin: 0; }
        .intro-text { font-size: 0.67rem; color: #666; margin-bottom: 2rem; font-style: italic; }
        .intro .arrow-btn { font-size: 2rem; background: transparent; border: 2px solid #000; color: #000; border-radius: 50%; width: 3rem; height: 3rem; cursor: pointer; transition: background 0.3s, transform 0.3s; }
        .intro .arrow-btn:hover { background: #000; color: #fff; transform: scale(1.1); }
        @media (max-width: 480px) {
          .option { flex: 1 1 100%; }
          .button-group { flex-direction: column; }
          .button { width: 100%; }
        }
      `}</style>

      {page > 0 && (
        <header className="header">
          <img
            className="logo"
            src="https://cdn-icons-png.flaticon.com/512/709/709614.png"
            alt="eyeDeal Eye"
          />
          <h1 className="title">eyeDeal</h1>
        </header>
      )}

      <div className="container">
        {page === 0 && (
          <div className="intro">
            <div className="intro-header">
              <img
                className="logo"
                src="https://cdn-icons-png.flaticon.com/512/709/709614.png"
                alt="eyeDeal Eye"
              />
              <h1>eyeDeal</h1>
            </div>
            <p className="intro-text">
              © 2025 Buabeng Godfred, Optometry Student, KNUST
            </p>
            <button
              className="arrow-btn"
              onClick={handleNext}
              aria-label="Start"
            >
              →
            </button>
          </div>
        )}
        {page === 3 && (
          <>
            <h2 className="section-title">Chief Complaint</h2>
            <div className="option-list">
              {symptoms.map((s) => (
                <label key={s} className="option">
                  <input
                    type="checkbox"
                    checked={chiefComplaint.includes(s)}
                    onChange={() =>
                      toggleArray(chiefComplaint, setChiefComplaint, s)
                    }
                  />
                  {s}
                </label>
              ))}
            </div>
            <div className="button-group">
              <button className="button" onClick={handlePrev}>
                Previous
              </button>
              {chiefComplaint.length > 0 && (
                <button className="button primary" onClick={handleNext}>
                  Next
                </button>
              )}
            </div>
          </>
        )}
        {page === 4 && (
          <>
            <h2 className="section-title">History of Presenting Complaint</h2>
            <div className="option-list">
              {["intensity", "duration", "onset", "laterality"].map((sec) => {
                const opts =
                  sec === "intensity"
                    ? intensityOptions
                    : sec === "duration"
                    ? durationOptions
                    : sec == "laterality"
                    ? LateralityOptions
                    : onsetOptions;
                return (
                  <fieldset key={sec} className="card">
                    <legend className="legend">
                      {sec.charAt(0).toUpperCase() + sec.slice(1)}
                    </legend>
                    {opts.map((o) => (
                      <label key={o} className="option">
                        <input
                          type="radio"
                          name={sec}
                          checked={historyOptions[sec] === o}
                          onChange={() =>
                            setHistoryOptions((h) => ({ ...h, [sec]: o }))
                          }
                        />
                        {o}
                      </label>
                    ))}
                  </fieldset>
                );
              })}
            </div>
            <div className="button-group">
              <button className="button" onClick={handlePrev}>
                Previous
              </button>
              {["intensity", "duration", "onset", "laterality"].every(
                (sec) => historyOptions[sec]
              ) && (
                <button className="button primary" onClick={handleNext}>
                  Next
                </button>
              )}
            </div>
          </>
        )}
        {page === 6 && (
          <>
            <h2 className="section-title">Patient Ocular History</h2>
            <div className="option-list">
              {ocularConditions.map((c) => (
                <label key={c} className="option">
                  <input
                    type="checkbox"
                    checked={ocularHistory.includes(c)}
                    onChange={() =>
                      toggleArray(ocularHistory, setOcularHistory, c)
                    }
                  />
                  {c}
                </label>
              ))}
            </div>
            <div className="button-group">
              <button className="button" onClick={handlePrev}>
                Previous
              </button>
              {ocularHistory.length > 0 && (
                <button className="button primary" onClick={handleNext}>
                  Next
                </button>
              )}
            </div>
          </>
        )}
        {page === 7 && (
          <>
            <h2 className="section-title">Patient Medical History</h2>
            <div className="option-list">
              {medicalConditions.map((c) => (
                <label key={c} className="option">
                  <input
                    type="checkbox"
                    checked={medicalHistory.includes(c)}
                    onChange={() =>
                      toggleArray(medicalHistory, setMedicalHistory, c)
                    }
                  />
                  {c}
                </label>
              ))}
            </div>
            <div className="button-group">
              <button className="button" onClick={handlePrev}>
                Previous
              </button>
              {medicalHistory.length > 0 && (
                <button className="button primary" onClick={handleNext}>
                  Next
                </button>
              )}
            </div>
          </>
        )}
        {page === 5 && (
          <>
            <h2 className="section-title">ODQ</h2>

            <div className="option-list">
              {IndirectQuestionsOptions.map((s) => (
                <label key={s} className="option">
                  <input
                    type="checkbox"
                    checked={IndirectQuestions.includes(s)}
                    onChange={() =>
                      toggleArray(IndirectQuestions, setIndirectQuestions, s)
                    }
                  />
                  {s}
                </label>
              ))}
              <label className="option">
                <div className="select-box">
                  <select
                    value={Discharge}
                    onChange={(e) => setDischarge(e.target.value)}
                  >
                    <option value="">Discharge</option>
                    {Dischargeoptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </label>
            </div>

            <div className="button-group">
              <button className="button" onClick={handlePrev}>
                Previous
              </button>
              {(IndirectQuestions.includes("None") ||
                (IndirectQuestions.length > 0 && Discharge !== "")) && (
                <button className="button primary" onClick={handleNext}>
                  Next
                </button>
              )}
            </div>
          </>
        )}
        {page === 10 && (
          <>
            <h2 className="section-title">Allergies</h2>
            <div className="option-list">
              {allergies.map((s) => (
                <label key={s} className="option">
                  <input
                    type="checkbox"
                    checked={Allergies.includes(s)}
                    onChange={() => toggleArray(Allergies, setAllergies, s)}
                  />
                  {s}
                </label>
              ))}
            </div>
            <div className="button-group">
              <button className="button" onClick={handlePrev}>
                Previous
              </button>
              {Allergies.length > 0 && (
                <button className="button primary" onClick={handleNext}>
                  Next
                </button>
              )}
            </div>
          </>
        )}
        {page === 11 && (
          <>
            <h2 className="section-title">Drug History</h2>
            <div className="option-list">
              {drughistory.map((s) => (
                <label key={s} className="option">
                  <input
                    type="checkbox"
                    checked={DrugHistory.includes(s)}
                    onChange={() => toggleArray(DrugHistory, setDrugHistory, s)}
                  />
                  {s}
                </label>
              ))}
            </div>
            <div className="button-group">
              <button className="button" onClick={handlePrev}>
                Previous
              </button>
              {DrugHistory.length > 0 && (
                <button className="button primary" onClick={handleNext}>
                  Next
                </button>
              )}
            </div>
          </>
        )}
        {page === 12 && (
          <>
            <h2 className="section-title">Social History</h2>
            <div className="option-list">
              {socialhistory.map((s) => (
                <label key={s} className="option">
                  <input
                    type="checkbox"
                    checked={SocialHistory.includes(s)}
                    onChange={() =>
                      toggleArray(SocialHistory, setSocialHistory, s)
                    }
                  />
                  {s}
                </label>
              ))}
            </div>
            <div className="button-group">
              <button className="button" onClick={handlePrev}>
                Previous
              </button>
              {SocialHistory.length > 0 && (
                <button className="button primary" onClick={handleNext}>
                  Next
                </button>
              )}
            </div>
          </>
        )}
        {page === 8 && (
          <>
            <h2 className="section-title">Family Ocular History</h2>
            <div className="option-list">
              {familyocularConditions.map((c) => (
                <label key={c} className="option">
                  <input
                    type="checkbox"
                    checked={familyOcularHistory.includes(c)}
                    onChange={() =>
                      toggleArray(
                        familyOcularHistory,
                        setFamilyOcularHistory,
                        c
                      )
                    }
                  />
                  {c}
                </label>
              ))}
            </div>
            <div className="button-group">
              <button className="button" onClick={handlePrev}>
                Previous
              </button>
              {familyOcularHistory.length > 0 && (
                <button className="button primary" onClick={handleNext}>
                  Next
                </button>
              )}
            </div>
          </>
        )}
        {page === 9 && (
          <>
            <h2 className="section-title">Family Medical History</h2>
            <div className="option-list">
              {familymedicalConditions.map((c) => (
                <label key={c} className="option">
                  <input
                    type="checkbox"
                    checked={familyMedicalHistory.includes(c)}
                    onChange={() =>
                      toggleArray(
                        familyMedicalHistory,
                        setFamilyMedicalHistory,
                        c
                      )
                    }
                  />
                  {c}
                </label>
              ))}
            </div>
            <div className="button-group">
              <button className="button" onClick={handlePrev}>
                Previous
              </button>
              {familyMedicalHistory.length > 0 && (
                <button className="button primary" onClick={handleNext}>
                  Next
                </button>
              )}
            </div>
          </>
        )}
        {page === 2 && (
          <>
            <h2 className="section-title">Intake Examinations</h2>
            <div className="option-list">
              <label className="option">
                <div className="select-box">
                  <select
                    value={vaRE}
                    onChange={(e) => setVaRE(e.target.value)}
                  >
                    <option value="">Distance VA (RE)</option>
                    {vaOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </label>
              <label className="option">
                <div className="select-box">
                  <select
                    value={vaLE}
                    onChange={(e) => setVaLE(e.target.value)}
                  >
                    <option value="">Distance VA (LE)</option>
                    {vaOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </label>
              <label className="option">
                <div className="select-box">
                  <select
                    value={NearVaRE}
                    onChange={(e) => setNearRE(e.target.value)}
                  >
                    <option value="">Near VA (RE)</option>
                    {nearVaoptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </label>
              <label className="option">
                <div className="select-box">
                  <select
                    value={NearVaLE}
                    onChange={(e) => setNearLE(e.target.value)}
                  >
                    <option value=""> Near VA (LE)</option>
                    {nearVaoptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </label>
              <label className="option">
                <div className="select-box">
                  <select
                    value={iopRE}
                    onChange={(e) => setIopRE(e.target.value)}
                  >
                    <option value="">IOP (RE)</option>
                    {iopOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </label>
              <label className="option">
                <div className="select-box">
                  <select
                    value={iopLE}
                    onChange={(e) => setIopLE(e.target.value)}
                  >
                    <option value="">IOP (LE)</option>
                    {iopOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </label>
              <label className="option">
                <div className="select-box">
                  <select
                    value={Vitals}
                    onChange={(e) => setVitals(e.target.value)}
                  >
                    <option value="">Blood Pressure</option>
                    {vitals.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </label>
            </div>
            <div className="button-group">
              <button className="button" onClick={handlePrev}>
                Previous
              </button>
              <button className="button primary" onClick={handleNext}>
                Next
              </button>
            </div>
          </>
        )}
        {page === 1 && (
          <>
            <h2 className="section-title">Demographics</h2>
            <div className="option-list">
              <label className="option">
                <div className="select-box">
                  <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </label>
              <label className="option">
                <div className="select-box">
                  <select value={Age} onChange={(e) => setAge(e.target.value)}>
                    <option value="">Age</option>
                    {age.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </label>
              <label className="option">
                <div className="select-box">
                  <select
                    value={Gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="">Gender</option>
                    {gender.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </label>
              <label className="option">
                <div className="select-box">
                  <select
                    value={Ocupation}
                    onChange={(e) => setOccupation(e.target.value)}
                  >
                    <option value="">Occupation</option>
                    {occupation.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </label>
            </div>
            <div className="button-group">
              <button className="button primary" onClick={handleNext}>
                Next
              </button>
            </div>
          </>
        )}

        {page === 13 && (
          <>
            <h2 className="section-title">Anterior Segment Examination(RE)</h2>
            <div className="option-list">
              {[
                "eyelashes",
                "eyelids",
                "conjunctiva",
                "cornea",
                "anterior chamber",
                "iris",
                "lens",
                "pupil",
                "RAPD",
                "limbus",
              ].map((sec) => {
                const opts =
                  sec === "eyelashes"
                    ? eyelashoptions
                    : sec === "eyelids"
                    ? eyelidoptions
                    : sec == "conjunctiva"
                    ? conjoptions
                    : sec == "cornea"
                    ? corneaoptions
                    : sec == "anterior chamber"
                    ? anteriorchamberoptions
                    : sec == "iris"
                    ? irisoptions
                    : sec == "lens"
                    ? lensoptions
                    : sec == "pupil"
                    ? pupiloption
                    : sec == "RAPD"
                    ? rapdoption
                    : sec == "limbus"
                    ? limbusoptions
                    : onsetOptions;
                return (
                  <fieldset key={sec} className="card">
                    <legend className="legend">
                      {sec.charAt(0).toUpperCase() + sec.slice(1)}
                    </legend>
                    {opts.map((o) => (
                      <div
                        key={o}
                        style={{ marginBottom: "0.5em", position: "relative" }}
                      >
                        <label
                          className="option"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            gap: "0.5em",
                            minWidth: 0,
                          }}
                        >
                          <input
                            type="checkbox"
                            name={sec}
                            checked={AnteriorsegRE[sec]?.includes(o)}
                            onChange={() => {
                              setAnteriorsegRE((h) => {
                                const updatedSec = h[sec] || [];
                                if (updatedSec.includes(o)) {
                                  return {
                                    ...h,
                                    [sec]: updatedSec.filter(
                                      (option) => option !== o
                                    ),
                                  };
                                } else {
                                  return { ...h, [sec]: [...updatedSec, o] };
                                }
                              });
                            }}
                          />
                          {o}
                          {/* Dropdown arrow for all options with images */}
                          {conditionImages[o] && (
                            <span
                              style={{
                                cursor: "pointer",
                                position: "absolute",
                                right: 18,
                                fontSize: "0.7em",
                                userSelect: "none",
                                top: "50%",
                                transform: "translateY(-50%)",
                              }}
                              onClick={() =>
                                handleDropdownClick(`${sec}_${o}_RE`)
                              }
                              aria-label="Show image"
                            >
                              ▼
                            </span>
                          )}
                        </label>
                        {/* Show image if expanded */}
                        {conditionImages[o] &&
                          expandedImages[`${sec}_${o}_RE`] && (
                            <div
                              style={{
                                margin: "24px auto 32px auto",
                                maxWidth: "98vw",
                                textAlign: "center",
                                transition: "opacity 0.5s, max-height 0.5s",
                                opacity: expandedImages[`${sec}_${o}_RE`]
                                  ? 1
                                  : 0,
                                maxHeight: expandedImages[`${sec}_${o}_RE`]
                                  ? "500px"
                                  : "0px",
                                overflow: "hidden",
                                pointerEvents: expandedImages[`${sec}_${o}_RE`]
                                  ? "auto"
                                  : "none",
                              }}
                            >
                              <img
                                src={conditionImages[o]}
                                alt={o}
                                style={{
                                  maxWidth: "98vw",
                                  width: "100%",
                                  height: "auto",
                                  borderRadius: "14px",
                                  border: "2px solid #ccc",
                                  boxSizing: "border-box",
                                  maxHeight: "45vh",
                                  display: "block",
                                  margin: "0 auto",
                                }}
                              />
                              <div
                                style={{
                                  fontSize: "1em",
                                  color: "#555",
                                  textAlign: "center",
                                  marginTop: 10,
                                }}
                              >
                                {o}
                              </div>
                            </div>
                          )}
                      </div>
                    ))}
                  </fieldset>
                );
              })}
            </div>
            <div className="button-group">
              <button className="button" onClick={handlePrev}>
                Previous
              </button>
              {[
                "eyelashes",
                "eyelids",
                "conjunctiva",
                "cornea",
                "anterior chamber",
                "iris",
                "lens",
                "pupil",
                "RAPD",
                "limbus",
              ].every(
                (sec) =>
                  Array.isArray(AnteriorsegRE[sec]) &&
                  AnteriorsegRE[sec].length > 0
              ) && (
                <button className="button primary" onClick={handleNext}>
                  Next
                </button>
              )}
            </div>
          </>
        )}
        {page === 14 && (
          <>
            <h2 className="section-title">Anterior Segment Examination(LE)</h2>
            <div className="option-list">
              {[
                "eyelashes",
                "eyelids",
                "conjunctiva",
                "cornea",
                "anterior chamber",
                "iris",
                "lens",
                "pupil",
                "RAPD",
                "limbus",
              ].map((sec) => {
                const opts =
                  sec === "eyelashes"
                    ? eyelashoptions
                    : sec === "eyelids"
                    ? eyelidoptions
                    : sec == "conjunctiva"
                    ? conjoptions
                    : sec == "cornea"
                    ? corneaoptions
                    : sec == "anterior chamber"
                    ? anteriorchamberoptions
                    : sec == "iris"
                    ? irisoptions
                    : sec == "lens"
                    ? lensoptions
                    : sec == "pupil"
                    ? pupiloption
                    : sec == "RAPD"
                    ? rapdoption
                    : sec == "limbus"
                    ? limbusoptions
                    : onsetOptions;
                return (
                  <fieldset key={sec} className="card">
                    <legend className="legend">
                      {sec.charAt(0).toUpperCase() + sec.slice(1)}
                    </legend>
                    {opts.map((o) => (
                      <div
                        key={o}
                        style={{ marginBottom: "0.5em", position: "relative" }}
                      >
                        <label
                          className="option"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            gap: "0.5em",
                            minWidth: 0,
                          }}
                        >
                          <input
                            type="checkbox"
                            name={sec}
                            checked={AnteriorsegLE[sec]?.includes(o)}
                            onChange={() => {
                              setAnteriorsegLE((h) => {
                                const updatedSec = h[sec] || [];
                                if (updatedSec.includes(o)) {
                                  return {
                                    ...h,
                                    [sec]: updatedSec.filter(
                                      (option) => option !== o
                                    ),
                                  };
                                } else {
                                  return { ...h, [sec]: [...updatedSec, o] };
                                }
                              });
                            }}
                          />
                          {o}
                          {/* Dropdown arrow for all options with images */}
                          {conditionImages[o] && (
                            <span
                              style={{
                                cursor: "pointer",
                                position: "absolute",
                                right: 18,
                                fontSize: "0.7em",
                                userSelect: "none",
                                top: "50%",
                                transform: "translateY(-50%)",
                              }}
                              onClick={() =>
                                handleDropdownClick(`${sec}_${o}_LE`)
                              }
                              aria-label="Show image"
                            >
                              ▼
                            </span>
                          )}
                        </label>
                        {/* Show image if expanded */}
                        {conditionImages[o] &&
                          expandedImages[`${sec}_${o}_LE`] && (
                            <div
                              style={{
                                margin: "24px auto 32px auto",
                                maxWidth: "98vw",
                                textAlign: "center",
                                transition: "opacity 0.5s, max-height 0.5s",
                                opacity: expandedImages[`${sec}_${o}_LE`]
                                  ? 1
                                  : 0,
                                maxHeight: expandedImages[`${sec}_${o}_LE`]
                                  ? "500px"
                                  : "0px",
                                overflow: "hidden",
                                pointerEvents: expandedImages[`${sec}_${o}_LE`]
                                  ? "auto"
                                  : "none",
                              }}
                            >
                              <img
                                src={conditionImages[o]}
                                alt={o}
                                style={{
                                  maxWidth: "98vw",
                                  width: "100%",
                                  height: "auto",
                                  borderRadius: "14px",
                                  border: "2px solid #ccc",
                                  boxSizing: "border-box",
                                  maxHeight: "45vh",
                                  display: "block",
                                  margin: "0 auto",
                                }}
                              />
                              <div
                                style={{
                                  fontSize: "1em",
                                  color: "#555",
                                  textAlign: "center",
                                  marginTop: 10,
                                }}
                              >
                                {o}
                              </div>
                            </div>
                          )}
                      </div>
                    ))}
                  </fieldset>
                );
              })}
            </div>
            <div className="button-group">
              <button className="button" onClick={handlePrev}>
                Previous
              </button>
              {[
                "eyelashes",
                "eyelids",
                "conjunctiva",
                "cornea",
                "anterior chamber",
                "iris",
                "lens",
                "pupil",
                "RAPD",
                "limbus",
              ].every(
                (sec) =>
                  Array.isArray(AnteriorsegLE[sec]) &&
                  AnteriorsegLE[sec].length > 0
              ) && (
                <button className="button primary" onClick={handleNext}>
                  Next
                </button>
              )}
            </div>
          </>
        )}
        {page === 15 && (
          <>
            <h2 className="section-title">Posterior Segment Examination(RE)</h2>
            <div className="option-list">
              {[
                "virtreous",
                "pallor",
                "disc size",
                "disc margin",
                "ISNT rule",
                "peripallary region",
                "macula",
                "peripheral retina",
              ].map((sec) => {
                const opts =
                  sec === "virtreous"
                    ? virtreousoptions
                    : sec === "pallor"
                    ? palloroptions
                    : sec == "disc size"
                    ? discsizeoptions
                    : sec == "disc margin"
                    ? discmarginoptions
                    : sec == "ISNT rule"
                    ? isntruleoptions
                    : sec == "peripallary region"
                    ? peripapillaryregionoption
                    : sec == "macula"
                    ? maculaoptions
                    : sec == "peripheral retina"
                    ? peripheralretinaoptions
                    : [];
                return (
                  <fieldset key={sec} className="card">
                    <legend className="legend">
                      {sec.charAt(0).toUpperCase() + sec.slice(1)}
                    </legend>
                    {opts.map((o) => (
                      <div
                        key={o}
                        style={{ marginBottom: "0.5em", position: "relative" }}
                      >
                        <label
                          className="option"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            gap: "0.5em",
                            minWidth: 0,
                          }}
                        >
                          <input
                            type="checkbox"
                            name={sec}
                            checked={PosteriorsegRE[sec]?.includes(o)}
                            onChange={() => {
                              setPosteriorsegRE((h) => {
                                const updatedSec = h[sec] || [];
                                if (updatedSec.includes(o)) {
                                  return {
                                    ...h,
                                    [sec]: updatedSec.filter(
                                      (option) => option !== o
                                    ),
                                  };
                                } else {
                                  return { ...h, [sec]: [...updatedSec, o] };
                                }
                              });
                            }}
                          />
                          {o}
                          {/* Dropdown arrow for all options with images */}
                          {conditionImages[o] && (
                            <span
                              style={{
                                cursor: "pointer",
                                position: "absolute",
                                right: 18,
                                fontSize: "0.7em",
                                userSelect: "none",
                                top: "50%",
                                transform: "translateY(-50%)",
                              }}
                              onClick={() =>
                                handleDropdownClick(`${sec}_${o}_RE`)
                              }
                              aria-label="Show image"
                            >
                              ▼
                            </span>
                          )}
                        </label>
                        {/* Show image if expanded */}
                        {conditionImages[o] &&
                          expandedImages[`${sec}_${o}_RE`] && (
                            <div
                              style={{
                                margin: "24px auto 32px auto",
                                maxWidth: "98vw",
                                textAlign: "center",
                                transition: "opacity 0.5s",
                                opacity: expandedImages[`${sec}_${o}_RE`]
                                  ? 1
                                  : 0,
                              }}
                            >
                              <img
                                src={conditionImages[o]}
                                alt={o}
                                style={{
                                  maxWidth: "98vw",
                                  width: "100%",
                                  height: "auto",
                                  borderRadius: "14px",
                                  border: "2px solid #ccc",
                                  boxSizing: "border-box",
                                  maxHeight: "45vh",
                                  display: "block",
                                  margin: "0 auto",
                                }}
                              />
                              <div
                                style={{
                                  fontSize: "1em",
                                  color: "#555",
                                  textAlign: "center",
                                  marginTop: 10,
                                }}
                              >
                                {o}
                              </div>
                            </div>
                          )}
                      </div>
                    ))}
                  </fieldset>
                );
              })}
            </div>
            <div className="button-group"></div>
          </>
        )}
        {page === 15 && (
          <>
            <h2 className="section-title"></h2>
            <div className="option-list">
              <div className="select-box">
                <label className="option">
                  <select
                    value={CDratioRE}
                    onChange={(e) => setCDratioRE(e.target.value)}
                  >
                    <option value="">CD Ratio</option>
                    {cdratiooptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
            <div className="button-group">
              <button className="button" onClick={handlePrev}>
                Previous
              </button>
              {[
                "virtreous",
                "pallor",
                "disc size",
                "disc margin",
                "ISNT rule",
                "peripallary region",
                "macula",
                "peripheral retina",
              ].every(
                (sec) =>
                  Array.isArray(PosteriorsegRE[sec]) &&
                  PosteriorsegRE[sec].length > 0
              ) &&
                CDratioRE !== "" && (
                  <button className="button primary" onClick={handleNext}>
                    Next
                  </button>
                )}
            </div>
          </>
        )}
        {page === 16 && (
          <>
            <h2 className="section-title">Posterior Segment Examination(LE)</h2>
            <div className="option-list">
              {[
                "virtreous",
                "pallor",
                "disc size",
                "disc margin",
                "ISNT rule",
                "peripallary region",
                "macula",
                "peripheral retina",
              ].map((sec) => {
                const opts =
                  sec === "virtreous"
                    ? virtreousoptions
                    : sec === "pallor"
                    ? palloroptions
                    : sec == "disc size"
                    ? discsizeoptions
                    : sec == "disc margin"
                    ? discmarginoptions
                    : sec == "ISNT rule"
                    ? isntruleoptions
                    : sec == "peripallary region"
                    ? peripapillaryregionoption
                    : sec == "macula"
                    ? maculaoptions
                    : sec == "peripheral retina"
                    ? peripheralretinaoptions
                    : [];
                return (
                  <fieldset key={sec} className="card">
                    <legend className="legend">
                      {sec.charAt(0).toUpperCase() + sec.slice(1)}
                    </legend>
                    {opts.map((o) => (
                      <label key={o} className="option">
                        <input
                          type="checkbox"
                          name={sec}
                          checked={PosteriorsegLE[sec]?.includes(o)} // Ensure we handle multiple selections
                          onChange={() => {
                            setPosteriorsegLE((h) => {
                              const updatedSec = h[sec] || [];
                              if (updatedSec.includes(o)) {
                                return {
                                  ...h,
                                  [sec]: updatedSec.filter(
                                    (option) => option !== o
                                  ),
                                };
                              } else {
                                return { ...h, [sec]: [...updatedSec, o] };
                              }
                            });
                          }}
                        />
                        {o}
                      </label>
                    ))}
                  </fieldset>
                );
              })}
            </div>
            <div className="button-group"></div>
          </>
        )}
        {page === 16 && (
          <>
            <h2 className="section-title"></h2>
            <div className="option-list">
              <div className="select-box">
                <label className="option">
                  <select
                    value={CDratioLE}
                    onChange={(e) => setCDratioLE(e.target.value)}
                  >
                    <option value="">CD Ratio</option>
                    {cdratiooptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>
            <div className="button-group">
              <button className="button" onClick={handlePrev}>
                Previous
              </button>
              {[
                "virtreous",
                "pallor",
                "disc size",
                "disc margin",
                "ISNT rule",
                "peripallary region",
                "macula",
                "peripheral retina",
              ].every(
                (sec) =>
                  Array.isArray(PosteriorsegLE[sec]) &&
                  PosteriorsegLE[sec].length > 0
              ) &&
                CDratioLE !== "" && (
                  <button className="button primary" onClick={handleSubmit}>
                    Next
                  </button>
                )}
            </div>
          </>
        )}
        {page === 17 && (
          <div className="review">
            <h2>Possible Diagnosis</h2>
            <div>
              {diagnosis.map((d, i) => (
                <p key={i}>{d}</p>
              ))}
            </div>
            <div className="button-group" style={{ marginTop: "10rem" }}>
              <button className="button" onClick={handlePrev}>
                Previous
              </button>
              <button
                className="button"
                onClick={() => {
                  setChiefComplaint("");
                  setAllergies("");
                  setDiagnosis("");
                  setConjunctiva("");
                  setVaRE([]);
                  setVaLE([]);
                  setFamilyMedicalHistory("");
                  setFamilyOcularHistory("");
                  setMedicalHistory("");
                  setOcularHistory("");
                  setPosteriorsegLE({});
                  setPosteriorsegRE({});
                  setAnteriorsegLE({});
                  setAnteriorsegRE({});
                  setCDratioLE([]);
                  setCDratioRE([]);
                  setGender([]);
                  setOccupation([]);
                  setAge([]);
                  setVitals({});
                  setIopRE([]);
                  setIopLE([]);
                  setDischarge([]);
                  setSocialHistory("");
                  setDrugHistory("");
                  setIndirectQuestions("");
                  setHistoryOptions({});
                  setName("");

                  setPage(1);
                }}
              >
                Start Over
              </button>
              <button className="button primary" onClick={() => setPage(18)}>
                Printout
              </button>
            </div>
            <p className="footer">DISCLAIMER: For Assessment Support Only</p>
          </div>
        )}
        {page === 18 && (
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: "1rem",
              }}
              className="no-print"
            >
              <button
                className="button primary"
                onClick={() => window.print()}
                style={{ marginRight: "1rem" }}
              >
                Print
              </button>
              <button
                className="button"
                onClick={() => {
                  setChiefComplaint("");
                  setAllergies("");
                  setDiagnosis("");
                  setConjunctiva("");
                  setVaRE([]);
                  setVaLE([]);
                  setFamilyMedicalHistory("");
                  setFamilyOcularHistory("");
                  setMedicalHistory("");
                  setOcularHistory("");
                  setPosteriorsegLE({});
                  setPosteriorsegRE({});
                  setAnteriorsegLE({});
                  setAnteriorsegRE({});
                  setCDratioLE([]);
                  setCDratioRE([]);
                  setGender([]);
                  setOccupation([]);
                  setAge([]);
                  setVitals({});
                  setIopRE([]);
                  setIopLE([]);
                  setDischarge([]);
                  setSocialHistory("");
                  setDrugHistory("");
                  setIndirectQuestions("");
                  setHistoryOptions({});
                  setName("");

                  setPage(1);
                }}
              >
                Start Over
              </button>
            </div>
            <div id="printout-content">
              <PrintoutPage
                data={{
                  name,
                  age: Age,
                  gender: Gender,
                  occupation: Ocupation,
                  chiefComplaint,
                  historyOptions,
                  ocularHistory,
                  medicalHistory,
                  allergies: Allergies,
                  drugHistory: DrugHistory,
                  socialHistory: SocialHistory,
                  familyOcularHistory,
                  familyMedicalHistory,
                  vitals: Vitals,
                  cdRatios: { right: CDratioRE, left: CDratioLE },
                  indirectQuestions: IndirectQuestions,
                  anteriorExam: [
                    ...Object.entries(AnteriorsegRE).flatMap(([k, v]) =>
                      Array.isArray(v)
                        ? v.map((val) => `RE ${k}: ${val}`)
                        : v
                        ? [`RE ${k}: ${v}`]
                        : []
                    ),
                    ...Object.entries(AnteriorsegLE).flatMap(([k, v]) =>
                      Array.isArray(v)
                        ? v.map((val) => `LE ${k}: ${val}`)
                        : v
                        ? [`LE ${k}: ${v}`]
                        : []
                    ),
                  ],
                  posteriorExam: [
                    ...Object.entries(PosteriorsegRE).flatMap(([k, v]) =>
                      Array.isArray(v)
                        ? v.map((val) => `RE ${k}: ${val}`)
                        : v
                        ? [`RE ${k}: ${v}`]
                        : []
                    ),
                    ...Object.entries(PosteriorsegLE).flatMap(([k, v]) =>
                      Array.isArray(v)
                        ? v.map((val) => `LE ${k}: ${val}`)
                        : v
                        ? [`LE ${k}: ${v}`]
                        : []
                    ),
                  ],
                  diagnosis,
                  // --- Add these lines for Near and Distance VA ---
                  distanceVA: { right: vaRE, left: vaLE },
                  nearVA: { right: NearVaRE, left: NearVaLE },
                }}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

// ...inside your main return, after all other page logic...
