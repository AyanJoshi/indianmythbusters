// ===== MYTHS DATA =====
const mythsData = [
  {
    id: 1,
    title: "Eating curd (yogurt) and fish together is poisonous",
    category: "Food",
    verdict: "busted",
    shortExplanation: "There is no scientific evidence that consuming curd and fish together produces toxins or causes skin diseases. This is a widespread belief in India with no basis in biochemistry or clinical medicine.",
    fullExplanation: "This myth likely originates from Ayurvedic concepts of 'viruddha ahara' (incompatible food combinations). However, modern nutritional science has found no harmful chemical reaction between dairy products and fish. Both are protein-rich foods that are digested by the same enzymes. Many cuisines worldwide regularly combine fish and dairy (e.g., fish chowder, fish in cream sauce) with no adverse effects. No clinical study has ever demonstrated toxicity from this combination. Dermatological conditions like vitiligo (leucoderma), often blamed on this combination, are autoimmune conditions unrelated to diet combinations.",
    sources: [
      { name: "Journal of Ethnic Foods - Food incompatibility concepts in traditional Indian dietetics", url: "https://doi.org/10.1016/j.jef.2015.08.003" },
      { name: "National Institute of Nutrition, India (NIN) - Dietary Guidelines for Indians", url: "https://www.nin.res.in/nutrition2020/DietaryGuidelinesforNINwebsite.pdf" }
    ]
  },
  {
    id: 2,
    title: "Cracking your knuckles causes arthritis",
    category: "Health",
    verdict: "busted",
    shortExplanation: "Multiple studies, including a notable self-experiment spanning over 60 years, have found no link between habitual knuckle cracking and arthritis.",
    fullExplanation: "The sound produced when cracking knuckles comes from the collapse of gas bubbles in the synovial fluid of joints, not from bone damage. Dr. Donald Unger famously cracked the knuckles on one hand for over 60 years while leaving the other hand uncracked, finding no difference in arthritis between the two hands. His work earned him an Ig Nobel Prize in 2009. A larger radiographic study published in the Journal of the American Board of Family Medicine (2011) examined 215 people aged 50\u201389 and found no correlation between knuckle cracking and osteoarthritis. However, habitual cracking may slightly reduce grip strength over time.",
    sources: [
      { name: "Deweber et al. (2011) - Knuckle Cracking and Hand Osteoarthritis, J Am Board Fam Med", url: "https://doi.org/10.3122/jabfm.2011.02.100156" },
      { name: "Harvard Health Publishing - Does knuckle cracking cause arthritis?", url: "https://www.health.harvard.edu/pain/does-knuckle-cracking-cause-arthritis" }
    ]
  },
  {
    id: 3,
    title: "Going outside with wet hair causes cold or pneumonia",
    category: "Health",
    verdict: "busted",
    shortExplanation: "Common colds are caused by viruses (primarily rhinoviruses), not by cold temperatures or wet hair. You cannot catch a cold without exposure to the actual virus.",
    fullExplanation: "This is one of the most persistent myths across many cultures, not just India. The common cold is caused by over 200 different viruses, most commonly rhinoviruses. You can only get a cold by being infected with one of these viruses, typically through droplet transmission. A controlled study published in the journal Family Practice (2005) by researchers at the Common Cold Centre, Cardiff University, did find that chilling the feet could trigger cold symptoms in people already carrying dormant rhinoviruses. However, the cold itself was caused by the pre-existing virus, not the chill. Cold weather correlates with more colds because people spend more time indoors in close proximity, facilitating viral transmission.",
    sources: [
      { name: "Johnson & Eccles (2005) - Acute cooling of the feet and the onset of common cold symptoms, Family Practice", url: "https://doi.org/10.1093/fampra/cmi083" },
      { name: "NIH/NIAID - Common Cold overview", url: "https://www.niaid.nih.gov/diseases-conditions/common-cold" }
    ]
  },
  {
    id: 4,
    title: "Drinking warm lemon water or turmeric milk cures cancer",
    category: "Health",
    verdict: "busted",
    shortExplanation: "No food or drink has been scientifically proven to cure cancer. While turmeric contains curcumin which has shown some anti-inflammatory properties in lab studies, consuming it in milk or food does not treat cancer.",
    fullExplanation: "This dangerous myth circulates widely on social media and WhatsApp in India. While curcumin (the active compound in turmeric) has demonstrated anti-inflammatory and some anti-cancer properties in laboratory cell cultures, these effects have not been reliably replicated in human clinical trials at dietary doses. Curcumin has extremely poor bioavailability when consumed orally. The National Cancer Institute states clearly that no food can cure cancer. Cancer Research UK has also repeatedly debunked claims about lemon water, alkaline diets, and turmeric as cancer cures. Relying on such remedies instead of evidence-based treatment can be fatal.",
    sources: [
      { name: "National Cancer Institute - Curcumin clinical trial data", url: "https://www.cancer.gov/research/key-initiatives/ras/ras-central/blog/2020/curcumin" },
      { name: "Cancer Research UK - Turmeric and cancer claims", url: "https://www.cancerresearchuk.org/about-cancer/treatment/complementary-alternative-therapies/individual-therapies/turmeric" }
    ]
  },
  {
    id: 5,
    title: "We only use 10% of our brains",
    category: "Science",
    verdict: "busted",
    shortExplanation: "Brain imaging studies consistently show that virtually all areas of the brain are active, and we use far more than 10% over the course of a day.",
    fullExplanation: "This myth has been popularized by movies like 'Lucy' and various self-help books. Modern neuroimaging techniques such as fMRI and PET scans show that over the course of a day, all areas of the brain are active. While not all neurons fire simultaneously (which would actually be a seizure), there is no large region of the brain that is completely non-functional. Different activities activate different brain regions, and even during sleep, areas like the frontal cortex and somatosensory areas remain active. Brain damage studies further disprove this: if 90% of the brain were unused, damage to those areas would have no consequences, which is clearly not the case.",
    sources: [
      { name: "Scientific American - Do People Only Use 10 Percent of Their Brains?", url: "https://www.scientificamerican.com/article/do-people-only-use-10-percent-of-their-brains/" },
      { name: "Beyerstein, B.L. (1999) - Whence Cometh the Myth that We Only Use 10% of our Brains?", url: "https://doi.org/10.1007/978-94-017-1005-0_1" }
    ]
  },
  {
    id: 6,
    title: "Eating sweets directly causes diabetes",
    category: "Health",
    verdict: "partial",
    shortExplanation: "Sugar consumption alone does not directly cause diabetes. Type 2 diabetes is caused by insulin resistance influenced by overall diet, genetics, obesity, and lifestyle. However, excessive sugar contributes to obesity, a major risk factor.",
    fullExplanation: "Type 1 diabetes is an autoimmune condition completely unrelated to sugar consumption. Type 2 diabetes develops when the body becomes resistant to insulin or the pancreas cannot produce enough insulin. The primary risk factors are genetics, obesity, sedentary lifestyle, and overall caloric excess. Eating sweets does not directly cause diabetes, but a diet consistently high in added sugars contributes to weight gain and obesity, which is the single largest modifiable risk factor for Type 2 diabetes. The ICMR notes that India's diabetes epidemic is driven by rapid urbanization, dietary shifts toward processed foods (not just sweets), and reduced physical activity.",
    sources: [
      { name: "American Diabetes Association - Diabetes Myths", url: "https://diabetes.org/about-diabetes/diabetes-myths" },
      { name: "ICMR Guidelines for Management of Type 2 Diabetes", url: "https://main.icmr.nic.in/sites/default/files/guidelines/ICMR_GuidelinesType2diabetes2018_0.pdf" }
    ]
  },
  {
    id: 7,
    title: "Shaving makes hair grow back thicker and darker",
    category: "Health",
    verdict: "busted",
    shortExplanation: "Shaving does not change the thickness, color, or rate of hair growth. The blunt edge of freshly shaved hair only creates an illusion of coarseness.",
    fullExplanation: "This is a nearly universal myth. When hair grows naturally, it tapers to a fine tip. Shaving cuts the hair at its thickest point near the skin surface, so the blunt cross-section feels stubbly and appears darker as it grows out. A clinical trial published in the Journal of Investigative Dermatology as far back as 1928 demonstrated that shaving had no effect on hair growth rate or texture. More recent studies confirmed these findings. The hair follicle, which determines thickness, color, and growth rate, sits deep beneath the skin surface and is completely unaffected by what happens to the hair shaft above the skin.",
    sources: [
      { name: "Lynfield & Macwilliams (1970) - Shaving and hair growth, J Invest Dermatol", url: "https://doi.org/10.1111/1523-1747.ep12280667" },
      { name: "Mayo Clinic - Does shaving unwanted body hair make it grow back thicker?", url: "https://www.mayoclinic.org/healthy-lifestyle/adult-health/expert-answers/hair-removal/faq-20058427" }
    ]
  },
  {
    id: 8,
    title: "Drinking cold water after meals causes cancer",
    category: "Food",
    verdict: "busted",
    shortExplanation: "There is absolutely no scientific evidence that drinking cold water after meals causes cancer or solidifies fats in the digestive system in a harmful way.",
    fullExplanation: "This myth has been widely circulated via WhatsApp and social media in India, often attributed to fake doctors or fabricated hospital reports. The claim usually states that cold water solidifies oily food, slows digestion, and lines the intestines with fats that eventually cause cancer. In reality, the body warms ingested water to body temperature within minutes. Gastric juices (hydrochloric acid) are far more powerful than temperature differences in food. No oncological research institution has ever identified cold water consumption as a carcinogen or risk factor. Cancer is caused by genetic mutations from factors like tobacco, radiation, certain infections, and chemical exposures.",
    sources: [
      { name: "WHO - IARC Monographs on the Identification of Carcinogenic Hazards", url: "https://monographs.iarc.who.int/agents-classified-by-the-iarc/" },
      { name: "Snopes - Fact check: Cold Water and Cancer", url: "https://www.snopes.com/fact-check/cold-water-after-meals/" }
    ]
  },
  {
    id: 9,
    title: "Applying cow dung or urine cures diseases or purifies the body",
    category: "Health",
    verdict: "busted",
    shortExplanation: "Cow dung and urine have no proven therapeutic value and can expose people to dangerous pathogens including E. coli, Salmonella, and parasites.",
    fullExplanation: "Despite some traditional beliefs and occasional claims by public figures, there is no peer-reviewed scientific evidence that cow urine or dung can cure diseases, boost immunity, or purify the body. Cow dung contains bacteria like E. coli, Salmonella, Listeria, and Clostridium, as well as parasites. Cow urine contains urea, creatinine, and various waste products the animal's body has filtered out. The Indian Medical Association (IMA) has repeatedly stated that cow urine has no proven medicinal properties. A review in the Journal of Ethnopharmacology found that while some in-vitro studies showed antimicrobial activity, there were no rigorous human clinical trials demonstrating therapeutic benefit.",
    sources: [
      { name: "Jain et al. (2010) - Medicinal and biological potential of cow urine: A review, J Ethnopharmacol", url: "https://doi.org/10.1016/j.jep.2010.09.004" },
      { name: "Indian Medical Association (IMA) - Public statements on cow urine therapy", url: "https://www.ima-india.org/" }
    ]
  },
  {
    id: 10,
    title: "Sitting too close to the TV damages your eyes",
    category: "Health",
    verdict: "busted",
    shortExplanation: "Modern televisions do not emit harmful radiation. Sitting close may cause temporary eye strain but does not cause permanent damage to vision.",
    fullExplanation: "This myth has a kernel of historical truth. Before the 1950s, some TVs did emit excessive X-rays due to faulty voltage regulation, and GE issued a recall in 1967. However, modern LCD, LED, and OLED televisions emit no harmful radiation. The American Academy of Ophthalmology states that sitting close to a TV will not damage eyes in children or adults. Children often sit close to TVs because they can focus at close distances more easily than adults. Prolonged screen time can cause digital eye strain (asthenopia), which includes symptoms like dry eyes, headaches, and blurred vision, but these are temporary. The AAO recommends the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds.",
    sources: [
      { name: "American Academy of Ophthalmology - Is Sitting Too Close to the TV Bad for Your Eyes?", url: "https://www.aao.org/eye-health/tips-prevention/is-sitting-too-close-to-tv-bad-for-your-eyes" },
      { name: "Harvard Health Publishing - Electronic screen alert: Protect your eyes", url: "https://www.health.harvard.edu/blog/electronic-screen-alert-avoid-this-vision-risk-201408267306" }
    ]
  },
  {
    id: 11,
    title: "Tilting your head back stops a nosebleed",
    category: "Health",
    verdict: "busted",
    shortExplanation: "Tilting your head back during a nosebleed is wrong and potentially dangerous. It causes blood to flow down the throat, which can lead to nausea or choking.",
    fullExplanation: "This is common advice given by well-meaning relatives across India and the world, but it is medically incorrect. When you tilt your head back, blood drains down the back of the throat into the stomach, which can cause nausea and vomiting. In severe cases, blood can enter the airway. The correct first-aid approach, recommended by the American Red Cross and NHS, is to lean slightly forward, pinch the soft part of the nose (just below the bony bridge) firmly for 10\u201315 minutes, and breathe through the mouth. If bleeding continues beyond 20 minutes, medical attention should be sought.",
    sources: [
      { name: "NHS - How to stop a nosebleed", url: "https://www.nhs.uk/conditions/nosebleed/" },
      { name: "American Academy of Family Physicians - Nosebleeds", url: "https://familydoctor.org/condition/nosebleeds/" }
    ]
  },
  {
    id: 12,
    title: "Eating carrots dramatically improves your night vision",
    category: "Food",
    verdict: "partial",
    shortExplanation: "Carrots contain beta-carotene (Vitamin A precursor) essential for normal vision, but eating extra carrots won't give you superhuman night vision if you already have adequate Vitamin A levels.",
    fullExplanation: "This myth was actually boosted by British propaganda during World War II. The Royal Air Force spread the story that their pilots ate lots of carrots to see in the dark, to cover up their use of radar technology. Carrots do contain beta-carotene, which the body converts to Vitamin A (retinol), an essential nutrient for the production of rhodopsin, a pigment in the retina that enables low-light vision. If someone is Vitamin A deficient (a real problem in parts of India), increasing Vitamin A intake will genuinely improve their vision. However, if you already consume adequate Vitamin A, eating additional carrots provides no vision enhancement. Excess beta-carotene is either excreted or stored, and can even turn your skin orange (carotenemia), which is harmless.",
    sources: [
      { name: "Smithsonian Magazine - A WWII Propaganda Campaign Popularized the Myth That Carrots Help You See in the Dark", url: "https://www.smithsonianmag.com/arts-culture/a-wwii-propaganda-campaign-popularized-the-myth-that-carrots-help-you-see-in-the-dark-28812484/" },
      { name: "WHO - Vitamin A deficiency", url: "https://www.who.int/data/nutrition/nlis/info/vitamin-a-deficiency" }
    ]
  }
];

// ===== UTILITY FUNCTIONS =====

function getVerdictLabel(verdict) {
  switch (verdict) {
    case 'busted': return 'Busted';
    case 'confirmed': return 'Confirmed';
    case 'partial': return 'Partially True';
    default: return verdict;
  }
}

function getVerdictClass(verdict) {
  switch (verdict) {
    case 'busted': return 'verdict-busted';
    case 'confirmed': return 'verdict-confirmed';
    case 'partial': return 'verdict-partial';
    default: return '';
  }
}

function createMythCard(myth) {
  const card = document.createElement('div');
  card.className = `myth-card ${myth.verdict}`;
  card.dataset.category = myth.category;
  card.dataset.verdict = myth.verdict;

  const sourcesHtml = myth.sources.map(function(s) {
    return '<a href="' + s.url + '" target="_blank" rel="noopener noreferrer">' + s.name + '</a>';
  }).join('');

  card.innerHTML =
    '<span class="category">' + myth.category + '</span>' +
    '<h3>' + myth.title + '</h3>' +
    '<span class="verdict ' + getVerdictClass(myth.verdict) + '">' + getVerdictLabel(myth.verdict) + '</span>' +
    '<p class="explanation">' + myth.shortExplanation + '</p>' +
    '<div class="full-explanation" id="full-' + myth.id + '">' +
      '<p class="explanation">' + myth.fullExplanation + '</p>' +
    '</div>' +
    '<button class="read-more" data-id="' + myth.id + '">Read more &#8594;</button>' +
    '<div class="sources">' +
      '<h4>Sources</h4>' +
      sourcesHtml +
    '</div>';

  return card;
}

// ===== PAGE: HOME (Featured Myths) =====
function initHomePage() {
  var container = document.getElementById('featuredMyths');
  if (!container) return;

  // Show first 4 myths as featured
  var featured = mythsData.slice(0, 4);
  featured.forEach(function(myth) {
    container.appendChild(createMythCard(myth));
  });
}

// ===== PAGE: MYTHS LISTING =====
function initMythsPage() {
  var grid = document.getElementById('mythsGrid');
  if (!grid) return;

  var searchInput = document.getElementById('searchInput');
  var filterBtns = document.querySelectorAll('#filterBar .filter-btn');
  var verdictBtns = document.querySelectorAll('#verdictBar .filter-btn');
  var emptyState = document.getElementById('emptyState');

  var currentCategory = 'all';
  var currentVerdict = 'all';
  var currentSearch = '';

  // Initialize Fuse.js for fuzzy search
  var fuse = new Fuse(mythsData, {
    keys: [
      { name: 'title', weight: 0.4 },
      { name: 'shortExplanation', weight: 0.3 },
      { name: 'fullExplanation', weight: 0.15 },
      { name: 'category', weight: 0.15 }
    ],
    threshold: 0.4,         // 0 = exact match, 1 = match anything
    distance: 200,           // how far to search within a field
    includeScore: true,
    includeMatches: true,
    ignoreLocation: true,    // search the entire string, not just the start
    minMatchCharLength: 2,
    findAllMatches: true
  });

  function renderMyths() {
    grid.innerHTML = '';
    var count = 0;

    // Get filtered results: either fuzzy search or full list
    var mythsToShow;
    if (currentSearch === '') {
      mythsToShow = mythsData.map(function(myth) { return { item: myth, score: 0 }; });
    } else {
      mythsToShow = fuse.search(currentSearch);
    }

    mythsToShow.forEach(function(result) {
      var myth = result.item;
      var matchesCategory = currentCategory === 'all' || myth.category === currentCategory;
      var matchesVerdict = currentVerdict === 'all' || myth.verdict === currentVerdict;

      if (matchesCategory && matchesVerdict) {
        grid.appendChild(createMythCard(myth));
        count++;
      }
    });

    // Update empty state with helpful message
    if (count === 0 && currentSearch !== '') {
      emptyState.innerHTML =
        '<div class="icon">&#128373;</div>' +
        '<h3>No myths found</h3>' +
        '<p>No results for "<strong>' + escapeHtml(currentSearch) + '</strong>". Try different keywords or check your spelling.</p>';
      emptyState.style.display = 'block';
    } else if (count === 0) {
      emptyState.innerHTML =
        '<div class="icon">&#128373;</div>' +
        '<h3>No myths found</h3>' +
        '<p>Try a different filter combination.</p>';
      emptyState.style.display = 'block';
    } else {
      emptyState.style.display = 'none';
    }
  }

  // Search with debounce for performance at scale
  var searchTimer;
  searchInput.addEventListener('input', function() {
    var input = this;
    clearTimeout(searchTimer);
    searchTimer = setTimeout(function() {
      currentSearch = input.value.trim();
      renderMyths();
    }, 150);
  });

  // Category filter
  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      filterBtns.forEach(function(b) { b.classList.remove('active'); });
      this.classList.add('active');
      currentCategory = this.dataset.category;
      renderMyths();
    });
  });

  // Verdict filter
  verdictBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      verdictBtns.forEach(function(b) { b.classList.remove('active'); });
      this.classList.add('active');
      currentVerdict = this.dataset.verdict;
      renderMyths();
    });
  });

  renderMyths();
}

// HTML-escape helper for safe rendering of user input
function escapeHtml(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

// ===== PAGE: ASK FORM =====
function initAskPage() {
  var form = document.getElementById('askForm');
  if (!form) return;

  var successMsg = document.getElementById('formSuccess');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    var question = document.getElementById('userQuestion').value.trim();
    if (!question) return;

    // Store submission in localStorage as a simple queue
    var submissions = JSON.parse(localStorage.getItem('mythSubmissions') || '[]');
    submissions.push({
      name: document.getElementById('userName').value.trim(),
      email: document.getElementById('userEmail').value.trim(),
      category: document.getElementById('mythCategory').value,
      question: question,
      context: document.getElementById('mythContext').value.trim(),
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('mythSubmissions', JSON.stringify(submissions));

    // Show success
    form.style.display = 'none';
    successMsg.classList.add('show');
  });
}

// ===== READ MORE TOGGLE =====
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('read-more')) {
    var id = e.target.dataset.id;
    var fullEl = document.getElementById('full-' + id);
    if (fullEl) {
      var isShown = fullEl.classList.toggle('show');
      e.target.innerHTML = isShown ? 'Read less &#8592;' : 'Read more &#8594;';
    }
  }
});

// ===== MOBILE NAV =====
(function() {
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('navLinks');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('open');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      navLinks.classList.remove('open');
    });
  });
})();

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function() {
  initHomePage();
  initMythsPage();
  initAskPage();
});
