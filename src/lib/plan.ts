// The course plan: the 23 lessons of "Et år i Norge" (Randi Rosenvinge
// Schirmer), taken from the book's table of contents: lesson texts,
// Landeskunde texts, Wörterkiste and grammar in the book's order, with the
// book's page numbers. The texts and exercises in src/content are written for
// this app; this plan is what they are written against (and what the
// validator checks).
//
// The story runs through one year, August to June: Susanne from Freiburg and
// Matthias from Bern start at a summer language course in Oslo; Matthias moves
// to Bergen, Susanne to Tromsø; Christmas in the polar night, Easter at the
// cabin, 17 May in Oslo and midsummer in Tromsø.
import type { Level } from '../content/types.ts';

export interface PlanTopic {
  id: string;
  cat?: string; // the book's grammar category (Pronomen, Verb, Wortstellung …)
  title: string; // German, as in the book's table of contents
  points: string; // what the explanation must cover (for authors and the overview)
}

export interface PlanLesson {
  n: number;
  level: Level;
  page: number; // first page of the lesson in the book
  title: string; // Norwegian, as in the book
  titleDe: string;
  place: string; // German
  when: string; // German
  story: string; // what happens in the lesson text (English, for authors)
  extra: string[]; // titles of the Landeskunde / extra texts
  wk: string; // title of the Wörterkiste
  grammar: PlanTopic[];
}

export const PLAN: PlanLesson[] = [
  {
    n: 1,
    level: 'A1',
    page: 1,
    title: 'På språkkurs i Oslo',
    titleDe: 'Im Sprachkurs in Oslo',
    place: 'Oslo, Blindern',
    when: 'August',
    story:
      'First day of the summer language course at the University of Oslo (Blindern). The teacher Torunn Haugen welcomes the class. Susanne Becker (24, from Freiburg, studies Scandinavian languages) and Matthias Steiner (26, engineer from Bern, Switzerland) introduce themselves; so do Elin (Swedish, Gothenburg) and Mads (Danish, Aarhus). Name, country, city, languages, what they do (study/work), where they live in Oslo (Susanne rents a room, a hybel, at the Nygård family).',
    extra: ['Hva kan man gjøre i Norge?'],
    wk: 'Hvem er du?',
    grammar: [
      { id: 'g01_pronomen', cat: 'Pronomen', title: 'Subjektform des Personalpronomens', points: 'jeg, du, han, hun, den, det, vi, dere, de; De (formal, rare today); du-form is normal in Norway.' },
      { id: 'g01_praesens', cat: 'Verb', title: 'Infinitiv und Präsens', points: 'Infinitive with å (å snakke, å bo, å være, å ha). Present = infinitive + -r, the same for all persons (jeg snakker, de snakker). Irregular: er, har, gjør, sier, vet, spør. No ending change by person, unlike German.' },
      { id: 'g01_wortstellung', cat: 'Wortstellung', title: 'Im einfachen Hauptsatz', points: 'Subject – verb – rest (Jeg bor i Oslo). The verb stands in second place (V2). Yes/no questions start with the verb (Bor du i Oslo?). Question words first (Hvor bor du?).' },
      { id: 'g01_nasjonalitet', cat: 'Adjektiv', title: 'Nationalität', points: 'Tyskland – tysk – en tysker; Sveits – sveitsisk – en sveitser; Østerrike – østerriksk – en østerriker; Norge – norsk – en nordmann; Sverige – svensk – en svenske; Danmark – dansk – en danske. Adjectives and languages are written in lower case. Jeg kommer fra Tyskland. Jeg er tysk / tysker (no article).' },
    ],
  },
  {
    n: 2,
    level: 'A1',
    page: 8,
    title: 'Øl og bløtkake. På kafeteria',
    titleDe: 'Bier und Sahnetorte. In der Cafeteria',
    place: 'Oslo, eine Cafeteria bei Blindern',
    when: 'August',
    story:
      'After class Susanne, Matthias, Elin and Mads go to the cafeteria. Greetings (Hei, hvordan har du det?), ordering at the counter (Kan jeg få …? Hva koster …? Ta en kake!), paying by card, prices (Matthias is shocked by the price of a beer; Mads says it is cheaper in Denmark). Susanne has bløtkake because it is Friday. Small talk about the course; what they do NOT like (ikke).',
    extra: ['Skikk og bruk'],
    wk: 'Hei, hvordan har du det?',
    grammar: [
      { id: 'g02_artikkel', cat: 'Substantiv', title: 'Der unbestimmte Artikel', points: 'en (maskulin), ei (feminin; en is also allowed), et (neutrum): en mann, ei/en jente, et hus. Gender must be learnt with each noun; German gender does not help (et hus = das Haus, but en bil = das Auto).' },
      { id: 'g02_imperativ', cat: 'Verb', title: 'Imperativ', points: 'Imperative = infinitive without -e (if the infinitive has more than one syllable): snakke – snakk!, komme – kom!, spise – spis! One-syllable verbs stay: gå!, ta!, se! Same for one or many people. Politeness: Vær så snill, … / Kan du …?' },
      { id: 'g02_ikke', cat: 'Wortstellung', title: 'ikke im Hauptsatz', points: 'ikke, aldri, alltid, ofte, også, bare, gjerne stand right after the finite verb: Jeg snakker ikke svensk. With inversion after the subject: I dag kommer han ikke. With a modal verb: Jeg kan ikke komme. (ikke in subordinate clauses: lesson 8.)' },
    ],
  },
  {
    n: 3,
    level: 'A1',
    page: 15,
    title: 'Hallo, Anna!',
    titleDe: 'Hallo, Anna!',
    place: 'Oslo, Kringsjå: in Annas Studenten-WG und im Supermarkt',
    when: 'August',
    story:
      'Susanne phones Anna Berg (25, Norwegian medical student, her tandem partner: Anna practises German, Susanne Norwegian) – "Hallo, Anna!" – and they agree to cook dinner together in Anna’s student flat (kollektiv) at Kringsjå. Shopping list, at the supermarket: plurals (tomater, poteter, egg), prices in kroner up to 20, describing food. Cooking in Anna’s small kitchen; her flatmate Henrik drops in.',
    extra: ['Norsk mat'],
    wk: 'Vel bekomme!',
    grammar: [
      { id: 'g03_flertall', cat: 'Substantiv', title: 'Der unbestimmte Plural', points: 'Most nouns: -er (en bil – biler, ei jente – jenter). Monosyllabic neuter nouns: no ending (et hus – hus, et barn – barn). Nouns in -er: -e (en lærer – lærere). Irregular: en mann – menn, ei bok – bøker, en bror – brødre, et øye – øyne, en sko – sko.' },
      { id: 'g03_inversjon', cat: 'Wortstellung', title: 'Inversion', points: 'When something other than the subject comes first (time, place, object, a subordinate clause), verb and subject swap places: I dag drikker jeg kaffe. Her bor jeg. The verb is always in position 2 – like German, but Norwegian never sends the verb to the end.' },
      { id: 'g03_leddsetning', cat: 'Wortstellung', title: 'Nebensatz', points: 'Subordinate clauses (at, fordi, når, hvis, om) keep subject – verb order, NO verb at the end (unlike German): …fordi jeg er sulten, …når hun kommer hjem. A subordinate clause in first place causes inversion: Når jeg er sulten, spiser jeg. (Where ikke goes in a subordinate clause comes in lesson 8 – don’t drill it here.)' },
      { id: 'g03_tall', cat: 'Grundzahlen', title: '0–20', points: 'null, en/ett, to, tre, fire, fem, seks, sju (syv), åtte, ni, ti, elleve, tolv, tretten, fjorten, femten, seksten, sytten, atten, nitten, tjue. en krone, kroner; Hva koster det? Det koster femten kroner.' },
    ],
  },
  {
    n: 4,
    level: 'A1',
    page: 23,
    title: 'Skandinaviske venner',
    titleDe: 'Skandinavische Freunde',
    place: 'Oslo, Frognerparken',
    when: 'Ende August',
    story:
      'A picnic in Frognerparken. Elin (Swedish) and Mads (Danish) explain how Scandinavians understand each other ("skandinavisk"); differences in words (Swedish rolig = funny, Norwegian rolig = calm). Matthias asks many questions; Mads gives orders (Kom hit! Ta en kake!). Describing things with adjectives; exchanging telephone numbers (numbers 21–100); what they can, want to and must do this weekend.',
    extra: ['Norge, Sverige, Danmark og Finland'],
    wk: 'Post og telefon',
    grammar: [
      { id: 'g04_adjektiv', cat: 'Adjektiv', title: 'Unbestimmte Form', points: 'Attributive agreement with gender and number: en stor bil, ei stor hytte, et stort hus, store biler. Neuter -t, plural -e. (Predicative position: lesson 5; definite form: lesson 9.)' },
      { id: 'g04_ig_sk', cat: 'Adjektiv', title: 'Adjektive auf -ig und -sk', points: 'Adjectives in -ig and multi-syllable adjectives in -sk (incl. all nationalities) take no -t in the neuter: et hyggelig møte, et billig hus, et norsk ord, et praktisk kjøkken; plural -e as usual (hyggelige, norske). One-syllable fersk and frisk do take -t (ferskt brød). (Adjectives ending in -t: lesson 6.)' },
      { id: 'g04_artikkel', title: 'Auslassung des Artikels', points: 'No article with profession, nationality, religion or status after være/bli: Anna er medisinstudent. Hun er norsk. Matthias er ingeniør. Hun er student. With an adjective the article comes back: Hun er en flink student. (More cases in lesson 22.)' },
      { id: 'g04_tall', cat: 'Grundzahlen', title: '21–100', points: 'tjueen (enogtjue), tjueto …, tretti, førti, femti, seksti, sytti, åtti, nitti, hundre. Both systems exist; the "new" one (tjueen) is standard. Telephone numbers are read in pairs: 22 85 50 50 = tjueto åttifem femti femti.' },
    ],
  },
  {
    n: 5,
    level: 'A1',
    page: 31,
    title: 'Typisk norsk?',
    titleDe: 'Typisch norwegisch?',
    place: 'Oslo, bei Familie Nygård',
    when: 'Anfang September',
    story:
      'At breakfast with the Nygård family (Kari, Per, Ola; bestemor Ingrid is visiting) Susanne writes a list of things that are "typically Norwegian": brunost and the ostehøvel, matpakke, going on tur on Sundays, taking off shoes indoors, kos, dugnad. Per teases her: are Germans not just as typical? Bestemor Ingrid tells a short troll story.',
    extra: ['Troll'],
    wk: 'På handletur',
    grammar: [
      { id: 'g05_pronomen', cat: 'Pronomen', title: 'Alle Formen des Personalpronomens', points: 'Subject/object: jeg – meg, du – deg, han – ham (han), hun – henne, den – den, det – det, vi – oss, dere – dere, de – dem. Object form after verbs and prepositions: Jeg ser henne. Kommer du med oss?' },
      { id: 'g05_den_det', cat: 'Pronomen', title: 'Gebrauch des Personalpronomens der 3. Person', points: 'Things are den (en/ei-nouns) or det (et-nouns): Bilen er ny. Den er rød. Huset er gammelt. Det er stort. det as formal subject: Det regner. Det er kaldt. Det er Anna.' },
      { id: 'g05_blaa', cat: 'Adjektiv', title: 'blå, grå, ny', points: 'Adjectives ending in a stressed vowel take -tt in the neuter: blå – blått, grå – grått, ny – nytt, fri – fritt. Plural: blå (blåe), grå (gråe), nye.' },
      { id: 'g05_predikativ', cat: 'Adjektiv', title: 'In prädikativer Stellung', points: 'After være/bli the adjective agrees with the subject in gender and number – unlike German, where it never changes (das Haus ist groß, die Häuser sind groß): Bilen er ny. Hytta er ny. Huset er nytt. Bilene er nye. With det as formal subject the adjective is neuter: Det er kaldt. Det er fint å bo her. With du/dere: Du er snill. Dere er snille. Also after bli: Hun blir glad. Adjectives in -ig/-sk stay without -t (Huset er billig), blå/ny as in this lesson.' },
      { id: 'g05_refleksiv', cat: 'Verb', title: 'Reflexive Verben', points: 'vaske seg, sette seg, glede seg, kle på seg, legge seg, føle seg: jeg vasker meg, du vasker deg, han/hun vasker seg, vi vasker oss, dere vasker dere, de vasker seg.' },
      { id: 'g05_dobbelkonsonant', cat: 'Rechtschreibregel', title: 'Vereinfachung von Doppelkonsonanten', points: 'A double consonant at the end of a word is simplified before another consonant: grønn – grønt, tynn – tynt, trygg – trygt, snill – snilt; verbs: kjenne – kjente – kjent, begynne – begynte. ll varies: full – fullt, but snill – snilt. (Words ending in -m: lesson 6.)' },
    ],
  },
  {
    n: 6,
    level: 'A2',
    page: 39,
    title: 'Gratulerer med dagen!',
    titleDe: 'Herzlichen Glückwunsch zum Geburtstag!',
    place: 'Oslo, Kringsjå und Aker brygge',
    when: 'September',
    story:
      'Anna turns 25 – told in the present tense on the day itself. Early in the morning Susanne and Anna’s flatmates at Kringsjå wake her with flags, candles, presents and the birthday song «Hurra for deg som fyller ditt år»; in the evening friends meet at a restaurant at Aker brygge (Jonas, Matthias, Elin, Mads, Susanne). Who gives what, and what everybody says (at-clauses).',
    extra: ['To norske barnesanger'],
    wk: 'Gratulerer!',
    grammar: [
      { id: 'g06_bestemt', cat: 'Substantiv', title: 'Der bestimmte Artikel und alle Formen des Substantivs', points: 'The article is a suffix: bilen, boka (boken), huset; plural bilene, bøkene, husene (husa). All four forms: en bil – bilen – biler – bilene. Nouns ending in -e: ei jente – jenta – jenter – jentene; et eple – eplet – epler – eplene.' },
      { id: 'g06_er', cat: 'Substantiv', title: 'Substantive auf -er', points: 'People and agent nouns in -er: en lærer – læreren – lærere – lærerne; en baker – bakeren – bakere – bakerne. Others: en genser – genseren – gensere – genserne.' },
      { id: 'g06_liten', cat: 'Adjektiv', title: 'liten', points: 'liten is irregular: en liten bil, ei lita hytte, et lite hus, små biler/hus. Predicative: Bilen er liten. Hytta er lita. Huset er lite. Barna er små. (en liten hytte is also accepted.) The definite form den lille / de små comes in lesson 9.' },
      { id: 'g06_el_en_er', cat: 'Adjektiv', title: 'Adjektive auf -el, -en, -er', points: 'gammel – gammelt – gamle; sulten – sultent – sultne; vakker – vakkert – vakre; enkel – enkelt – enkle. The e drops in the plural and the double consonant is simplified.' },
      { id: 'g06_t', cat: 'Adjektiv', title: 'Adjektive auf -t', points: 'Adjectives ending in consonant + t take no extra -t in the neuter: et kort brev, et svart skjerf, et interessant program, et kjent sted. A long vowel + t doubles the t: søt – søtt, hvit – hvitt, våt – vått. Adjectives in -tt stay: lett – lett, trøtt – trøtt, mett – mett. Plural -e as usual: korte, søte, lette.' },
      { id: 'g06_at', cat: 'Konjunktion', title: 'at', points: 'at (dass) introduces what someone says, thinks, knows or hopes: Hun sier at hun kommer. Jeg tror at Anna blir glad. Jeg håper at du liker kaka. Word order in the at-clause: subject – verb, NO verb at the end (German: …dass sie kommt). at is often dropped after si, tro, synes, vite, håpe: Jeg tror (at) det regner. Don’t mix up at (dass, pronounced [at]) and å (infinitive marker).' },
      { id: 'g06_m', cat: 'Rechtschreibregel', title: '-m im Auslaut', points: 'A word never ends in double m, but the m is doubled before an ending if the vowel is short: et rom – rommet – rom – rommene; dum – dumt – dumme; tom – tomt – tomme; et lam – lammet; en kam – kammen; et program – programmet. German writes Kamm, Lamm, dumm – Norwegian kam, lam, dum.' },
    ],
  },
  {
    n: 7,
    level: 'A2',
    page: 50,
    title: 'Teater og sjalusi',
    titleDe: 'Theater und Eifersucht',
    place: 'Oslo, Nationaltheatret',
    when: 'September',
    story:
      'Susanne, Matthias, Anna and Anna’s boyfriend Jonas see Ibsen’s "Et dukkehjem" at Nationaltheatret. In the break Matthias and Anna talk a lot; Jonas becomes jealous. Afterwards they talk about what happened – what who said and did (preteritum), which actor was best (hvilken), this play and this evening (denne); when the play started and ended (clock times), the year Ibsen wrote it (1879). Jonas and Anna make up.',
    extra: ['Henrik Ibsen'],
    wk: 'Takk! · Die Wochentage',
    grammar: [
      { id: 'g07_preteritum', cat: 'Verb', title: 'Bildung des Präteritums der regelmäßigen Verben', points: 'Four classes: 1 -et (-a): snakke – snakket, vaske – vasket; 2 -te: spise – spiste, kjøpe – kjøpte, lese – leste; 3 -de: prøve – prøvde, leve – levde; 4 -dde: bo – bodde, tro – trodde. Same form for all persons.' },
      { id: 'g07_pret_bruk', cat: 'Verb', title: 'Gebrauch des Präteritums', points: 'Preteritum for something that happened at a finished time in the past – i går, i fjor, forrige uke, for to år siden, da jeg var barn, i 1879 – and for telling a story (diary, report, fairy tale). Where German speakers say "Ich habe gestern … gekauft", Norwegian says Jeg kjøpte … i går. Also in set phrases after an event: Det var hyggelig! Takk for i går! (The use of the perfekt comes in lesson 8.)' },
      { id: 'g07_hvilken', cat: 'Pronomen', title: 'Das Fragepronomen hvilken', points: 'hvilken (m/f), hvilket (n), hvilke (pl): Hvilken buss tar du? Hvilket teater? Hvilke skuespillere? Colloquially often hva for en/et/noen.' },
      { id: 'g07_denne', cat: 'Pronomen', title: 'Das Demonstrativpronomen denne', points: 'denne (m/f), dette (n), disse (pl) + definite noun: denne bilen, dette huset, disse billettene. Dette er … = Das ist … (for anything).' },
      { id: 'g07_klokka', cat: 'Zeitangaben', title: 'Uhrzeit', points: 'Hvor mye er klokka? Klokka er tre. kvart over tre (3.15), halv fire (3.30 – half TO four, like German "halb vier"), kvart på fire (3.45), ti over tre, fem på halv fire (3.25), fem over halv fire (3.35). Official: klokka 15.30 (femten tretti). Når? – klokka sju, i sju-tiden.' },
      { id: 'g07_aarstall', cat: 'Zeitangaben', title: 'Jahreszahl', points: 'Years up to 1999 in hundreds: 1814 = atten fjorten (atten hundre og fjorten), 1879 = atten syttini, 1905 = nitten null fem / nitten hundre og fem. From 2000: to tusen (2000), to tusen og fem (2005), 2025 = to tusen og tjuefem / tjue tjuefem. In a year: i 1879 (no "im Jahr"), Hvilket år …? Centuries and decades: på 1800-tallet (im 19. Jahrhundert!), på nittitallet.' },
    ],
  },
  {
    n: 8,
    level: 'A2',
    page: 61,
    title: 'Middag med provokasjon',
    titleDe: 'Abendessen mit Provokation',
    place: 'Oslo, bei Familie Nygård',
    when: 'Ende September',
    story:
      'Sunday dinner at the Nygårds’ (Kari, Per, Ola, Susanne). Kari’s brother, onkel Arne from Ålesund, provokes everyone: about Germans and punctuality, about oil money, about the young who never eat fish. Susanne answers back politely but firmly. What everybody has done and never done (perfektum), table manners: Vær så god, Takk for maten, Velbekomme.',
    extra: ['Norske aviser'],
    wk: 'Måltider',
    grammar: [
      { id: 'g08_perfektum', cat: 'Verb', title: 'Perfekt: Bildung des Partizip Perfekt (regelmäßige Verben, være, ha, gjøre)', points: 'har + past participle (all verbs, also motion verbs; er + participle is possible for some motion/change verbs: Han er reist). Participles of regular verbs: snakket, spist, prøvd, bodd. være – har vært, ha – har hatt, gjøre – har gjort.' },
      { id: 'g08_perf_bruk', cat: 'Verb', title: 'Gebrauch des Perfekts', points: 'Perfekt when no finished time is named: experience (Har du vært i Bergen?), a result that matters now (Jeg har mistet nøkkelen), something that goes on until now (Jeg har bodd her i to måneder – German: Ich wohne seit zwei Monaten hier!), with aldri, noen gang, allerede, ennå, nettopp. As soon as a finished time is named → preteritum (lesson 7): Jeg har vært i Bergen. Jeg var i Bergen i fjor. German speakers overuse the perfekt.' },
      { id: 'g08_adverb_leddsetning', cat: 'Wortstellung', title: 'Adverbien im Nebensatz', points: 'In subordinate clauses (at, fordi, hvis, når, om, som …) sentence adverbs – ikke, aldri, alltid, ofte, også, bare, kanskje, gjerne – stand BEFORE the finite verb: …fordi han ikke kommer. …at hun alltid er sent ute. …en mann som aldri spiser fisk. In the main clause they stand after it (Han kommer ikke). Typical mistake: *fordi han kommer ikke.' },
      { id: 'g08_sted_tid', cat: 'Wortstellung', title: 'Ort vor Zeit', points: 'At the end of the clause place comes before time – the opposite of German (Ich fahre morgen nach Bergen → Jeg reiser til Bergen i morgen). Vi spiser middag hjemme klokka fem. Han har bodd i Oslo i to år. To stress the time, put it first (with inversion): I morgen reiser jeg til Bergen.' },
      { id: 'g08_som', cat: 'Pronomen', title: 'Das Relativpronomen', points: 'som for all genders and numbers: mannen som sitter der, huset som vi bor i. som can be dropped when it is not the subject: filmen (som) vi så. Prepositions go to the end: stolen som jeg sitter på.' },
      { id: 'g08_sporsmal', title: 'Fragen und Antworten', points: 'Question words: hva, hvem, hvor, hvordan, når, hvorfor, hvor mye, hvor mange, hvor gammel, hva slags (hv- is pronounced v). Yes/no questions start with the verb. Answers: ja, nei – and jo (doch) to a negative question: Kommer du ikke? – Jo! Short answers repeat the verb with det: Liker du fisk? – Ja, det gjør jeg. / Nei, det gjør jeg ikke. Er du trøtt? – Ja, det er jeg. Har du bil? – Nei, det har jeg ikke. Kan du svømme? – Ja, det kan jeg. (gjør stands for normal verbs; være, ha and modal verbs repeat themselves.)' },
      { id: 'g08_tall', cat: 'Grundzahlen', title: '100 – 1 000 000', points: 'hundre / ett hundre, hundre og en (101), to hundre og femti (250), tusen / ett tusen, tusen og en (1001), to tusen, ti tusen, hundre tusen, en million – to millioner, en milliard. og before the last part under 100: tre hundre og førtifem (345), tusen fire hundre og tjue (1420). Written with a space for thousands (12 500) and a comma for decimals (2,5). Prices: 1 250 kroner = tusen to hundre og femti kroner. (Years: lesson 7.)' },
    ],
  },
  {
    n: 9,
    level: 'A2',
    page: 72,
    title: 'Karl Johan eller Champs-Élysées',
    titleDe: 'Karl Johan oder Champs-Élysées',
    place: 'Oslo, Karl Johans gate',
    when: 'Ende September',
    story:
      'Matthias has two offers: a job at a small engineering firm in Bergen, or a job in Paris. Walking down Karl Johans gate from the station to the Royal Palace with Susanne – and asking the way (Kan du si meg veien til …?) – he compares: the big city or the small, the old house or the new office, school and university in Switzerland, Germany and Norway. He decides on Bergen.',
    extra: ['Skolesystemet og universitetene i Norge'],
    wk: 'Kan du si meg veien til …?',
    grammar: [
      { id: 'g09_bestemt_adjektiv', cat: 'Adjektiv', title: 'Bestimmte Form; liten, blå, grå', points: 'den/det/de + adjective in -e + definite noun (double definiteness): den store bilen, det store huset, de store bilene. liten: den lille bilen, det lille huset, de små bilene. blå, grå: den blå(e) bilen, de grå(e) husene (both correct). Predicative stays indefinite: Bilen er stor.' },
      { id: 'g09_den_det_de', cat: 'Pronomen', title: 'Das Demonstrativpronomen den', points: 'Stressed den/det/de = dieser/jener: Den bilen der er min. Det huset vil jeg se. De skoene er fine. Pointing with her/der: den her, det der.' },
      { id: 'g09_el', cat: 'Substantiv', title: 'Substantive auf -el', points: 'The e drops before an ending, double consonants are simplified: en sykkel – sykkelen – sykler – syklene; en nøkkel – nøkler; et eksempel – eksempelet – eksempler – eksemplene; en onkel – onkler.' },
      { id: 'g09_genitiv', cat: 'Substantiv', title: 'Genitiv', points: 'Name/noun + s, without apostrophe: Annas bror, Oslos gater, kongens slott. After the genitive the noun is indefinite: Annas sykkel (not *Annas sykkelen). Names ending in -s: Matthias’ jobb (apostrophe). Colloquially often sykkelen til Anna (lesson 13).' },
      { id: 'g09_prep_sporreord', cat: 'Wortstellung', title: 'Präposition + Fragewort', points: 'The preposition goes to the end of the question: Hvem snakker du med? Hva tenker du på? Hvor kommer du fra? (German: Mit wem …? Woran …?)' },
      { id: 'g09_uregelmessige', cat: 'Verb', title: 'Übersicht über unregelmäßige Verben', points: 'The most common irregular verbs with presens, preteritum and perfektum: være – er – var – vært; ha – har – hadde – hatt; gjøre – gjør – gjorde – gjort; si – sier – sa – sagt; gå – går – gikk – gått; komme – kom – kommet; se – så – sett; ta – tok – tatt; gi – ga – gitt; få – fikk – fått; drikke – drakk – drukket; sitte – satt – sittet; ligge – lå – ligget; vite – vet – visste – visst; spørre – spør – spurte – spurt. Learn them as a group of three.' },
    ],
  },
  {
    n: 10,
    level: 'A2',
    page: 84,
    title: 'Trollenes og nissenes land',
    titleDe: 'Das Land der Trolle und Wichtel',
    place: 'Oslo – Bergen: Bergensbanen, Flåmsbana, Nærøyfjord',
    when: 'Oktober',
    story:
      'Susanne visits Matthias, who has just started his job in Bergen (for now he lives in a room at a colleague’s; his own flat comes in lesson 14). She takes the scenic route: Bergensbanen across Hardangervidda, change at Myrdal, Flåmsbana down to Flåm, boat on the Nærøyfjord, bus to Voss, train to Bergen. In Flåm every souvenir shop sells trolls and nisser – the land of trolls and nisser – and on the train she hears about the huldra at Kjosfossen. Told in her travel diary on the last train: what had happened (plusquamperfekt), plans (skal, kommer til å), dates and months.',
    extra: ['Nissen'],
    wk: 'På reise · Die Monate',
    grammar: [
      { id: 'g10_pluskvamperfektum', cat: 'Verb', title: 'Plusquamperfekt', points: 'hadde + past participle: Toget hadde allerede gått da hun kom. Used like German (had done before something else in the past).' },
      { id: 'g10_futurum', cat: 'Verb', title: 'Futur', points: 'skal (plan, intention), vil (prediction, will), kommer til å (prediction about what will happen), present + time expression (Jeg reiser i morgen). Det kommer til å regne. Jeg skal besøke ham.' },
      { id: 'g10_noytrum_flertall', cat: 'Substantiv', title: 'Bestimmte Form Plural der Neutra', points: 'et hus – husa / husene; et barn – barna; et bein – beina; et fjell – fjella / fjellene; et tog – toga / togene. barn always barna. Both endings are correct Bokmål.' },
      { id: 'g10_uboyelige', cat: 'Adjektiv', title: 'Unflektierbare Adjektive', points: 'No endings: adjectives in -e (moderne, stille, ekte), in -s (gratis, felles), some loanwords (bra, ekstra, lilla, rosa, oransje), and adjectives in unstressed -o/-a: et moderne tog, gratis kaffe, bra folk.' },
      { id: 'g10_kanskje', cat: 'Wortstellung', title: 'bei kanskje', points: 'kanskje at the start does NOT cause inversion: Kanskje jeg kommer i morgen (inversion is also possible). Inside the clause it is a sentence adverb: Jeg kommer kanskje i morgen.' },
      { id: 'g10_ordenstall', cat: 'Ordnungszahlen', title: '1.–99. und forrige, neste, samme, siste', points: 'første, andre, tredje, fjerde, femte, sjette, sjuende, åttende, niende, tiende, ellevte, tolvte, … tjuende, tjueførste. Dates: den 17. mai (syttende mai), 1. januar. Written with a full stop: 3. etasje. forrige (last = the one before: forrige uke, forrige gang), neste (next: neste år, neste stasjon), samme (same: samme dag, den samme boka), siste (last = final: siste gang, det siste toget). These usually take no article: neste uke, forrige år. German "letzte" is both forrige and siste!' },
    ],
  },
  {
    n: 11,
    level: 'B1',
    page: 94,
    title: 'Typisk norsk å være god?',
    titleDe: 'Typisch norwegisch, gut zu sein?',
    place: 'Oslo, im Sprachkurs',
    when: 'Oktober',
    story:
      'In the language course Torunn writes on the board: «Det er typisk norsk å være god» – Prime Minister Gro Harlem Brundtland in her New Year’s speech of 1992. Susanne, Elin and Mads (Matthias has moved to Bergen) discuss: are Norwegians better, faster, richer than Swedes, Danes, Germans and Swiss? Skiing, the weather, the oil fund, good-natured teasing (Mads: Danes are happier; Elin: Sweden is bigger). Then they plan a trip in the autumn holiday (høstferie) and compare where to stay: hytte, hotell, vandrerhjem, camping, rorbu.',
    extra: ['Suverene nordmenn'],
    wk: 'Hvordan bor vi i ferien?',
    grammar: [
      { id: 'g11_gradboying', cat: 'Adjektiv', title: 'Steigerung', points: 'Regular: -ere, -est (billig – billigere – billigst, varm – varmere – varmest). Adjectives in -ig/-som: -st (billigst, morsomst). Long adjectives and participles: mer/mest (mer interessant, mest interessant).' },
      { id: 'g11_forsterkende', cat: 'Adjektiv', title: 'Verstärkende Adverbien', points: 'veldig, svært, altfor, ganske, temmelig, litt, nokså, utrolig, kjempe- (kjempefin), helt: Det er altfor dyrt. Det var veldig gøy.' },
      { id: 'g11_sammenligning', cat: 'Adjektiv', title: 'Vergleichspartikel', points: 'større enn (größer als), like stor som (genauso groß wie), ikke så stor som (nicht so groß wie), mindre … enn. Pronoun after enn: Hun er eldre enn meg / enn jeg (er).' },
      { id: 'g11_adverb', cat: 'Adverb', title: 'Neutrumsform des Adjektivs', points: 'The neuter form of the adjective is used as an adverb: Hun snakker godt norsk. Han kjører fort. Det gikk fint. Adjectives in -ig: Det var hyggelig.' },
      { id: 'g11_adverb_gradboying', cat: 'Adverb', title: 'Steigerung', points: 'Adverbs compare like adjectives: fort – fortere – fortest, sakte – saktere – saktest, ofte – oftere – oftest, tidlig – tidligere – tidligst, sent – senere – senest. Irregular: godt – bedre – best, mye – mer – mest, lite – mindre – minst, gjerne – heller – helst (Jeg drikker gjerne te, heller kaffe, helst kakao), lenge – lenger – lengst. Hvem går fortest på ski?' },
      { id: 'g11_tid', cat: 'Präposition', title: 'in Zeitausdrücken: for … siden, om, i', points: 'for to år siden (vor zwei Jahren), om to timer (in zwei Stunden, future), i to timer (zwei Stunden lang), på to timer (within – and in a negation: Jeg har ikke sett ham på to uker). om morgenen, om kvelden (regularly), i dag, i kveld, i morgen.' },
      { id: 'g11_hvem_som', cat: 'Pronomen', title: 'hvem som, hva som, hvilken som', points: 'When hvem, hva or hvilken is the SUBJECT of an indirect question, som must be added: Vet du hvem som sa det? Jeg lurer på hva som skjer. Jeg vet ikke hvilket lag som vant. Not when it is the object: Vet du hvem hun møtte? Also in hvem som helst, hva som helst, hvor som helst (anyone, anything, anywhere).' },
    ],
  },
  {
    n: 12,
    level: 'B1',
    page: 105,
    title: 'Er det mulig å bli enig?',
    titleDe: 'Kann man sich einigen?',
    place: 'Oslo: Vigelandsparken, Bygdøy, Munchmuseet',
    when: 'Oktober',
    story:
      'Matthias is visiting Oslo for a weekend. On Saturday evening Susanne, Matthias, Anna and Jonas sit in Anna’s kitchen at Kringsjå and try to agree on a Sunday programme: Vigelandsparken (free and outside), the Viking Ship and folk museums on Bygdøy (more interesting? more expensive?), or Munchmuseet (warmer when it rains). Lots of comparing, arguing, feelings and compromise.',
    extra: ['To norske kunstnere'],
    wk: 'Følelser',
    grammar: [
      { id: 'g12_genitiv_adjektiv', cat: 'Adjektiv', title: 'Nach einem Genitiv', points: 'After an s-genitive the adjective takes the -e form (as after den/det/de) and the noun stays indefinite: Norges høyeste fjell, Annas nye sykkel, Bergens gamle hus, kongens store slott; liten → lille/små: Olas lille hund, Oslos små kafeer. Compare the colloquial den nye sykkelen til Anna.' },
      { id: 'g12_uregelmessig_gradboying', cat: 'Adjektiv/Adverb', title: 'Unregelmäßige Steigerung', points: 'god – bedre – best, dårlig – verre – verst, mye – mer – mest, mange – flere – flest, få – færre – færrest, gammel – eldre – eldst, ung – yngre – yngst, stor – større – størst, liten – mindre – minst, lang – lengre – lengst, tung – tyngre – tyngst, høy – høyere – høyest.' },
      { id: 'g12_superlativ', cat: 'Adjektiv/Adverb', title: 'Gebrauch der Steigerungsformen', points: 'Superlative definite with den/det/de + -e: den høyeste toppen, det lengste vannet, de beste turene. Predicative: Denne turen er lengst. Absolute comparative: en eldre dame (an older lady). Comparison of more than two: Hvem er best?' },
      { id: 'g12_konjunksjoner', cat: 'Konjunktion', title: 'Beiordnende Konjunktionen', points: 'og, men, eller, for (denn), så (also, deshalb) join main clauses – no change of word order after them: Vi var slitne, men vi gikk videre. Det regnet, så vi ble våte.' },
    ],
  },
  {
    n: 13,
    level: 'B1',
    page: 117,
    title: 'Annas møte med familien Nygård',
    titleDe: 'Annas Begegnung mit Familie Nygård',
    place: 'Oslo, Sagene: bei Familie Nygård',
    when: 'Ende Oktober',
    story:
      'Anna has to leave her student flat at Kringsjå, and her hospital practice at Ullevål starts in November. The Nygårds rent out a small basement flat (sokkelleilighet), and Susanne brings Anna to see it on a Saturday at the end of October. Anna meets Kari, Per, Ola (16), bestemor Ingrid (visiting) and the dog Bamse for the first time. Whose is what (possessives), the key to the front door, the price of the rent (genitive with til/på), when she can move in (time conjunctions). Formalities: the lease (husleiekontrakt), the deposit (depositum), telling the population register about the move (flyttemelding), electricity and internet.',
    extra: ['Norsk barnelitteratur'],
    wk: 'Byråkrati og formaliteter',
    grammar: [
      { id: 'g13_possessiv', cat: 'Pronomen', title: 'Possessivpronomen', points: 'min/mi/mitt/mine, din/di/ditt/dine, hans, hennes, dens/dets, vår/vårt/våre, deres. Usually AFTER the noun, which is then definite: bilen min, boka mi, huset mitt, skoene mine. Before the noun for emphasis: MIN bil. Family words: far min, mor mi (no definite form).' },
      { id: 'g13_genitiv_omskriving', cat: 'Substantiv', title: 'Umschreibung des Genitivs durch eine Präpositionalverbindung', points: 'Instead of -s Norwegian – especially spoken – uses a preposition: til for people and owners (faren til Ola, rommet til Susanne, nøkkelen til Anna), and for "belonging to" things (nøkkelen til døra). Briefly: på for parts (taket på huset), i for places (Universitetet i Oslo), av for "one of" (en venn av meg). (The whole picture comes in lesson 22.)' },
      { id: 'g13_tid_konjunksjoner', cat: 'Konjunktion', title: 'Zeitkonjunktionen', points: 'da (once in the past: Da jeg kom …), når (whenever, and future: Når jeg kommer …), mens, før, etter at, til, siden, så snart. Main clause after a subordinate clause: inversion (Da jeg kom, var det mørkt). Typical mistake: da/når = German als/wenn.' },
    ],
  },
  {
    n: 14,
    level: 'B1',
    page: 128,
    title: 'Den nye leiligheten til Matthias i Bergen',
    titleDe: 'Matthias’ neue Wohnung in Bergen',
    place: 'Bergen, Sandviken',
    when: 'Ende Oktober',
    story:
      'For a month Matthias has lived in a room at a colleague’s; now he has moved into a flat of his own in an old wooden house in Sandviken. He writes Susanne (still in Oslo, about to leave for Tromsø) a long e-mail: the rooms, what is upstairs and downstairs (ute/inne, opp/oppe), the view of the harbour, the rain, the neighbour Fru Solheim; why he chose it (because, if, so that, although), and what he thinks and believes about Bergen (synes, tro, tenke).',
    extra: ['Bergen og Vestlandet'],
    wk: 'Hjem, kjære hjem',
    grammar: [
      { id: 'g14_konjunksjoner', cat: 'Konjunktion', title: 'Kausal-, Konditional-, Final-, Konsekutiv-, Konzessiv-, Komparativkonjunktionen', points: 'fordi / siden / da (kausal), hvis / om (konditional), for at (final), så (at) (konsekutiv), selv om (konzessiv), som om / enn (komparativ). Word order: subject – sentence adverb – verb (…selv om det ikke er stort).' },
      { id: 'g14_stedsadverb', cat: 'Adverb', title: 'Ortsadverbien', points: 'Direction vs. location: inn/inne, ut/ute, opp/oppe, ned/nede, hjem/hjemme, bort/borte, fram/framme. Jeg går ut. Jeg er ute. Han kommer hjem. Han er hjemme.' },
      { id: 'g14_i_paa', cat: 'Präposition', title: 'i und på in lokaler Bedeutung', points: 'i for cities, countries, rooms you are inside (i Bergen, i Norge, i stua, i huset); på for islands, many regions and institutions, kitchen, and surfaces (på Vestlandet, på Island, på kjøkkenet, på kontoret, på universitetet, på badet, på taket). These must partly be learned.' },
      { id: 'g14_synes_tro_tenke', cat: 'Verb', title: 'synes, tro, tenke', points: 'synes = opinion from experience (Jeg synes byen er fin), tro = believe/suppose (Jeg tror det regner i morgen), tenke = think (about), plan (Jeg tenker på deg. Jeg tenker å reise).' },
    ],
  },
  {
    n: 15,
    level: 'B1',
    page: 141,
    title: 'En vanlig hverdag hos familien Nygård',
    titleDe: 'Ein ganz normaler Alltag bei Familie Nygård',
    place: 'Oslo, bei Familie Nygård',
    when: 'Anfang November',
    story:
      'Susanne’s last week in Oslo. A normal Tuesday in the Nygård family from 6 a.m. to midnight: Kari (teacher) and Per (works for the municipality), Ola (16) and his homework, bestemor Ingrid who is visiting, the dog Bamse – and Anna, who has just moved into the basement flat and works night shifts on her practice at Ullevål. Everyone has their own habits (sin/si/sitt/sine, all, hver, begge, annen).',
    extra: ['Norske barnerim'],
    wk: 'Slekt og familie',
    grammar: [
      { id: 'g15_sin', cat: 'Pronomen', title: 'Reflexives Possessivpronomen', points: 'sin/si/sitt/sine refers back to the subject of the same clause: Per vasker bilen sin (his own). Per vasker bilen hans (somebody else’s). Never in the subject itself: Per og broren hans … (not *broren sin).' },
      { id: 'g15_all_hver_begge', cat: 'Pronomen', title: 'Die unbestimmten Pronomina all, hver, begge', points: 'all (m/f sg: all maten), alt (n sg: alt brødet; alone = everything: alt er klart), alle (pl: alle barna, alle sammen) – before a definite noun without den/de (alle barna = alle die Kinder). hver (m/f) / hvert (n) + indefinite singular: hver dag, hvert år, hver av oss; hver sin / hvert sitt (each their own). begge + definite plural: begge barna, begge to, begge deler.' },
      { id: 'g15_annen', cat: 'Adjektiv', title: 'annen', points: 'annen (m/f) – annet (n) – andre (pl/definite): en annen dag, et annet sted, andre folk, den andre bilen, det andre huset. den andre = the other OR the second (andre = zweite). noe annet (something else), ingen andre (nobody else), en annen gang (another time) vs. en gang til (once more).' },
    ],
  },
  {
    n: 16,
    level: 'B1',
    page: 153,
    title: 'Susannes første dag på Universitetet i Tromsø',
    titleDe: 'Susannes erster Tag an der Universität Tromsø',
    place: 'Tromsø, UiT – Norwegens arktische Universität',
    when: 'November',
    story:
      'Susanne starts her exchange semester in Tromsø. Info meeting for international students, the student flat she shares with Inga (23, Sámi from Kautokeino, studies biology), registration, the library, a lecture in Nordic linguistics where the professor speaks northern Norwegian dialect. She notes what she understands and what not – and that nobody is formal here.',
    extra: ['Bokmål, nynorsk og norske dialekter'],
    wk: 'Studier',
    grammar: [
      { id: 'g16_noen_ingen', cat: 'Pronomen', title: 'Die unbestimmten Pronomina noe(n), ikke noe(n), ingen, ingenting', points: 'noen (some/any people or countable things; also someone/anyone), noe (something; with uncountables: noe brød, noe å drikke). Negation: ikke noen / ikke noe = ingen / ingenting: Jeg har ikke noen penger = Jeg har ingen penger. Jeg ser ikke noe = Jeg ser ingenting. With a compound verb only ikke noe(n): Jeg har ikke sett noe (not *har sett ingenting). Er det noen her? Ingen vet det.' },
      { id: 'g16_possessiv_adjektiv', cat: 'Adjektiv', title: 'Nach einem Possessivpronomen', points: 'Possessive BEFORE the noun: adjective in -e, noun indefinite: min nye jakke, hennes gamle bil, vårt lille hus, deres små barn. Possessive after the noun (the normal order): double definiteness: den nye jakka mi, det lille huset vårt, de gamle bøkene hennes.' },
      { id: 'g16_egen', cat: 'Adjektiv', title: 'egen', points: 'egen/eget/egne = own, after a possessive or genitive: min egen bil, hennes eget rom, sine egne barn, Ingas egen leilighet; also with the indefinite: en egen inngang, et eget rom. Plural and definite: egne.' },
      { id: 'g16_resiproke', cat: 'Verb', title: 's-Verben mit reziproker Bedeutung', points: 'møtes, sees, treffes, snakkes, høres (Vi snakkes! Vi sees!) = each other; or verb + hverandre: De hjelper hverandre. De så på hverandre. Vi møtes i kantina klokka tolv.' },
    ],
  },
  {
    n: 17,
    level: 'B2',
    page: 164,
    title: 'Lunefull kjærlighet',
    titleDe: 'Launische Liebe',
    place: 'Hurtigruten, Tromsø – Lofoten',
    when: 'November',
    story:
      'A weekend trip on Hurtigruta from Tromsø to Svolvær in Lofoten. Susanne gets seasick, a crew member, Erik from Svolvær, looks after her; they meet again in Svolvær. Matthias calls from Bergen and is strangely quiet. Erik is charming, but when Susanne wants to meet again he is suddenly busy. Fickle love.',
    extra: ['Hurtigruta og Nord-Norge'],
    wk: 'Jeg er så syk!',
    grammar: [
      { id: 'g17_tidsuttrykk', title: 'Zeitausdrücke mit Präposition', points: 'Past – present – future and regular: i fjor / i år / til neste år; i går kveld / i kveld / i morgen tidlig; på mandag (coming) / på mandager (every) / (sist) mandag; i sommer (this summer, past or future), om sommeren (every summer), i jula, i påsken, om natta, for et år siden, om et år, i tre uker, på tre uker.' },
      { id: 'g17_fremtid_fortid', cat: 'Verb', title: 'Zukunft von der Vergangenheit aus gesehen', points: 'skulle / ville + infinitive for a future seen from the past: Hun visste at hun skulle reise til Lofoten. Han sa at han ville ringe. Plans that did not happen: Vi skulle møtes, men …' },
      { id: 'g17_modal', cat: 'Verb', title: 'Modalverben', points: 'kan – kunne – har kunnet, vil – ville – har villet, skal – skulle – har skullet, må – måtte – har måttet, bør – burde – har burdet; always + infinitive WITHOUT å. kan (can, may), vil (want; future), skal (plan, what others want), må (must), bør (should). False friend: Du må ikke … = Du darfst nicht …; Du trenger ikke … = Du musst nicht … Past: Hun måtte legge seg. Jeg kunne ikke komme. Should have: Han burde ha ringt. Polite: Jeg vil gjerne ha …' },
      { id: 'g17_hel', cat: 'Adjektiv', title: 'hel', points: 'hel (m/f) – helt (n) – hele (pl/definite): en hel dag, et helt år, hele året. Before a definite noun or a name hele stands WITHOUT den/det: hele dagen (den ganzen Tag), hele tiden, hele familien, hele Norge. Adverb helt = completely: helt ferdig, helt alene, ikke helt. halv works the same way: en halv time, halve dagen.' },
    ],
  },
  {
    n: 18,
    level: 'B2',
    page: 177,
    title: 'Mørketid og julefeiring',
    titleDe: 'Polarnacht und Weihnachtsfeier',
    place: 'Tromsø',
    when: 'Dezember',
    story:
      'The sun has gone; Tromsø lives with lights, candles and the blue hour. Julebord at the department, lutefisk vs. ribbe, the Christmas market. Matthias comes up to celebrate julaften with Susanne and Inga’s friends: what is done on julaften (presents are opened in the evening, juletrefest, nisse). Things get decorated, baked, sung – and someone calls someone a tosk.',
    extra: ['God jul!'],
    wk: 'Din tosk!',
    grammar: [
      { id: 'g18_passiv', cat: 'Verb', title: 'Passiv', points: 's-passive (present/infinitive, rules, general): Døra lukkes kl. 22. Bøkene må leveres. bli-passive (events, all tenses): Huset ble pyntet. Pakkene blir åpnet. være + participle = state: Butikken er stengt. Agent with av.' },
      { id: 'g18_s_verb', cat: 'Verb', title: 's-Verben mit aktiver Bedeutung', points: 'synes, trives, finnes, lykkes, minnes, mislykkes, svettes, skyldes: Jeg trives i Tromsø. Det finnes mange nisser. Present = infinitive (jeg synes, hun trives), preteritum: syntes, trivdes, fantes, lyktes.' },
      { id: 'g18_slik', cat: 'Pronomen', title: 'Das Demonstrativpronomen slik/sånn', points: 'slik (written) / sånn (spoken) = so ein, solch: en sånn kake, et sånt hus, sånne julesanger, slike ting. Adverb: Gjør det slik! Sånn er det.' },
    ],
  },
  {
    n: 19,
    level: 'B2',
    page: 188,
    title: 'Telefonsamtale og påskeplaner',
    titleDe: 'Ein Telefongespräch und Osterpläne',
    place: 'Tromsø – Trondheim (am Telefon)',
    when: 'Februar',
    story:
      'Anna is doing a hospital internship in Trondheim. She and Susanne talk on the phone: Anna reports what her supervisor and the patients said, Susanne reports news from Tromsø (and that Erik has written again), and what sport everybody does this winter. They plan Easter at the Nygårds’ cabin; then Susanne retells the conversation to Inga (indirect speech).',
    extra: ['Trondheim og Nidarosdomen'],
    wk: 'Sport/Idrett',
    grammar: [
      { id: 'g19_indirekte_tale', cat: 'Verb', title: 'Indirekte Rede', points: 'Statements with at, questions with om (yes/no) or the question word: Hun sier at hun kommer. Hun spurte om jeg kom. Hun lurer på hva vi skal gjøre. Subject question: Hun spør hvem SOM kommer. Tense shift after a past verb (Han sa at han var syk); sentence adverbs before the verb (at hun ikke kunne komme). No subjunctive like German.' },
      { id: 'g19_faa', cat: 'Verb', title: 'få als Hilfsverb', points: 'få + participle = manage to get something done: Jeg fikk ikke gjort leksene. få + infinitive = may / get to: Jeg fikk lov til å … / Får jeg låne telefonen din? få vite = erfahren.' },
      { id: 'g19_presentering', title: 'Präsentationssätze mit det', points: 'det + verb + indefinite subject: Det står en mann ved døra. Det bor mange studenter her. Det kommer et brev i morgen. (German: Da steht ein Mann …)' },
      { id: 'g19_utbrytning', title: '»Satzspaltung«', points: 'Det er/var … som … to stress a part: Det var Anna som ringte. Det er i påsken vi skal reise. Common in questions: Hvem er det som har spist kaka?' },
    ],
  },
  {
    n: 20,
    level: 'B2',
    page: 199,
    title: 'Biltur og krangel på Sørlandskysten',
    titleDe: 'Autofahrt und Streit an der Südküste',
    place: 'Kristiansand – Lillesand – Mandal – Stavanger',
    when: 'März',
    story:
      'In March Susanne and Matthias rent a car for a long weekend on the south coast: white wooden towns, narrow roads, a speed camera, a ferry they miss. They quarrel – about the map, his driving, and Erik – and keep saying what would have happened if the other had listened (irrealis). Near Stavanger they finally talk, and each admits the other is right about something.',
    extra: ['Sørlandet og Stavanger'],
    wk: 'Bil og trafikk',
    grammar: [
      { id: 'g20_irreal', title: 'Irreale/hypothetische Aussagen', points: 'Present unreal: Hvis jeg hadde tid, ville jeg kjøre langs kysten (preteritum + ville). Past unreal: Hvis vi hadde tatt ferja, ville vi ha vært framme nå / hadde vi vært framme nå. Wishes: Jeg skulle ønske at det var sol. Om bare …! Hypothetical: Jeg ville ikke ha gjort det.' },
      { id: 'g20_preposisjon_infinitiv', cat: 'Präposition', title: '+ Nebensatz/Infinitiv', points: 'Prepositions can take å + infinitive or an at-clause: Jeg gleder meg til å reise. Hun er redd for at bilen ikke starter. uten å si noe, i stedet for å kjøre, etter å ha spist. Verbs with fixed prepositions: tenke på, glede seg til, være flink til.' },
      { id: 'g20_presens_partisipp', cat: 'Verb', title: 'Das Partizip Präsens', points: '-ende: kjørende, gående, kommende, sovende. Used as an adjective (unchanged: en sovende baby, kommende uke), adverb (Det er overraskende kaldt) and with bli/komme (Hun ble sittende. Han kom løpende).' },
      { id: 'g20_verbalsubstantiv', cat: 'Substantiv', title: 'Verbalsubstantiv', points: 'From verbs: -ing (en kjøring, en forklaring), -ning (en løsning), -else (en opplevelse, en følelse), -sjon (en demonstrasjon), and bare stems (et kjøp, et besøk). Gender: -else and -sjon are masculine (en); -ing/-ning nouns are masculine or feminine (en/ei løsning – løsningen/løsninga).' },
      { id: 'g20_sammensatte_substantiv', cat: 'Substantiv', title: 'Zusammengesetzte Substantive', points: 'Written as one word (særskriving is a typical error!): bilutleie, fartskamera, kystvei. Linking -s- or -e-: arbeidsdag, hverdagsliv, barnehage. Gender and inflection come from the last part: et kamera → et fartskamera, fartskameraet.' },
    ],
  },
  {
    n: 21,
    level: 'B2',
    page: 210,
    title: 'Hyttetur og påskekos – eller omvendt',
    titleDe: 'Hüttenausflug und Ostergemütlichkeit – oder umgekehrt',
    place: 'Die Hütte der Nygårds im Gudbrandsdal',
    when: 'Ostern',
    story:
      'Easter at the Nygårds’ cabin: skiing in the sun, oranges and Kvikk Lunsj, påskekrim on TV and in the milk cartons, fårikål for dinner. Then the weather turns: snowstorm, power cut, the car stuck. They sit and wait, lie and read; nobody goes to the mountains (til fjells) any more. In the end the best Easter ever – or the other way round.',
    extra: ['Kos, krim og norsk litteratur'],
    wk: 'Skiftende skydekke · Oppskrift på fårikål',
    grammar: [
      { id: 'g21_sammensatte_verb', cat: 'Verb', title: 'Zusammengesetzte Verben', points: 'Particle verbs (separable, particle stressed): stå opp, ta med, legge ned, gi opp, sette opp, finne ut. Fixed compounds (one word, often more formal or figurative): nedlegge (stilllegen), oppgi (angeben), oppfinne. As adjectives the fixed compound is usual: Butikken er nedlagt. en oppsatt plan.' },
      { id: 'g21_perfektum_partisipp', cat: 'Verb', title: 'Partizip Perfekt als Adjektiv', points: 'en pyntet hytte, et pyntet bord, pyntede hytter / den pyntede hytta (class 1 participles in -et take -ede); strong participles: en stjålet sykkel, et skrevet brev (pl. skrevne / stjålne). Predicative after være/bli: Bordet er dekket. Veien ble stengt.' },
      { id: 'g21_ligge_staa_sitte', cat: 'Verb', title: 'ligge, stå, sitte + Verb', points: 'Norwegian expresses an ongoing action with a position verb: Hun sitter og leser. Vi sto og ventet. Han ligger og sover. Both verbs in the same tense. Also holde på med å (gerade dabei sein).' },
      { id: 'g21_til_genitiv', cat: 'Substantiv', title: 'til + Genitiv', points: 'Old genitive forms survive after til in fixed phrases: til fjells (in die/den Berge(n)), til sjøs (zur See), til bords (zu Tisch), til sengs (ins/im Bett), til skogs (in den Wald), til lands (an Land, zu Lande), til havs (aufs Meer), til fots (zu Fuß), til stede (anwesend), til livs (få noe til livs = zu sich nehmen), til topps (bis ganz nach oben). Direction and location alike: Vi drar til fjells i påsken. Hun ligger til sengs. Not productive – learn them as phrases.' },
      { id: 'g21_uregelmessige_substantiv', cat: 'Substantiv', title: 'Übersicht über unregelmäßige Substantive', points: 'Vowel change in the plural: en mann – menn, ei bok – bøker, en bror – brødre, en far – fedre, ei mor – mødre, ei datter – døtre, en fot – føtter, ei hånd – hender, ei tann – tenner, ei natt – netter, en bonde – bønder, ei tå – tær, ei ku – kyr/kuer, ei gås – gjess; et øye – øyne, et kne – knær. No plural ending: en sko – sko, en ting – ting, en feil – feil, ei mus – mus. Others: et museum – museet – museer, et sted – steder, ei søster – søstre. All four forms.' },
    ],
  },
  {
    n: 22,
    level: 'B2',
    page: 221,
    title: 'Hurra for 17. mai!',
    titleDe: 'Hurra für den 17. Mai!',
    place: 'Oslo, Karl Johan und das Schloss',
    when: '17. Mai',
    story:
      'Susanne and Matthias are back in Oslo with the Nygårds and Anna for Constitution Day: bunad, champagne breakfast, the children’s parade (barnetoget) up Karl Johan to the palace where the royal family waves, ice cream and hot dogs, russ in red. Who stands in front, who at the back (fremst, bakerst). A short history: 1814, the Constitution at Eidsvoll, 1905. Thoughts on national feeling – Swiss and German perspectives too.',
    extra: ['Kongen og kongefamilien', 'Norsk nasjonalfølelse'],
    wk: 'Noen datauttrykk',
    grammar: [
      { id: 'g22_preposisjon_genitiv', title: 'Präpositionalverbindung als Ersatz für den Genitiv', points: 'Beyond til (lesson 13): på for parts and properties (taket på huset, prisen på billetten, navnet på gata), i for positions and members (lederen i klubben, elevene i klassen), av for creators, "one of" and titles (et maleri av Munch, mange av oss, kongen av Norge), for for responsibility (sjefen for avdelingen), ved for qualities (det fine ved Norge, fordelen ved …), over for maps and lists (et kart over Oslo), fra for origin (et brev fra mamma). The s-genitive is mostly kept for names and persons: Norges konge, kongens slott.' },
      { id: 'g22_stedsadverb_gradboying', cat: 'Adjektiv/Adverb', title: 'Steigerung einiger Ortsadverbien/-adjektive', points: 'Comparative and superlative from place words: (inne) – indre – innerst, (ute) – ytre – ytterst, (oppe) – øvre – øverst, (nede) – nedre – nederst, (bak) – bakre – bakerst, (foran) – fremre – fremst, (midt) – midtre – midterst; nær – nærmere – nærmest. The comparatives are attributive and uninflected (Indre Oslofjord, den øvre delen, de bakre radene); the superlatives are mostly adverbs: fremst i toget, bakerst i køen, øverst på siden, innerst i fjorden, nærmest slottet.' },
      { id: 'g22_artikkel', title: 'Auslassung des Artikels', points: 'Beyond lesson 4: no article in set phrases for an activity or usual state: ha bil / hund / hytte / tid, kjøre bil, ta buss / tog, spille fotball, gå på ski, få jobb, lese avis; after som (als): som barn, som turist; before titles with names (lower case): kong Harald, dronning Sonja, kronprins Haakon, professor Hansen; in headlines; with generic abstract and mass nouns: Frihet er viktig. Vi trenger sol. German: Ich habe ein Auto → Jeg har bil.' },
    ],
  },
  {
    n: 23,
    level: 'B2',
    page: 234,
    title: 'Sankthans i Tromsø',
    titleDe: 'Mittsommer in Tromsø',
    place: 'Tromsø',
    when: 'Juni',
    story:
      'The midnight sun. Susanne writes a blog post / long e-mail home: sitting and looking at the sea at midnight, the sankthansbål on the beach, Inga’s family in their gákti for a graduation, Matthias who has come up for her last week. Looking back on the year in Norway – what she learned, what she will miss, the funny idioms she bought like a cat in a sack – and what comes next.',
    extra: ['Samene i Norge'],
    wk: 'Han kjøpte katta i sekken og ble sittende med skjegget i postkassen',
    grammar: [
      { id: 'g23_smaaord', title: 'Kleine Wörter mit vielschichtiger Bedeutung: da, før, om, siden, så', points: 'da: als (Da jeg kom, …), dann/damals (Da var jeg ung), weil (= siden, formal), particle (Kom da! Ja da). før: vor (før jul), bevor (før vi spiser), früher (Jeg bodde her før). om: ob (Jeg vet ikke om hun kommer), wenn/falls (Om du vil, …), über (en bok om Norge), in (om en uke), regularly (om morgenen), particle verbs (be om). siden: seit (siden mandag), weil (Siden det regner, …), vor (for to år siden), später (Vi snakkes siden!). så: so (så fint), dann (og så), also/deshalb (…, så vi ble hjemme), sah (preteritum of se), so dass (så at), säen (å så).' },
      { id: 'g23_uregelmessige_verb', cat: 'Verb', title: 'Liste der unregelmäßigen Verben', points: 'Patterns of strong verbs: i – a – u (drikke – drakk – drukket, finne – fant – funnet), i – ei/e – i (skrive – skrev – skrevet, bite – bet – bitt), y – øy – ø (fly – fløy – fløyet), e – a – å (bære – bar – båret, stjele – stjal – stjålet), a – o – a (fare – for – fart, dra – dro – dratt). Irregular weak: selge – solgte – solgt, fortelle – fortalte – fortalt, legge – la – lagt, sette – satte – satt, gjøre – gjorde – gjort. The Verben tab in the app lists every verb of the course with all its forms.' },
    ],
  },
];

export const planByN = new Map(PLAN.map((l) => [l.n, l]));
