/* 808jobs.org — data layer
 *
 * Generated from 808jobs_apprenticeships_v3.1.xlsx
 * To regenerate: edit the spreadsheet, re-export this file by hand or via build script.
 *
 * Schema:
 *   - programs: array of registered apprenticeships
 *   - pathways: array of non-obvious entry routes
 *   - funding: array of funding sources
 *   - status keys: open-now | rolling | annually | tbd | unknown | members | paused | wound-down
 *   - tier keys: verified-2026 | dlir-2021 | possibly-inactive
 */

window.DATA = {
  meta: {
    lastSweep: "2026-04-27",
    nextSweep: "2026-07-27",
    totalActiveApprentices: 5390,
    newRegistrations2024: 1556,
    completions2024: 488,
    sponsorCount: 67
  },

  programs: [
    /* ============================================================
       CONSTRUCTION (43 programs from Act 17 list rev 02/26/2026)
       ============================================================ */
    {
      id: "C-001", trade: "Boilermaker", sponsor: "Western States Area JAC (Boilermakers Local 627)",
      type: "union", islands: "Statewide (no HI training staff)",
      ojtHours: "6,000", lengthYears: "~3", minAge: 18, hsRequired: true, appFee: null,
      status: "unknown",
      statusNote: "HI office at 1414 Dillingham Blvd Rm 205. No training staff in HI per Act 17 list.",
      applyUrl: null, phone: "(808) 848-7744",
      lastVerified: "2026-02-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list (rev 02/26/2026).",
      pathways: [], featured: false
    },
    {
      id: "C-002", trade: "Bricklayer-Mason", sponsor: "JAC for Bricklayer-Mason (BAC Local 1)",
      type: "union", islands: "Oahu",
      ojtHours: "8,000", lengthYears: "~4", minAge: 16, hsRequired: true, appFee: null,
      status: "unknown",
      statusNote: "Address: 2251 N. School Street. Training Director: Patrick Nakayama (added 02/02/2026).",
      applyUrl: "https://www.bacweb.org", phone: "(808) 848-0565",
      lastVerified: "2026-02-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list (rev 02/26/2026).",
      pathways: [], featured: false
    },
    {
      id: "C-003", trade: "Carpenter", sponsor: "HCATF (Carpenters Local 745)",
      type: "union", islands: "All islands",
      ojtHours: "8,000", lengthYears: "~4", minAge: 17, hsRequired: true, appFee: null,
      status: "rolling",
      statusNote: "Neighbor islands rolling. Oahu opens twice/year. Beyond Bars + H2H + Career Connections (HS) + Mass Timber direct entry pathways.",
      applyUrl: "https://hicarpenterstraining.com/apply/", phone: "(808) 848-0794",
      lastVerified: "2026-04-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list (rev 02/26/2026) and direct sponsor research April 2026.",
      pathways: ["beyond-bars", "h2h-veterans", "mass-timber", "career-connections-hs", "sisters-in-brotherhood"],
      featured: true
    },
    {
      id: "C-004", trade: "Carpenter (non-union)", sponsor: "ABC Hawaii Apprenticeship Committee",
      type: "non-union", islands: "Oahu",
      ojtHours: "8,000", lengthYears: "~4", minAge: 18, hsRequired: true, appFee: null,
      status: "rolling",
      statusNote: "Address: 3049 Ualena Street Suite 410. Must be employed by ABC member 6+ continuous weeks. \"Building Hawaii Together\" cohorts (Castle Foundation funded).",
      applyUrl: "https://www.abchawaii.org/education/apprenticeship/", phone: "(808) 845-4887",
      lastVerified: "2026-02-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list (rev 02/26/2026).",
      pathways: ["abc-building-hawaii-together"], featured: true
    },
    {
      id: "C-005", trade: "Cement Finisher", sponsor: "JAC for Cement Finishers (OPCMIA Local 630 / BAC Local 1)",
      type: "union", islands: "Oahu",
      ojtHours: "8,000", lengthYears: "~4", minAge: 16, appFee: null,
      status: "unknown",
      statusNote: "Address: 2251 N. School Street. Training Director: Patrick Nakayama (eff 02/02/2026).",
      applyUrl: "https://www.opcmia.org/", phone: "(808) 848-0565",
      lastVerified: "2026-02-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list (rev 02/26/2026).",
      pathways: [], featured: false
    },
    {
      id: "C-006", trade: "Construction Craft Laborer", sponsor: "Hawaii Laborers JAC (LIUNA Local 368)",
      type: "union", islands: "Oahu (Pearl City)",
      ojtHours: "4,000", lengthYears: "~2", minAge: 18, hsRequired: true, driverLicense: true, appFee: null,
      status: "unknown",
      statusNote: "Pre-Construction Apprentice Evaluation Course required. Coordinator: Steven Hoke. NEW Nov 2025: Laumaka Work Furlough → Local 368 pipeline (4-day pre-app course inside facility).",
      applyUrl: "https://hiltp.org/construction/", phone: "(808) 455-7979",
      lastVerified: "2026-02-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list (rev 02/26/2026) plus November 2025 DCR partnership announcement.",
      pathways: ["laumaka-liuna"], featured: true
    },
    {
      id: "C-007", trade: "Construction Equipment Operator", sponsor: "Hawaii JAC for Operating Engineers (IUOE Local 3)",
      type: "union", islands: "All islands (per-island intake)",
      ojtHours: "6,000", lengthYears: "~3", minAge: 18, hsRequired: "Yes or C-test", driverLicense: true, appFee: null,
      status: "open-now",
      statusNote: "Kauai waitlist Mar 31, 2026 5pm HST. Oahu opens Jul 6-17, 2026. Per-island intakes every other year. 4-week unpaid POP class at Kahuku before dispatch.",
      applyUrl: "https://www.oe3.org/hawaii-training/", phone: "(808) 232-2001",
      lastVerified: "2026-04-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list (rev 02/26/2026) and direct sponsor research April 2026.",
      pathways: [], featured: true
    },
    {
      id: "C-008", trade: "Drywall, Acoustic & Lather Installer", sponsor: "HCATF (Carpenters Local 745)",
      type: "union", islands: "All islands",
      ojtHours: "8,000", lengthYears: "~4", minAge: 17, hsRequired: true, appFee: null,
      status: "rolling", statusNote: "Same intake as Carpenter.",
      applyUrl: "https://hicarpenterstraining.com/apply/", phone: "(808) 848-0794",
      lastVerified: "2026-02-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list (rev 02/26/2026).",
      pathways: ["beyond-bars", "h2h-veterans"], featured: false
    },
    {
      id: "C-009", trade: "Electrician (non-union)", sponsor: "ABC Hawaii Apprenticeship Committee",
      type: "non-union", islands: "Oahu",
      ojtHours: "10,000", lengthYears: "~5", minAge: 18, hsRequired: true,
      algebraRequired: "1 yr HS algebra", appFee: null,
      status: "rolling",
      statusNote: "Color blindness disqualifying. Must be employed by ABC member 6+ weeks.",
      applyUrl: "https://www.abchawaii.org/education/apprenticeship/", phone: "(808) 845-4887",
      lastVerified: "2026-02-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list (rev 02/26/2026).",
      pathways: ["abc-building-hawaii-together"], featured: false
    },
    {
      id: "C-010", trade: "Electrician — Inside Wireperson", sponsor: "Hawaii Electricians JATC (IBEW Local 1186)",
      type: "union", islands: "Oahu, Maui, Kauai, Big Island",
      ojtHours: "10,000", classroomHours: "800", lengthYears: "~5",
      minAge: 18, hsRequired: true, algebraRequired: "1 yr HS algebra or NJATC math",
      appFee: "No fee",
      status: "rolling",
      statusNote: "Pool of Eligible kept 2 yrs. Direct Entry for 3,500+ verified hours OR 2-yr electronics certificate. Castle Foundation pre-app credential = direct entry + up to 1 yr credit.",
      applyUrl: "https://www.hetf1186.org/recruitment", phone: "(808) 847-0629",
      lastVerified: "2026-04-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list (rev 02/26/2026) and direct sponsor research April 2026.",
      pathways: ["ibew-direct-entry", "ibew-pre-apprenticeship"], featured: true
    },
    {
      id: "C-011", trade: "Telecom / CATV Installer", sponsor: "Hawaii Electricians JATC (IBEW Local 1186)",
      type: "union", islands: "Oahu, Maui, Kauai, Big Island",
      ojtHours: "6,000", lengthYears: "~3", minAge: 18, hsRequired: true,
      algebraRequired: "1 yr HS algebra or NJATC math", appFee: "App fee req",
      status: "rolling", statusNote: "Online application. Same JATC as Inside Wireperson.",
      applyUrl: "https://www.hetf1186.org/recruitment", phone: "(808) 847-0629",
      lastVerified: "2026-04-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list (rev 02/26/2026).",
      pathways: [], featured: false
    },
    {
      id: "C-012", trade: "Elevator Constructor", sponsor: "IUEC Local 126 JAC",
      type: "union", islands: "Oahu",
      ojtHours: "6,800", lengthYears: "~3.5", minAge: 18, hsRequired: true, appFee: null,
      status: "unknown",
      statusNote: "Aptitude test (math, reading) + medical exam. Business Rep: Marc Yamane.",
      applyUrl: "https://www.iuec126.org/", phone: "(808) 536-8653",
      lastVerified: "2026-02-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list (rev 02/26/2026).",
      pathways: [], featured: false
    },
    {
      id: "C-013", trade: "Fire Sprinkler Fitter", sponsor: "JATC of UA Plumbers & Fitters Local 675 / PAMCAH",
      type: "union", islands: "All islands",
      ojtHours: "10,000", lengthYears: "~5", minAge: 17, hsRequired: true, driverLicense: true, appFee: null,
      status: "rolling",
      statusNote: "Continuous waiting list. plumbershawaii.com (was ua.org). Training Coordinator: Dean Kobashigawa. 30-day window to complete app.",
      applyUrl: "https://www.plumbershawaii.com/apprenticeship.php", phone: "(808) 456-0585",
      lastVerified: "2026-04-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list and research April 2026.",
      pathways: [], featured: false
    },
    {
      id: "C-014", trade: "Floor Layer", sponsor: "JATC for Floor Layers (Local 1926, DC50)",
      type: "union", islands: "Oahu",
      ojtHours: "8,000", lengthYears: "~4", minAge: 18, hsRequired: true, driverLicense: true, appFee: null,
      status: "rolling",
      statusNote: "Must distinguish colors. Now part of DC50; 2240 Young St. Coordinator: Paterno Asuncion. Aug 2025: pre-app pathway formally registered.",
      applyUrl: "https://www.dc50.org/", phone: "(808) 947-6606",
      lastVerified: "2026-02-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list plus August 2025 SAC minutes.",
      pathways: [], featured: false
    },
    {
      id: "C-015", trade: "Glazier", sponsor: "JAC for Glaziers (Local 1889, DC50)",
      type: "union", islands: "Oahu",
      ojtHours: "10,000", lengthYears: "~5", minAge: 18, hsRequired: true, driverLicense: true, appFee: null,
      status: "rolling",
      statusNote: "Same DC50 office. Training Coordinator: Freddie C. Bermudes (eff 12/26/2025). Aug 2025: pre-app pathway registered.",
      applyUrl: "https://www.dc50.org/", phone: "(808) 947-6606",
      lastVerified: "2026-02-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list plus August 2025 SAC minutes.",
      pathways: [], featured: false
    },
    {
      id: "C-016", trade: "Hazardous Waste Material Tech", sponsor: "Hawaii Laborers Local 368",
      type: "union", islands: "Oahu (Pearl City)",
      ojtHours: "4,000", lengthYears: "~2", minAge: 18, hsRequired: true, driverLicense: true, appFee: null,
      status: "unknown",
      statusNote: "Pre-Evaluation course required. Same office as Construction Craft Laborer.",
      applyUrl: "https://hiltp.org/", phone: "(808) 455-7979",
      lastVerified: "2026-02-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list (rev 02/26/2026).",
      pathways: [], featured: false
    },
    {
      id: "C-017", trade: "Insulation Worker", sponsor: "Insulators Local 132 JATC",
      type: "union", islands: "Oahu (Kapolei)",
      ojtHours: "10,000", lengthYears: "~5", minAge: 18, hsRequired: true, appFee: null,
      status: "unknown",
      statusNote: "Trade renamed in Act 17 list (formerly Heat & Frost Asbestos Insulator). Coordinator: Bernard Alvarez.",
      applyUrl: "https://www.insulators.org/", phone: "(808) 521-6405",
      lastVerified: "2026-02-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list (rev 02/26/2026).",
      pathways: [], featured: false
    },
    {
      id: "C-018", trade: "Heavy Duty Repairman & Welder", sponsor: "Hawaii JAC for Operating Engineers (IUOE Local 3)",
      type: "union", islands: "All islands",
      ojtHours: "8,000", lengthYears: "~4", minAge: 18, hsRequired: "Yes or C-test", driverLicense: true, appFee: null,
      status: "open-now", statusNote: "Same intake as Construction Equipment Operator.",
      applyUrl: "https://www.oe3.org/hawaii-training/", phone: "(808) 232-2001",
      lastVerified: "2026-04-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list and research April 2026.",
      pathways: [], featured: false
    },
    {
      id: "C-019", trade: "Ironworker — Shop Fabricator/Welder", sponsor: "Hawaii Shopmen's Local 803 JATC",
      type: "union", islands: "Oahu (Waipahu)",
      ojtHours: "8,000", lengthYears: "~4", minAge: 18, hsRequired: true, appFee: null,
      status: "unknown", statusNote: "Must be sponsored by signatory employer. JATC Chair: Daniel Woo.",
      applyUrl: "https://www.ironworkers.org/", phone: "(808) 671-4344",
      lastVerified: "2026-02-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list (rev 02/26/2026).",
      pathways: [], featured: false
    },
    {
      id: "C-020", trade: "Ironworker — Reinforcing", sponsor: "JAC for Ironworkers Reinforcing (Local 625)",
      type: "union", islands: "Oahu (Waipahu)",
      ojtHours: "6,000", lengthYears: "~3", minAge: 16, appFee: null,
      status: "unknown", statusNote: "Training Coordinator: Lincoln P. Naiwi, Jr.",
      applyUrl: "https://www.ironworkers.org/", phone: "(808) 671-8225",
      lastVerified: "2026-02-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list (rev 02/26/2026).",
      pathways: [], featured: false
    },
    {
      id: "C-021", trade: "Ironworker — Structural", sponsor: "JAC for Ironworkers Structural (Local 625)",
      type: "union", islands: "Oahu (Waipahu)",
      ojtHours: "6,000", lengthYears: "~3", minAge: 16, appFee: null,
      status: "unknown", statusNote: "Training Coordinator: Lincoln P. Naiwi, Jr.",
      applyUrl: "https://www.ironworkers.org/", phone: "(808) 671-8225",
      lastVerified: "2026-02-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list (rev 02/26/2026).",
      pathways: [], featured: false
    },
    {
      id: "C-022", trade: "Landscape & Irrigation Laborer", sponsor: "Hawaii Laborers Local 368",
      type: "union", islands: "Oahu (Pearl City)",
      ojtHours: "4,000", lengthYears: "~2", minAge: 18, hsRequired: "Yes or 10th grade",
      driverLicense: true, appFee: null,
      status: "unknown", statusNote: "Pre-Landscape Evaluation Course required.",
      applyUrl: "https://hiltp.org/", phone: "(808) 455-7979",
      lastVerified: "2026-02-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list (rev 02/26/2026).",
      pathways: [], featured: false
    },
    {
      id: "C-023", trade: "Lineman (IBEW 1186)", sponsor: "Hawaii Electricians JATC (IBEW Local 1186)",
      type: "union", islands: "All islands",
      ojtHours: "7,000", lengthYears: "~3.5", minAge: 18, hsRequired: true,
      algebraRequired: "1 yr HS algebra or NJATC math", driverLicense: true, appFee: "App fee req",
      status: "rolling", statusNote: "US citizenship required for military base work.",
      applyUrl: "https://www.hetf1186.org/recruitment", phone: "(808) 847-0629",
      lastVerified: "2026-04-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list and research April 2026.",
      pathways: [], featured: false
    },
    {
      id: "C-024", trade: "Lineman (IBEW 1260 utility)", sponsor: "IBEW Local 1260",
      type: "union", islands: "Statewide (HECO/MECO/HELCO/KIUC service territories)",
      ojtHours: "7,000", lengthYears: "~3.5", minAge: 18, hsRequired: true,
      algebraRequired: "1 yr algebra 70%+", driverLicense: true, appFee: null,
      status: "unknown",
      statusNote: "Address: 700 Bishop Street Suite 1600. Business Rep: Patrick Sullivan.",
      applyUrl: "https://www.ibew1260.org", phone: "(808) 941-9445",
      lastVerified: "2026-02-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list (rev 02/26/2026).",
      pathways: [], featured: false
    },
    {
      id: "C-025", trade: "Millwright", sponsor: "HCATF (Carpenters Local 745)",
      type: "union", islands: "All islands",
      ojtHours: "8,000", lengthYears: "~4", minAge: 17, hsRequired: true, appFee: null,
      status: "rolling", statusNote: "Same intake as Carpenter. Director: Edmund C. Aczon.",
      applyUrl: "https://hicarpenterstraining.com/apply/", phone: "(808) 848-0794",
      lastVerified: "2026-02-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list (rev 02/26/2026).",
      pathways: ["beyond-bars", "h2h-veterans"], featured: false
    },
    {
      id: "C-026", trade: "Painter", sponsor: "JATC for Painters (IUPAT Local 1791, DC50)",
      type: "union", islands: "Oahu",
      ojtHours: "8,000", lengthYears: "~4", minAge: 18, hsRequired: true,
      driverLicense: true, appFee: null,
      status: "rolling",
      statusNote: "Color-vision test + entry math/vocab test. Coordinators: Poʻokela Banis-Chun, Garrett Russell. Aug 2025: pre-app pathway registered.",
      applyUrl: "https://www.dc50.org/", phone: "(808) 947-6606",
      lastVerified: "2026-02-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list plus August 2025 SAC minutes.",
      pathways: [], featured: false
    },
    {
      id: "C-027", trade: "Painter (non-union)", sponsor: "ABC Hawaii Apprenticeship Committee",
      type: "non-union", islands: "Oahu",
      ojtHours: "8,000", lengthYears: "~4", minAge: 18, appFee: null,
      status: "rolling", statusNote: "Must be employed by ABC member 6+ weeks.",
      applyUrl: "https://www.abchawaii.org/education/apprenticeship/", phone: "(808) 845-4887",
      lastVerified: "2026-02-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list (rev 02/26/2026).",
      pathways: [], featured: false
    },
    {
      id: "C-030", trade: "Paving Equipment Operator", sponsor: "Hawaii JAC for Operating Engineers (IUOE Local 3)",
      type: "union", islands: "All islands",
      ojtHours: "4,000", lengthYears: "~2", minAge: 18, hsRequired: "Yes or C-test",
      driverLicense: "Required (HI address)", appFee: null,
      status: "open-now", statusNote: "Same intake as other OE3 trades.",
      applyUrl: "https://www.oe3.org/hawaii-training/", phone: "(808) 232-2001",
      lastVerified: "2026-04-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list and research April 2026.",
      pathways: [], featured: false
    },
    {
      id: "C-031", trade: "Plasterer", sponsor: "JAC for Plasterers (OPCMIA Local 630)",
      type: "union", islands: "Oahu",
      ojtHours: "8,000", lengthYears: "~4", minAge: 16, appFee: null,
      status: "unknown",
      statusNote: "Address: 2251 N. School Street. Training Director: Patrick Nakayama (eff 02/02/2026).",
      applyUrl: "https://www.opcmia.org/", phone: "(808) 845-0565",
      lastVerified: "2026-02-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list (rev 02/26/2026).",
      pathways: [], featured: false
    },
    {
      id: "C-032", trade: "Plumber", sponsor: "JATC of UA Plumbers & Fitters Local 675 / PAMCAH",
      type: "union", islands: "All islands",
      ojtHours: "10,000", lengthYears: "~5", minAge: 17, hsRequired: true, driverLicense: true, appFee: null,
      status: "rolling",
      statusNote: "Continuous waiting list. Federally recognized as one of three top programs nationwide. Training Coordinator: Dean Kobashigawa.",
      applyUrl: "https://www.plumbershawaii.com/apprenticeship.php", phone: "(808) 456-0585",
      lastVerified: "2026-04-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list and research April 2026.",
      pathways: [], featured: true
    },
    {
      id: "C-033", trade: "Plumber (non-union)", sponsor: "ABC Hawaii Apprenticeship Committee",
      type: "non-union", islands: "Oahu",
      ojtHours: "10,000", lengthYears: "~5", minAge: 18, appFee: null,
      status: "rolling", statusNote: "Must be employed by ABC member 6+ weeks.",
      applyUrl: "https://www.abchawaii.org/education/apprenticeship/", phone: "(808) 845-4887",
      lastVerified: "2026-02-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list (rev 02/26/2026).",
      pathways: [], featured: false
    },
    {
      id: "C-034", trade: "Pointer-Caulker-Weatherproofer", sponsor: "JAC for Pointer-Caulker-Weatherproofer (BAC Local 1)",
      type: "union", islands: "Oahu",
      ojtHours: "6,000", lengthYears: "~3", minAge: 16, hsRequired: true, appFee: null,
      status: "unknown", statusNote: "Address: 2251 N. School Street.",
      applyUrl: "https://www.bacweb.org", phone: "(808) 848-0585",
      lastVerified: "2026-02-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list (rev 02/26/2026).",
      pathways: [], featured: false
    },
    {
      id: "C-035", trade: "Refrigeration & Air-Conditioning", sponsor: "JATC of UA Plumbers & Fitters Local 675 / PAMCAH",
      type: "union", islands: "All islands",
      ojtHours: "10,000", lengthYears: "~5", minAge: 17, hsRequired: true, driverLicense: true, appFee: null,
      status: "rolling", statusNote: "Continuous waiting list.",
      applyUrl: "https://www.plumbershawaii.com/apprenticeship.php", phone: "(808) 456-0585",
      lastVerified: "2026-04-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list and research April 2026.",
      pathways: [], featured: false
    },
    {
      id: "C-036", trade: "Roofer", sponsor: "JATC for Roofers (Local 221)",
      type: "union", islands: "Oahu",
      ojtHours: "8,000", lengthYears: "~4", minAge: 17, hsRequired: true, driverLicense: true, appFee: null,
      status: "unknown", statusNote: "Must lift 100 lbs. Training Director: Enrique K. Subiono.",
      applyUrl: "https://www.unionroofers.com", phone: "(808) 847-5757",
      lastVerified: "2026-02-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list (rev 02/26/2026).",
      pathways: [], featured: false
    },
    {
      id: "C-037", trade: "Roofer (non-union)", sponsor: "ABC Hawaii Apprenticeship Committee",
      type: "non-union", islands: "Oahu",
      ojtHours: "7,000", lengthYears: "~3.5", minAge: 18, appFee: null,
      status: "rolling", statusNote: "Must be employed by ABC member 6+ weeks.",
      applyUrl: "https://www.abchawaii.org/education/apprenticeship/", phone: "(808) 845-4887",
      lastVerified: "2026-02-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list (rev 02/26/2026).",
      pathways: [], featured: false
    },
    {
      id: "C-038", trade: "Sheet Metal Worker", sponsor: "Hawaii JAC for Sheet Metal Industry (SMW Local 293)",
      type: "union", islands: "Oahu",
      ojtHours: "10,000", lengthYears: "~5", minAge: 18, hsRequired: true, driverLicense: true, appFee: null,
      status: "unknown", statusNote: "Industry test required. Training Coordinator: Burton Takafuji.",
      applyUrl: "https://www.smwia.org/", phone: "(808) 841-6106",
      lastVerified: "2026-02-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list (rev 02/26/2026).",
      pathways: [], featured: false
    },
    {
      id: "C-039", trade: "Steamfitter / Welder", sponsor: "JATC of UA Plumbers & Fitters Local 675 / PAMCAH",
      type: "union", islands: "All islands",
      ojtHours: "10,000", lengthYears: "~5", minAge: 17, hsRequired: true, driverLicense: true, appFee: null,
      status: "rolling", statusNote: "Continuous waiting list.",
      applyUrl: "https://www.plumbershawaii.com/apprenticeship.php", phone: "(808) 456-0585",
      lastVerified: "2026-04-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list and research April 2026.",
      pathways: [], featured: false
    },
    {
      id: "C-040", trade: "Stone Mason", sponsor: "JAC for Stone Mason Industry (BAC Local 1)",
      type: "union", islands: "Oahu",
      ojtHours: "8,000", lengthYears: "~4", minAge: 16, hsRequired: true, appFee: null,
      status: "unknown", statusNote: "Address: 2251 N. School Street.",
      applyUrl: "https://www.bacweb.org", phone: "(808) 848-0585",
      lastVerified: "2026-02-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list (rev 02/26/2026).",
      pathways: [], featured: false
    },
    {
      id: "C-041", trade: "Taper", sponsor: "JAC for Tapers (IUPAT Tapers Local 1944, DC50)",
      type: "union", islands: "Oahu",
      ojtHours: "8,000", lengthYears: "~4", minAge: 18, hsRequired: true, driverLicense: true, appFee: null,
      status: "rolling",
      statusNote: "Now part of DC50. Training Coordinator: Garrett Russell. Aug 2025: pre-app pathway registered.",
      applyUrl: "https://www.dc50.org/", phone: "(808) 947-6606",
      lastVerified: "2026-02-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list plus August 2025 SAC minutes.",
      pathways: [], featured: false
    },
    {
      id: "C-042", trade: "Tile Setter", sponsor: "JAC for Tile Setters (BAC Local 1)",
      type: "union", islands: "Oahu",
      ojtHours: "8,000", lengthYears: "~4", minAge: 16, hsRequired: true, appFee: null,
      status: "unknown", statusNote: "Address: 2251 N. School Street.",
      applyUrl: "https://www.bacweb.org", phone: "(808) 848-0565",
      lastVerified: "2026-02-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list (rev 02/26/2026).",
      pathways: [], featured: false
    },
    {
      id: "C-043", trade: "Truck Operator", sponsor: "Hawaii JAC for Operating Engineers (IUOE Local 3)",
      type: "union", islands: "All islands",
      ojtHours: "2,000", lengthYears: "~1", minAge: 18, hsRequired: "Yes or C-test", driverLicense: true, appFee: null,
      status: "open-now", statusNote: "Same intake as other OE3 trades.",
      applyUrl: "https://www.oe3.org/hawaii-training/", phone: "(808) 232-2001",
      lastVerified: "2026-04-26", tier: "verified-2026",
      tierNote: "Confirmed via Act 17 list and research April 2026.",
      pathways: [], featured: false
    },

    /* ============================================================
       FEDERAL APPRENTICESHIPS
       ============================================================ */
    {
      id: "F-001", trade: "Pearl Harbor Naval Shipyard Apprentice",
      sponsor: "Pearl Harbor Naval Shipyard & IMF / DoD",
      type: "federal", islands: "Oahu (Pearl Harbor)",
      ojtHours: "7,200+", lengthYears: "~4", minAge: 18, hsRequired: true, appFee: "No fee",
      status: "annually",
      statusNote: "~100-200/yr. Apply via USAJOBS, capped at 2,000-2,500 applicants. Trades: shipfitter, machinist, electrician, electronics, pipefitter, painter, rigger. $17/hr starting + paid AAS from HonCC. 4-yr Continued Service Agreement. Next cycle 2027 cohort.",
      applyUrl: "https://acep.hawaii.navy.mil", phone: null,
      lastVerified: "2026-04-26", tier: "verified-2026",
      tierNote: "Confirmed via direct research April 2026.",
      pathways: [], featured: true
    },
    {
      id: "F-002", trade: "NAVFAC Hawaii Apprentice (Navy public-works trades)",
      sponsor: "NAVFAC Hawaii / DoD",
      type: "federal", islands: "Oahu",
      lengthYears: "~4", minAge: 18, hsRequired: true, appFee: "No fee",
      status: "annually",
      statusNote: "Modeled on NAVFAC Southwest 2.0. 4-yr DOL-registered. Recruited via USAJOBS + direct hiring events (Apr 30, 2026 Ala Moana Hotel job fair scheduled).",
      applyUrl: "https://www.navfac.navy.mil/Business-Lines/Public-Works/Pacific/", phone: null,
      lastVerified: "2026-04-26", tier: "verified-2026",
      tierNote: "Apprenticeship.gov public-service list, research April 2026.",
      pathways: [], featured: true
    },
    {
      id: "F-003", trade: "USMAP (United Services Military Apprenticeship)",
      sponsor: "U.S. Navy / Marines / Coast Guard / Space Force",
      type: "federal", islands: "Hawaii bases (active duty only)",
      ojtHours: "2,000+", lengthYears: "~1-4", appFee: "No fee",
      status: "open-now",
      statusNote: "100+ trades. DOL Certificate of Completion at journeyworker level. Open to active-duty service members assigned to HI. Single largest registered apprenticeship vehicle on HI bases.",
      applyUrl: "https://usmap.osd.mil/", phone: null,
      lastVerified: "2026-04-26", tier: "verified-2026",
      tierNote: "Confirmed via Apprenticeship.gov April 2026.",
      pathways: [], featured: false
    },
    {
      id: "F-004", trade: "VA Pacific Islands Health Care System (250+ trainee positions)",
      sponsor: "U.S. Department of Veterans Affairs",
      type: "federal", islands: "Oahu, Maui, Kauai, Big Island, Guam, Saipan",
      lengthYears: "~1-4", hsRequired: "BA / clinical degree", appFee: null,
      status: "annually",
      statusNote: "12 sites including the new Daniel K. Akaka CBOC Kapolei (opened Apr 2024). Students/interns/residents/fellows annually.",
      applyUrl: "https://www.va.gov/pacific-islands-health-care/", phone: null,
      lastVerified: "2026-04-26", tier: "verified-2026",
      tierNote: "Research-confirmed April 2026.",
      pathways: [], featured: false
    },

    /* ============================================================
       NEW REGISTERED APPRENTICESHIPS (2023-2025)
       ============================================================ */
    {
      id: "N-001", trade: "Hawaii Teacher Registered Apprenticeship (K-12)",
      sponsor: "Hawaii Teachers Standards Board",
      type: "state", islands: "Statewide",
      lengthYears: "~4", hsRequired: "BA-track", appFee: "No fee",
      status: "unknown",
      statusNote: "April 27, 2026: HTSB main line voicemail outdated 5+ months. Try alternate routes: UH Mānoa COE (808) 956-7703, HIDOE (808) 784-6200, or DLIR-WDD (808) 586-8877. Cannot confirm 2026 application status.",
      applyUrl: "https://hawaiiteacherstandardsboard.org/", phone: "(808) 784-5580",
      altRoutes: [
        { label: "UH Mānoa College of Education", phone: "(808) 956-7703" },
        { label: "HIDOE main info line", phone: "(808) 784-6200" },
        { label: "DLIR Workforce Development Division", phone: "(808) 586-8877" }
      ],
      lastVerified: "2026-04-27", tier: "verified-2026",
      tierNote: "SAC minutes Mar 11, 2025 confirm program exists with 142 enrolled. Verification of 2026 intake stalled by outdated HTSB voicemail.",
      pathways: [], featured: true, newProgram: true
    },
    {
      id: "N-002", trade: "Early Childhood Educator RAP",
      sponsor: "Keiki O Ka 'Aina Family Learning Centers (KOKA) + Honolulu CC",
      type: "non-union", islands: "Oahu",
      lengthYears: "~3", minAge: 18, hsRequired: true, appFee: "No fee",
      status: "open-now",
      statusNote: "Three-tier wage progression starting $17/hr. CDA → ECE Certificate → AS-ECE pathway. Hawaii's first ECE registered apprenticeship.",
      applyUrl: "https://coe.hawaii.edu/ece3/apprenticeship-program/", phone: null,
      lastVerified: "2026-04-26", tier: "verified-2026",
      tierNote: "SAC minutes May 30, 2023 confirm approval. Research April 2026.",
      pathways: [], featured: true, newProgram: true
    },
    {
      id: "N-003", trade: "IT Help Desk Support Technician RAP",
      sponsor: "PCATT at Honolulu CC",
      type: "non-union", islands: "Oahu",
      ojtHours: "2,000", lengthYears: "~1", minAge: 18, hsRequired: true, appFee: "No fee",
      status: "open-now",
      statusNote: "CompTIA A+ + Cisco-certified curriculum. Wages $22.50→$25.50→$30.00. Initial signatory employers: InTech Hawaii, Hawaii Tech Support.",
      applyUrl: "https://pcatt.honolulu.hawaii.edu/", phone: "(808) 845-9296",
      lastVerified: "2026-04-26", tier: "verified-2026",
      tierNote: "SAC minutes December 2024 confirm approval.",
      pathways: [], featured: true, newProgram: true
    },
    {
      id: "N-004", trade: "Arborist RAP", sponsor: "High Regard Tree Service",
      type: "non-union", islands: "Oahu (likely)",
      ojtHours: "6,000", classroomHours: "440", lengthYears: "~3",
      minAge: 18, hsRequired: true, appFee: null,
      status: "unknown",
      statusNote: "HI's first arborist apprenticeship. TCIA module curriculum reviewed by Honolulu CC. Approved Aug 27, 2025.",
      applyUrl: null, phone: null,
      lastVerified: "2026-04-26", tier: "verified-2026",
      tierNote: "SAC minutes August 27, 2025 confirm approval.",
      pathways: [], featured: false, newProgram: true
    },
    {
      id: "N-005", trade: "Pharmacy Technician RAP (revised)", sponsor: "CVS Health",
      type: "non-union", islands: "Multiple HI locations",
      ojtHours: "2,000", lengthYears: "~1", minAge: 16, hsRequired: true, appFee: null,
      status: "open-now",
      statusNote: "Standards revised Mar 11, 2025: start wage raised to $16/hr, prior tiers consolidated. Background and drug screen required.",
      applyUrl: "https://www.cvshealth.com", phone: null,
      lastVerified: "2026-04-26", tier: "verified-2026",
      tierNote: "SAC minutes March 11, 2025 (standards revision).",
      pathways: [], featured: false
    },
    {
      id: "N-006", trade: "Advanced Manufacturing Training Program",
      sponsor: "Honolulu Community College",
      type: "non-union", islands: "Oahu",
      lengthYears: "~1-2", minAge: 18, hsRequired: true, appFee: null,
      status: "open-now",
      statusNote: "HI's first AMTP. Built with DoD Industrial Base Analysis & Sustainment + \"Kuʻi Hao\" defense-readiness initiative. Launched 2025.",
      applyUrl: "https://www.honolulu.hawaii.edu/", phone: null,
      lastVerified: "2026-04-26", tier: "verified-2026",
      tierNote: "Research-confirmed 2025 launch.",
      pathways: [], featured: false, newProgram: true
    },
    {
      id: "N-008", trade: "Production Arts Technical Training",
      sponsor: "Hawaiian Council (CNHA) + Hawaiʻi Stage",
      type: "non-union", islands: "Oahu",
      lengthYears: "~1", minAge: 18, hsRequired: true, appFee: null,
      status: "annually",
      statusNote: "Inaugural cohort June 6, 2025: 18 students with stage/lighting/sound certifications. Cohort-based.",
      applyUrl: "https://www.hawaiiancouncil.org/", phone: "(808) 596-8155",
      lastVerified: "2026-04-26", tier: "verified-2026",
      tierNote: "Research-confirmed June 2025.",
      pathways: [], featured: false, newProgram: true
    },

    /* ============================================================
       NON-CONSTRUCTION (City & County of Honolulu)
       ============================================================ */
    {
      id: "NC-001", trade: "Bridge Highway Construction Carpenter",
      sponsor: "City & County of Honolulu JAC (UPW Local 646)",
      type: "union", islands: "Oahu",
      ojtHours: "5,400", lengthYears: "~3", minAge: 16, appFee: null,
      status: "tbd", statusNote: "Civil Service recruitment. Sign up for Job Interest Card.",
      applyUrl: "https://www.honolulu.gov/dhr/trades-apprenticeship-program/", phone: "(808) 768-8536",
      lastVerified: "2026-04-26", tier: "verified-2026",
      tierNote: "Confirmed via direct research April 2026.",
      pathways: [], featured: false
    },
    {
      id: "NC-002", trade: "Fleet Mechanic III",
      sponsor: "City & County of Honolulu JAC (UPW Local 646)",
      type: "union", islands: "Oahu",
      ojtHours: "8,052", lengthYears: "~4", minAge: 16, appFee: null,
      status: "tbd", statusNote: "Civil Service recruitment.",
      applyUrl: "https://www.honolulu.gov/dhr/trades-apprenticeship-program/", phone: "(808) 768-8536",
      lastVerified: "2026-04-26", tier: "verified-2026",
      tierNote: "Confirmed via direct research April 2026.",
      pathways: [], featured: false
    },
    {
      id: "NC-004", trade: "Line Electrician (City)",
      sponsor: "City & County of Honolulu JAC (UPW Local 646)",
      type: "union", islands: "Oahu",
      ojtHours: "10,000", lengthYears: "~5", minAge: 16, appFee: null,
      status: "tbd", statusNote: "Civil Service recruitment.",
      applyUrl: "https://www.honolulu.gov/dhr/trades-apprenticeship-program/", phone: "(808) 768-8536",
      lastVerified: "2026-04-26", tier: "verified-2026",
      tierNote: "Confirmed via direct research April 2026.",
      pathways: [], featured: false
    },
    {
      id: "NC-005", trade: "Pipefitter (City)",
      sponsor: "City & County of Honolulu JAC (UPW Local 646)",
      type: "union", islands: "Oahu",
      ojtHours: "5,400", lengthYears: "~3", minAge: 16, appFee: null,
      status: "tbd", statusNote: "Civil Service recruitment.",
      applyUrl: "https://www.honolulu.gov/dhr/trades-apprenticeship-program/", phone: "(808) 768-8536",
      lastVerified: "2026-04-26", tier: "verified-2026",
      tierNote: "Confirmed via direct research April 2026.",
      pathways: [], featured: false
    },
    {
      id: "NC-006", trade: "Traffic Signal Electrician",
      sponsor: "City & County of Honolulu JAC (UPW Local 646)",
      type: "union", islands: "Oahu",
      ojtHours: "10,000", lengthYears: "~5", minAge: 16, appFee: null,
      status: "tbd", statusNote: "Civil Service recruitment.",
      applyUrl: "https://www.honolulu.gov/dhr/trades-apprenticeship-program/", phone: "(808) 768-8536",
      lastVerified: "2026-04-26", tier: "verified-2026",
      tierNote: "Confirmed via direct research April 2026.",
      pathways: [], featured: false
    },

    /* ============================================================
       HEALTHCARE
       ============================================================ */
    {
      id: "NC-100", trade: "Medical Assistant RAP",
      sponsor: "Queen's Health Systems + Kapiʻolani CC",
      type: "non-union", islands: "Oahu",
      ojtHours: "2,000", classroomHours: "33 college credits", lengthYears: "~1",
      minAge: 17, hsRequired: true, appFee: null,
      status: "annually",
      statusNote: "12-month MAERB-accredited program. Sit for AAMA CMA exam. Approved 2019, ACTIVE.",
      applyUrl: "https://www.queensmedicalcenter.org", phone: "(808) 691-5198",
      lastVerified: "2026-04-26", tier: "verified-2026",
      tierNote: "Confirmed via direct research April 2026.",
      pathways: [], featured: true
    },
    {
      id: "NC-101", trade: "Nurse Aide RAP", sponsor: "Ohana Pacific Health",
      type: "non-union", islands: "Oahu",
      lengthYears: "~1", minAge: 18, hsRequired: true, appFee: null,
      status: "open-now",
      statusNote: "Registered Nurse Aide apprenticeship. Companion CNA→LPN Bridge with UHMC.",
      applyUrl: "https://www.ohanapacific.com/career-development", phone: null,
      lastVerified: "2026-04-26", tier: "verified-2026",
      tierNote: "Confirmed via direct research April 2026.",
      pathways: [], featured: true
    },
    {
      id: "NC-102", trade: "Hawaii Nurse Transition to Practice (HNTP)",
      sponsor: "Hawaiʻi State Center for Nursing",
      type: "non-union", islands: "Statewide",
      lengthYears: "~1", minAge: 21, hsRequired: "BSN", appFee: null,
      status: "open-now",
      statusNote: "Nation's first state-level nurse residency consortium. Adventist Castle, all 4 HPH facilities, Kaiser Moanalua, Hilo Benioff, Maui Memorial, Kona Community, Kauai Veterans, Ohana Pacific, Hale Makua, Queen's, Molokai General.",
      applyUrl: "https://www.hawaiicenterfornursing.org/collaboratives/hntp/", phone: null,
      lastVerified: "2026-04-26", tier: "verified-2026",
      tierNote: "Confirmed via direct research April 2026.",
      pathways: [], featured: false
    },
    {
      id: "NC-103", trade: "Community Health Worker", sponsor: "ALEA Bridge",
      type: "non-union", islands: "Oahu",
      ojtHours: "2,000-2,235", lengthYears: "~1", minAge: 17, hsRequired: true, appFee: null,
      status: "unknown", statusNote: "",
      applyUrl: "https://www.aleabridge.org", phone: "(808) 391-3571",
      lastVerified: "2021-01-20", tier: "dlir-2021",
      tierNote: "Last DLIR-confirmed January 2021. We have not independently verified this program is still accepting applicants. Please call to confirm before applying.",
      pathways: [], featured: false
    },
    {
      id: "NC-108", trade: "Phlebotomist", sponsor: "Clinical Laboratories of Hawaii",
      type: "non-union", islands: "Oahu (Aiea)",
      ojtHours: "2,000", lengthYears: "~1", minAge: 17, hsRequired: true, appFee: null,
      status: "unknown", statusNote: "Clinical Labs of Hawaii hires phlebotomists directly. Whether the formal registered apprenticeship is still active is not independently verified — call to confirm.",
      applyUrl: "https://www.clinicallabs.com/careers/", phone: "(808) 961-7702",
      lastVerified: "2021-01-20", tier: "dlir-2021",
      tierNote: "Last DLIR-confirmed January 2021. We have not independently verified this program is still accepting applicants. Please call to confirm before applying.",
      pathways: [], featured: false
    },
    {
      id: "NC-109", trade: "Phlebotomist", sponsor: "Diagnostic Laboratory Services",
      type: "non-union", islands: "Oahu (Aiea)",
      ojtHours: "2,000", lengthYears: "~1", minAge: 17, hsRequired: true, appFee: null,
      status: "unknown", statusNote: "Diagnostic Lab Services hires phlebotomists directly. Whether the formal registered apprenticeship is still active is not independently verified — call to confirm.",
      applyUrl: "https://dlslab.com/education/", phone: "(808) 589-5247",
      lastVerified: "2021-01-20", tier: "dlir-2021",
      tierNote: "Last DLIR-confirmed January 2021. We have not independently verified this program is still accepting applicants. Please call to confirm before applying.",
      pathways: [], featured: false
    },
    {
      id: "NC-112", trade: "Certified Nurse Aide", sponsor: "Windward Community College",
      type: "non-union", islands: "Oahu (Kaneohe)",
      ojtHours: "2,000", lengthYears: "~1", minAge: 18, hsRequired: "TABE 9th grade", appFee: null,
      status: "unknown", statusNote: "Must be hired by healthcare employer.",
      applyUrl: "https://www.windward.hawaii.edu", phone: "(808) 235-7384",
      lastVerified: "2021-01-20", tier: "dlir-2021",
      tierNote: "Last DLIR-confirmed January 2021.",
      pathways: [], featured: false
    },
    {
      id: "NC-114", trade: "Nursing Assistant", sponsor: "Hale Makua Health Services",
      type: "non-union", islands: "Maui (Kahului)",
      ojtHours: "2,000", lengthYears: "~1", hsRequired: "Preferred", appFee: null,
      status: "unknown", statusNote: "",
      applyUrl: "https://www.halemakua.org/careers", phone: "(808) 877-2761",
      lastVerified: "2021-01-20", tier: "dlir-2021",
      tierNote: "Last DLIR-confirmed January 2021.",
      pathways: [], featured: false
    },

    /* ============================================================
       CULINARY / HOSPITALITY
       ============================================================ */
    {
      id: "NC-200", trade: "Culinary Arts Apprenticeship (ACF)",
      sponsor: "Kapiʻolani CC Culinary Apprenticeship",
      type: "non-union", islands: "Oahu",
      lengthYears: "~3", minAge: 17, hsRequired: true, appFee: "$137 ACF + $75 CdC",
      status: "open-now",
      statusNote: "3-year ACF-registered. Prerequisites: CULN 110/120. Yields ACF Certified Culinarian. Coordinator: Mark Okumura, om2@hawaii.edu.",
      applyUrl: "https://culinary.kapiolani.hawaii.edu/culinary-apprenticeship-program/", phone: "(808) 734-9485",
      lastVerified: "2026-04-26", tier: "verified-2026",
      tierNote: "Confirmed via direct research April 2026.",
      pathways: [], featured: false
    },
    {
      id: "NC-500", trade: "HARIETT Hospitality Trades (10 trades)",
      sponsor: "HARIETT JAC (UNITE HERE Local 5)",
      type: "union", islands: "All islands",
      ojtHours: "6,000-10,000", lengthYears: "~3-5", minAge: 18, hsRequired: true, appFee: null,
      status: "members",
      statusNote: "MEMBERS-ONLY: existing UNITE HERE Local 5 hospitality workers. Not an entry pathway. HARIETT pre-apprenticeship may be open to non-members; verify.",
      applyUrl: "https://www.hariett.org", phone: "(808) 380-6020",
      lastVerified: "2026-04-26", tier: "verified-2026",
      tierNote: "Confirmed members-only status April 2026.",
      pathways: [], featured: false
    },

    /* ============================================================
       IT / TECH
       ============================================================ */
    {
      id: "NC-300", trade: "Web Application Developer", sponsor: "DevLeague LLC",
      type: "non-union", islands: "Oahu",
      ojtHours: "2,000", lengthYears: "~1", minAge: 18, appFee: null,
      status: "unknown", statusNote: "",
      applyUrl: "https://www.devleague.com", phone: "(808) 859-0917",
      lastVerified: "2021-01-20", tier: "dlir-2021",
      tierNote: "Last DLIR-confirmed January 2021. We have not independently verified this program is still accepting applicants. Please call to confirm before applying.",
      pathways: [], featured: false
    },
    {
      id: "NC-302", trade: "Software Developer/Programmer",
      sponsor: "Hawaii Medical Service Association (HMSA)",
      type: "non-union", islands: "Oahu",
      ojtHours: "2,000-4,000", lengthYears: "~1-2", minAge: 18,
      hsRequired: "Associate or 2 yrs Bachelor's", appFee: null,
      status: "unknown", statusNote: "Competency-based.",
      applyUrl: "https://www.hmsa.com/careers/", phone: "(808) 948-5133",
      lastVerified: "2021-01-20", tier: "dlir-2021",
      tierNote: "Last DLIR-confirmed January 2021.",
      pathways: [], featured: false
    },

    /* ============================================================
       UTILITY
       ============================================================ */
    {
      id: "NC-600", trade: "Hawaiian Electric trades (13 trades incl. Lineman)",
      sponsor: "Hawaiian Electric / IBEW Local 1260 JAC",
      type: "union", islands: "Oahu / Big Island / Maui",
      ojtHours: "6,000", lengthYears: "~3", hsRequired: true, appFee: null,
      status: "unknown",
      statusNote: "13 distinct trades incl. Lineman, Electrical Mechanic, Boiler Mechanic, Substation Electrician, Meter Electrician.",
      applyUrl: "https://www.hawaiianelectric.com/community-and-education/career-and-technical-education", phone: "(808) 543-4653",
      lastVerified: "2021-01-20", tier: "dlir-2021",
      tierNote: "Last DLIR-confirmed January 2021.",
      pathways: [], featured: false
    },
    {
      id: "NC-601", trade: "KIUC trades (5 electrical)",
      sponsor: "Kauai Island Utility JAC (IBEW Local 1260)",
      type: "union", islands: "Kauai (Lihue)",
      ojtHours: "6,000", lengthYears: "~3", minAge: 16, appFee: null,
      status: "unknown",
      statusNote: "5 trades: Lineman, Meter Electrician, System Electrician, Power Plant Maintenance, Instrument & Control Electrician.",
      applyUrl: "https://www.kiuc.coop", phone: "(808) 246-8245",
      lastVerified: "2021-01-20", tier: "dlir-2021",
      tierNote: "Last DLIR-confirmed January 2021.",
      pathways: [], featured: false
    },

    /* ============================================================
       AEROSPACE
       ============================================================ */
    {
      id: "A-001", trade: "Maintenance Technician Development Program (MTDP)",
      sponsor: "Hawaiian Airlines + Honolulu CC",
      type: "non-union", islands: "Oahu",
      lengthYears: "~2", hsRequired: "HS + AERO program", appFee: "No fee",
      status: "open-now",
      statusNote: "Launched September 2025. $10,500 stipend, $1,800 A&P exam reimbursement, contingent job offers.",
      applyUrl: "https://www.hawaiianairlines.com/careers", phone: null,
      lastVerified: "2026-04-26", tier: "verified-2026",
      tierNote: "Research-confirmed September 2025 launch.",
      pathways: ["aero-pre-apprenticeship"], featured: true, newProgram: true
    },
    {
      id: "A-002", trade: "Aeronautics Maintenance Technology (AERO) — pre-app",
      sponsor: "Honolulu Community College",
      type: "non-union", islands: "Oahu",
      lengthYears: "~2", hsRequired: true, appFee: null,
      status: "open-now",
      statusNote: "Pre-apprenticeship pipeline into MTDP. Prerequisites tighten Fall 2026.",
      applyUrl: "https://www.honolulu.hawaii.edu/post/program/aero/", phone: "(808) 845-9245",
      lastVerified: "2026-04-26", tier: "verified-2026",
      tierNote: "Confirmed via direct research April 2026.",
      pathways: [], featured: false
    }
  ],

  pathways: [
    {
      id: "beyond-bars", name: "Beyond Bars",
      audience: "Currently or formerly incarcerated",
      provider: "HCATF (Carpenters)",
      what: "Hands-on training plus classroom instruction inside select Hawaii correctional facilities. Direct entry into HCATF apprenticeship on release.",
      cost: "Free (institutional)",
      contact: "(808) 848-0794",
      url: "https://hicarpenterstraining.com/apply/",
      featured: true
    },
    {
      id: "laumaka-liuna", name: "Laumaka Work Furlough → LIUNA Local 368",
      audience: "Inmates at Laumaka Work Furlough Center",
      provider: "Hawaii DCR + LIUNA Local 368",
      what: "NEW partnership formalized November 2025. 4-day pre-apprenticeship evaluation course inside facility. Passers enter 4,000 hours OJT plus 290 hours related instruction as Local 368 apprentices.",
      cost: "Free (institutional)",
      contact: "(808) 455-7979",
      url: "https://hiltp.org/construction/",
      featured: true, newPathway: true
    },
    {
      id: "h2h-veterans", name: "H2H (Heroes to Hires)",
      audience: "Veterans transitioning to civilian careers",
      provider: "HCATF",
      what: "Connects veterans to construction careers. Combine with GI Bill apprenticeship benefits for housing allowance during training.",
      cost: "Free",
      contact: "(808) 848-0794",
      url: "https://hicarpenterstraining.com/apply/",
      featured: true
    },
    {
      id: "ibew-direct-entry", name: "IBEW 1186 Direct Entry",
      audience: "People with 3,500+ verified electrical hours OR an accredited 2-year electricity/electronics certificate",
      provider: "Hawaii Electricians JATC",
      what: "Bypass the aptitude test queue and enter the apprenticeship directly. May earn OJT and classroom credit for prior work.",
      cost: "Standard application fee",
      contact: "(808) 847-0629",
      url: "https://www.hetf1186.org/direct-interview",
      featured: true
    },
    {
      id: "ibew-pre-apprenticeship", name: "IBEW 1186 Pre-Apprenticeship Credential",
      audience: "Aspiring electricians without prior experience",
      provider: "Hawaii Electricians Training Fund (Castle Foundation funded)",
      what: "5-course program, 6-12 months. Direct entry to Inside Wireperson apprenticeship plus up to 1 year of credit toward the 5-year program.",
      cost: "TBD (likely subsidized)",
      contact: "(808) 847-0629",
      url: "https://www.hetf1186.org/recruitment",
      featured: true
    },
    {
      id: "hawaiian-trades-academy", name: "Hawaiian Trades Academy / Kākoʻo Maui WDP",
      audience: "Maui residents (clean-up/rebuild jobs), Native Hawaiians statewide",
      provider: "Council for Native Hawaiian Advancement (CNHA)",
      what: "Free OSHA-10/30, HAZWOPER-40, CDL-A, telehandler, carpentry, PV, \"Craftsman\" pre-apprenticeship. About 400 Maui residents certified for fire-rebuild work.",
      cost: "Free for Maui rebuild track; $250 CDL-A Wahine cohort",
      contact: "(808) 596-8155",
      url: "https://www.hawaiiancouncil.org/programs/trades/",
      featured: true
    },
    {
      id: "mass-timber", name: "Mass Timber Training",
      audience: "Maui residents focused on Lahaina rebuilding",
      provider: "HCATF + WoodWorks + UH Maui College",
      what: "Launched September 2025. Allied Builders and Armstrong Builders staffing Pulama Lānaʻi workforce-housing builds through this pipeline.",
      cost: "Free",
      contact: "(808) 848-0794",
      url: "https://hicarpenterstraining.com/building-better/",
      featured: false, newPathway: true
    },
    {
      id: "career-connections-hs", name: "Career Connections Summer Internship",
      audience: "High school students",
      provider: "HCATF",
      what: "Summer internship to expose teens to construction trades. Pipeline to HCATF apprenticeship.",
      cost: "Free",
      contact: "(808) 848-0794",
      url: "https://hicarpenterstraining.com/apply/",
      featured: false
    },
    {
      id: "sisters-in-brotherhood", name: "Sisters in the Brotherhood (SIB)",
      audience: "Women already in HCATF apprenticeship",
      provider: "HCATF + United Brotherhood of Carpenters",
      what: "Mentorship and advancement support for women carpenters.",
      cost: "Free for members",
      contact: "(808) 848-0794",
      url: "https://hicarpenterstraining.com/",
      featured: false
    },
    {
      id: "abc-building-hawaii-together", name: "ABC Building Hawaii Together",
      audience: "New entrants to construction; career changers",
      provider: "ABC Hawaii (Castle Foundation funded)",
      what: "21 cohorts of 10-15 students. Pre-apprenticeship pipeline into ABC's non-union apprenticeships across 5 trades.",
      cost: "Free for qualified participants",
      contact: "(808) 845-4887",
      url: "https://www.abchawaii.org/",
      featured: false
    },
    {
      id: "aero-pre-apprenticeship", name: "Honolulu CC AERO Program",
      audience: "Aspiring aircraft mechanics",
      provider: "Honolulu Community College",
      what: "FAA A&P certification track with hands-on training. Prerequisites tighten Fall 2026. Eligibility for Hawaiian Airlines MTDP.",
      cost: "Standard tuition (Pell-eligible)",
      contact: "(808) 845-9245",
      url: "https://www.honolulu.hawaii.edu/post/program/aero/",
      featured: false
    },
    {
      id: "pact", name: "PACT (Pre-Apprenticeship Construction Training)",
      audience: "New entrants to construction; career changers",
      provider: "BIA Hawaii + Work Hawaii (WIOA-funded)",
      what: "Tuition-free. OSHA-30, First Aid/CPR/AED, HBI Pre-App Cert, Lead RRP, Disaster Site Worker. Hands-on across multiple trades.",
      cost: "Free for qualified participants",
      contact: "(808) 629-7505",
      url: "https://www.biahawaii.org/pact/",
      featured: false
    }
  ],

  funding: [
    {
      id: "good-jobs-hawaii", name: "Good Jobs Hawaiʻi",
      funder: "UH Community Colleges",
      status: "active", statusNote: "Spring 2026 cohorts open",
      covers: "100% tuition subsidy plus certification exam fees. Network technician, security analyst, electrician prep, more.",
      eligibility: "Hawaii residents. 6,000+ enrolled since 2023.",
      url: "https://goodjobshawaii.org/"
    },
    {
      id: "wioa", name: "WIOA (Workforce Innovation and Opportunity Act)",
      funder: "U.S. DOL through Hawaii American Job Centers",
      status: "active-but-uncertain",
      statusNote: "Reauthorization stalled in Congress. FY2026 federal budget proposes block-grant restructure.",
      covers: "Tuition, training costs, support services (childcare, transportation).",
      eligibility: "Dislocated workers, low-income, youth. Means-tested.",
      url: "https://www.hawaiiamericanjobcenter.com/"
    },
    {
      id: "hawaii-promise", name: "Hawaiʻi Promise (non-credit/workforce track)",
      funder: "State of Hawaii / UH Community Colleges",
      status: "active", statusNote: "",
      covers: "Last-dollar scholarship: tuition, fees, books, supplies for non-credit workforce training.",
      eligibility: "HI residents pursuing non-credit workforce credentials.",
      url: "https://www.hawaii.edu/hawaiipromise/"
    },
    {
      id: "gi-bill", name: "GI Bill (Apprenticeship)",
      funder: "U.S. Department of Veterans Affairs",
      status: "active", statusNote: "",
      covers: "Monthly housing allowance plus tuition support during apprenticeship.",
      eligibility: "Veterans and dependents with GI Bill entitlement.",
      url: "https://www.va.gov/education/about-gi-bill-benefits/"
    },
    {
      id: "mycaa", name: "MyCAA (Military Spouse)",
      funder: "U.S. Department of Defense",
      status: "active", statusNote: "",
      covers: "Up to $4,000 toward licenses, certifications, and AS degrees for military spouses.",
      eligibility: "Spouses of E-1 to E-5, W-1/W-2, O-1/O-2.",
      url: "https://mycaa.militaryonesource.mil/mycaa/"
    },
    {
      id: "skillbridge", name: "DoD SkillBridge",
      funder: "U.S. Department of Defense",
      status: "active",
      statusNote: "80+ active Hawaii listings late 2025 / early 2026.",
      covers: "Final 180 days of military service spent in industry internship while still receiving military pay.",
      eligibility: "Active-duty within 180 days of separation. Command approval required.",
      url: "https://skillbridge.osd.mil/"
    },
    {
      id: "federal-bonding", name: "Federal Bonding Program",
      funder: "U.S. DOL through DLIR-WDD",
      status: "active", statusNote: "HI Coordinator: Mark Olds.",
      covers: "Free $5,000 fidelity bonds for at-risk hires (justice-impacted, in recovery, etc.).",
      eligibility: "Employers, not individuals. Removes hiring-risk barrier.",
      url: "https://labor.hawaii.gov/wdd/employers/fedbond/"
    },
    {
      id: "wotc", name: "WOTC (Work Opportunity Tax Credit)",
      funder: "IRS through DOL",
      status: "expiring",
      statusNote: "Federal authorization expires December 31, 2025. Extension required for hires beyond that date.",
      covers: "Tax credit incentivizing employers to hire from target groups (justice-impacted, veterans, SNAP recipients).",
      eligibility: "Employers, not individuals.",
      url: "https://wotc.ehawaii.gov/"
    },
    {
      id: "maui-strong", name: "Maui Strong Fund",
      funder: "Hawaiʻi Community Foundation",
      status: "active",
      statusNote: "$209M+ raised. $7.5M to Hawaiʻi Community Lending paired with $7.5M from County for Lahaina rebuild loans.",
      covers: "Fire recovery grants to nonprofits, workforce navigation, some homeowner rebuild loans.",
      eligibility: "Maui residents and serving organizations.",
      url: "https://www.hawaiicommunityfoundation.org/"
    },
    {
      id: "maui-ndwg", name: "Maui NDWG (National Dislocated Worker Grant)",
      funder: "U.S. DOL through MEO",
      status: "wound-down",
      statusNote: "DEFUNDED February 25, 2025. NO NEW APPLICATIONS. 131 fire-survivor workers laid off. No replacement program.",
      covers: "PREVIOUSLY: Wages and training for Maui fire-displaced workers.",
      eligibility: "PROGRAM CLOSED.",
      url: "https://www.meoinc.org/maui-disaster-recovery-national-dislocated-worker-grant/"
    },
    {
      id: "taa", name: "TAA (Trade Adjustment Assistance)",
      funder: "U.S. DOL",
      status: "wound-down",
      statusNote: "CLOSED to new participants since July 1, 2022. PAWS petition system decommissioned May 14, 2025.",
      covers: "PREVIOUSLY: Tuition and benefits for trade-displaced workers. Only legacy participants receive benefits.",
      eligibility: "PROGRAM CLOSED to new participants.",
      url: "https://www.dol.gov/agencies/eta/tradeact/"
    },
    {
      id: "kupu-paused", name: "Kupu HYCC + CLDP",
      funder: "Kupu (federal AmeriCorps)",
      status: "paused",
      statusNote: "Hawaiʻi Youth Conservation Corps Summer + Conservation Leadership Development paused 2025-2026 after Kupu lost ~$3.5M federal AmeriCorps funding. Refer to Kupu ʻĀina Corps (still active) instead.",
      covers: "PREVIOUSLY: Conservation/natural resources internships and leadership development.",
      eligibility: "Youth, young adults.",
      url: "https://www.kupuhawaii.org/"
    }
  ]
};
